import { daysToHours, daysToMinutes, daysToSeconds, hoursToDays, hoursToMinutes, hoursToSeconds, minutesToDays, minutesToHours, minutesToSeconds, secondsToDays, secondsToHours, secondsToMinutes } from "../src/convertTime";

test('minutes to seconds', () => {
  expect(minutesToSeconds(1)).toBe(60, '1 minute should be 60 seconds');
});

test('seconds to minutes', () => {
  expect(secondsToMinutes(60)).toBe(1, '60 seconds should be 1 minute');
});

test('hours to minutes', () => {
  expect(hoursToMinutes(1)).toBe(60, '1 hour should be 60 minutes');
});

test('minutes to hours', () => {
  expect(minutesToHours(60)).toBe(1, '60 minutes should be 1 hour');
});

test('days to hours', () => {
  expect(daysToHours(1)).toBe(24, '1 day should be 24 hours');
});

test('hours to days', () => {
  expect(hoursToDays(24)).toBe(1, '24 hours should be 1 day');
});

test('seconds to days', () => {
  expect(secondsToDays(86400)).toBe(1, '86400 seconds should be 1 day');
});

test('days to seconds', () => {
  expect(daysToSeconds(1)).toBe(86400, '1 day should be 86400 seconds');
});

test('days to minutes', () => {
  expect(daysToMinutes(1)).toBe(1440, '1 day should be 1440 minutes');
});

test('minutes to days', () => {
  expect(minutesToDays(1440)).toBe(1, '1440 minutes should be 1 day');
});

test('seconds to hours', () => {
  expect(secondsToHours(3600)).toBe(1, '3600 seconds should be 1 hour');
});

test('hours to seconds', () => {
  expect(hoursToSeconds(1)).toBe(3600, '1 hour should be 3600 seconds');
});