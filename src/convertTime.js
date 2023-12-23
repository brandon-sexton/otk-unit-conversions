const SECOND_TO_MINUTE = 1 / 60;
const MINUTE_TO_SECOND = 60;
const MINUTE_TO_HOUR = 1 / 60;
const HOUR_TO_MINUTE = 60;
const HOUR_TO_DAY = 1 / 24;
const DAY_TO_HOUR = 24;


export function secondsToMinutes(seconds) {
  return seconds * SECOND_TO_MINUTE;
}

export function minutesToSeconds(minutes) {
  return minutes * MINUTE_TO_SECOND;
}

export function minutesToHours(minutes) {
  return minutes * MINUTE_TO_HOUR;
}

export function hoursToMinutes(hours) {
  return hours * HOUR_TO_MINUTE;
}

export function hoursToDays(hours) {
  return hours * HOUR_TO_DAY;
}

export function daysToHours(days) {
  return days * DAY_TO_HOUR;
}

export function daysToMinutes(days) {
  return hoursToMinutes(daysToHours(days));
}

export function minutesToDays(minutes) {
  return hoursToDays(minutesToHours(minutes));
}

export function daysToSeconds(days) {
  return minutesToSeconds(daysToMinutes(days));
}

export function secondsToDays(seconds) {
  return minutesToDays(secondsToMinutes(seconds));
}

export function hoursToSeconds(hours) {
  return minutesToSeconds(hoursToMinutes(hours));
}

export function secondsToHours(seconds) {
  return minutesToHours(secondsToMinutes(seconds));
}