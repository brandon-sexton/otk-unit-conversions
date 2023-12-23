const SECOND_TO_MINUTE = 1 / 60;
const MINUTE_TO_SECOND = 60;
const MINUTE_TO_HOUR = 1 / 60;
const HOUR_TO_MINUTE = 60;
const HOUR_TO_DAY = 1 / 24;
const DAY_TO_HOUR = 24;

/**
 * Converts seconds to minutes.
 * @param {number} seconds - The number of seconds to convert.
 * @returns {number} The equivalent number of minutes.
 */
export function secondsToMinutes(seconds) {
  return seconds * SECOND_TO_MINUTE;
}

/**
 * Converts minutes to seconds.
 * @param {number} minutes - The number of minutes to convert.
 * @returns {number} The equivalent number of seconds.
 */
export function minutesToSeconds(minutes) {
  return minutes * MINUTE_TO_SECOND;
}

/**
 * Converts minutes to hours.
 * @param {number} minutes - The number of minutes to convert.
 * @returns {number} The equivalent number of hours.
 */
export function minutesToHours(minutes) {
  return minutes * MINUTE_TO_HOUR;
}

/**
 * Converts hours to minutes.
 * @param {number} hours - The number of hours to convert.
 * @returns {number} The equivalent number of minutes.
 */
export function hoursToMinutes(hours) {
  return hours * HOUR_TO_MINUTE;
}

/**
 * Converts hours to days.
 * @param {number} hours - The number of hours to convert.
 * @returns {number} The equivalent number of days.
 */
export function hoursToDays(hours) {
  return hours * HOUR_TO_DAY;
}

/**
 * Converts days to hours.
 * @param {number} days - The number of days to convert.
 * @returns {number} The equivalent number of hours.
 */
export function daysToHours(days) {
  return days * DAY_TO_HOUR;
}

/**
 * Converts days to minutes.
 * @param {number} days - The number of days to convert.
 * @returns {number} The equivalent number of minutes.
 */
export function daysToMinutes(days) {
  return hoursToMinutes(daysToHours(days));
}

/**
 * Converts minutes to days.
 * @param {number} minutes - The number of minutes to convert.
 * @returns {number} The equivalent number of days.
 */
export function minutesToDays(minutes) {
  return hoursToDays(minutesToHours(minutes));
}

/**
 * Converts days to seconds.
 * @param {number} days - The number of days to convert.
 * @returns {number} The equivalent number of seconds.
 */
export function daysToSeconds(days) {
  return minutesToSeconds(daysToMinutes(days));
}

/**
 * Converts seconds to days.
 * @param {number} seconds - The number of seconds to convert.
 * @returns {number} The equivalent number of days.
 */
export function secondsToDays(seconds) {
  return minutesToDays(secondsToMinutes(seconds));
}

/**
 * Converts hours to seconds.
 * @param {number} hours - The number of hours to convert.
 * @returns {number} The equivalent number of seconds.
 */
export function hoursToSeconds(hours) {
  return minutesToSeconds(hoursToMinutes(hours));
}

/**
 * Converts seconds to hours.
 * @param {number} seconds - The number of seconds to convert.
 * @returns {number} The equivalent number of hours.
 */
export function secondsToHours(seconds) {
  return minutesToHours(secondsToMinutes(seconds));
}