const SECOND_TO_MINUTE = 1 / 60;
const MINUTE_TO_SECOND = 60;
const MINUTE_TO_HOUR = 1 / 60;
const HOUR_TO_MINUTE = 60;
const HOUR_TO_DAY = 1 / 24;
const DAY_TO_HOUR = 24;
const JD_RECIPPROCAL_1 = 1 / 36524.25;
const JD_RECIPPROCAL_2 = 1 / 365.25;
const JD_RECIPPROCAL_3 = 1 / 30.6001;
// const MJD_ZERO = 2400000.5;
// const J2000_DATE = 2451545.0;
// const JULIAN_CENTURY = 36525;

/**
 * Converts seconds to minutes.
 * @param {number} seconds - The number of seconds to convert.
 * @return {number} The equivalent number of minutes.
 */
export function secondsToMinutes(seconds) {
  return seconds * SECOND_TO_MINUTE;
}

/**
 * Converts minutes to seconds.
 * @param {number} minutes - The number of minutes to convert.
 * @return {number} The equivalent number of seconds.
 */
export function minutesToSeconds(minutes) {
  return minutes * MINUTE_TO_SECOND;
}

/**
 * Converts minutes to hours.
 * @param {number} minutes - The number of minutes to convert.
 * @return {number} The equivalent number of hours.
 */
export function minutesToHours(minutes) {
  return minutes * MINUTE_TO_HOUR;
}

/**
 * Converts hours to minutes.
 * @param {number} hours - The number of hours to convert.
 * @return {number} The equivalent number of minutes.
 */
export function hoursToMinutes(hours) {
  return hours * HOUR_TO_MINUTE;
}

/**
 * Converts hours to days.
 * @param {number} hours - The number of hours to convert.
 * @return {number} The equivalent number of days.
 */
export function hoursToDays(hours) {
  return hours * HOUR_TO_DAY;
}

/**
 * Converts days to hours.
 * @param {number} days - The number of days to convert.
 * @return {number} The equivalent number of hours.
 */
export function daysToHours(days) {
  return days * DAY_TO_HOUR;
}

/**
 * Converts days to minutes.
 * @param {number} days - The number of days to convert.
 * @return {number} The equivalent number of minutes.
 */
export function daysToMinutes(days) {
  return hoursToMinutes(daysToHours(days));
}

/**
 * Converts minutes to days.
 * @param {number} minutes - The number of minutes to convert.
 * @return {number} The equivalent number of days.
 */
export function minutesToDays(minutes) {
  return hoursToDays(minutesToHours(minutes));
}

/**
 * Converts days to seconds.
 * @param {number} days - The number of days to convert.
 * @return {number} The equivalent number of seconds.
 */
export function daysToSeconds(days) {
  return minutesToSeconds(daysToMinutes(days));
}

/**
 * Converts seconds to days.
 * @param {number} seconds - The number of seconds to convert.
 * @return {number} The equivalent number of days.
 */
export function secondsToDays(seconds) {
  return minutesToDays(secondsToMinutes(seconds));
}

/**
 * Converts hours to seconds.
 * @param {number} hours - The number of hours to convert.
 * @return {number} The equivalent number of seconds.
 */
export function hoursToSeconds(hours) {
  return minutesToSeconds(hoursToMinutes(hours));
}

/**
 * Converts seconds to hours.
 * @param {number} seconds - The number of seconds to convert.
 * @return {number} The equivalent number of hours.
 */
export function secondsToHours(seconds) {
  return minutesToHours(secondsToMinutes(seconds));
}

/**
 * Converts hours, minutes, and seconds to days.
 * @param {number} hours - The number of hours to convert.
 * @param {number} minutes - The number of minutes to convert.
 * @param {number} seconds - The number of seconds to convert.
 * @return {number} The equivalent number of days.
 */
export function hmsToDays(hours, minutes, seconds) {
  return hoursToDays(hours) + minutesToDays(minutes) + secondsToDays(seconds);
}

/**
 * Converts days to hours, minutes, and seconds.
 * @param {number} days - The number of days to convert.
 * @return {object} The equivalent number of hours, minutes, and seconds.
 */
export function daysToHMS(days) {
  const completeHrs = daysToHours(days);
  const hours = Math.floor(completeHrs);
  const completeMins = hoursToMinutes(completeHrs - hours);
  const minutes = Math.floor(completeMins);
  const seconds = Math.floor(minutesToSeconds(completeMins - minutes));
  return {
    hours,
    minutes,
    seconds,
  };
}

/**
 * Converts calendar date to Julian date.
 * @param {number} yr - The year of the date.
 * @param {number} month - The month of the date.
 * @param {number} day - The day of the date.
 * @param {number} hour - The hour of the date.
 * @param {number} minute - The minute of the date.
 * @param {number} second - The second of the date.
 * @return {number} The equivalent Julian date.
 */
export function calendarToJulian(yr, month, day, hour, minute, second) {
  let y = yr;
  let m = month;
  if (m < 3) {
    y -= 1;
    m += 12;
  }

  const a = Math.floor(y * 0.01);
  const b = 2 - a + Math.floor(a * 0.25);
  const jd = b + Math.floor(365.25 * y) +
    Math.floor(30.6001 * (m + 1)) + day + 1720994.5;
  return jd + hmsToDays(hour, minute, second);
}

/**
 * Converts Julian date to calendar date.
 * @param {number} jd - The Julian date.
 * @return {object} The equivalent calendar date.
 */
export function julianToCalendar(jd) {
  const jd1 = jd + 0.5;
  const i = Math.floor(jd1);
  const f = jd1 - i;
  let b = i;
  if (i > 2299160) {
    const a = Math.floor((i - 1867216.25) * JD_RECIPPROCAL_1);
    b = i + 1 + a - Math.floor(a * 0.25);
  }
  const c = b + 1524;
  const d = Math.floor((c - 122.1) * JD_RECIPPROCAL_2);
  const e = Math.floor(365.25 * d);
  const g = Math.floor((c - e) * JD_RECIPPROCAL_3);
  const day = c - e + f - Math.floor(30.6001 * g);
  let month = g - 1;
  if (g > 13.5) {
    month -= 12;
  }
  let year = d - 4716;
  if (month < 2.5) {
    year += 1;
  }
  const decDay = day - Math.floor(day);
  const time = daysToHMS(decDay);
  const hour = time.hours;
  const minute = time.minutes;
  const second = time.seconds;
  return {
    year,
    month,
    day: Math.floor(day),
    hour,
    minute,
    second,
  };
}

export default {
  secondsToMinutes,
  minutesToSeconds,
  minutesToHours,
  hoursToMinutes,
  hoursToDays,
  daysToHours,
  daysToMinutes,
  minutesToDays,
  daysToSeconds,
  secondsToDays,
  hoursToSeconds,
  secondsToHours,
  hmsToDays,
  daysToHMS,
  calendarToJulian,
  julianToCalendar,
};
