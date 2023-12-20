const KM_TO_AU = 1 / 149597870.7;
const AU_TO_KM = 149597870.7;
const KILO_TO_BASE = 1000;
const BASE_TO_KILO = 1 / 1000;
const FEET_TO_METERS = 0.3048;
const METERS_TO_FEET = 1 / 0.3048;
const MILES_TO_KM = 1.60934;
const KM_TO_MILES = 1 / 1.60934;
const MILES_TO_FEET = 5280;
const FEET_TO_MILES = 1 / 5280;
const FEET_TO_INCHES = 12;
const INCHES_TO_FEET = 1 / 12;
const SECOND_TO_MINUTE = 1 / 60;
const MINUTE_TO_SECOND = 60;
const MINUTE_TO_HOUR = 1 / 60;
const HOUR_TO_MINUTE = 60;
const HOUR_TO_DAY = 1 / 24;
const DAY_TO_HOUR = 24;
const MILLI_TO_BASE = 1 / 1000;
const BASE_TO_MILLI = 1000;

const conversionFunctions = {
  km: {
    au: kilometersToAU,
    m: kiloToBase,
    mi: kilometersToMiles,
    ft: (distance) => metersToFeet(kiloToBase(distance)),
  },
  mm: {
    m: milliToBase,
    in: (distance) => feetToInches(metersToFeet(milliToBase(distance))),
  },
  au: {
    km: auToKilometers,
    m: (distance) => kiloToBase(auToKilometers(distance)),
    mi: (distance) => kilometersToMiles(auToKilometers(distance)),
    ft: (distance) => metersToFeet(kiloToBase(auToKilometers(distance))),
  },
  m: {
    km: baseToKilo,
    au: (distance) => kilometersToAU(baseToKilo(distance)),
    mi: (distance) => kilometersToMiles(baseToKilo(distance)),
    ft: metersToFeet,
  },
  mi: {
    km: milesToKilometers,
    au: (distance) => kilometersToAU(milesToKilometers(distance)),
    m: (distance) => baseToKilo(milesToKilometers(distance)),
    ft: milesToFeet,
  },
  ft: {
    km: (distance) => baseToKilo(feetToMeters(distance)),
    au: (distance) => kilometersToAU(baseToKilo(feetToMeters(distance))),
    m: feetToMeters,
    mi: feetToMiles,
    in: feetToInches,
  },
  in: {
    ft: inchesToFeet,
    mm: (distance) => baseToMilli(feetToMeters(inchesToFeet(distance))),
  },
  sec: {
    min: secondsToMinutes,
    hr: secondsToHours,
    day: secondsToDays,
  },
  min: {
    sec: minutesToSeconds,
    hr: minutesToHours,
    day: minutesToDays,
  },
  hr: {
    sec: hoursToSeconds,
    min: hoursToMinutes,
    day: hoursToDays,
  },
  day: {
    sec: daysToSeconds,
    min: daysToMinutes,
    hr: daysToHours,
  },
};

export default function convertDistance(distance, fromUnit, toUnit) {
  const fromUnitFunctions = conversionFunctions[fromUnit];
  if (!fromUnitFunctions) {
    throw new Error(`fromUnit ${fromUnit} is not supported`);
  }

  const conversionFunction = fromUnitFunctions[toUnit];
  if (!conversionFunction) {
    throw new Error(
      `fromUnit ${fromUnit} is incompatible with toUnit ${toUnit} or has not been implemented yet`
    );
  }

  return conversionFunction(distance);
}

export function kilometersToAU(kilometers) {
  return kilometers * KM_TO_AU;
}

export function auToKilometers(au) {
  return au * AU_TO_KM;
}

export function kiloToBase(kilometers) {
  return kilometers * KILO_TO_BASE;
}

export function baseToKilo(meters) {
  return meters * BASE_TO_KILO;
}

export function feetToMeters(feet) {
  return feet * FEET_TO_METERS;
}

export function metersToFeet(meters) {
  return meters * METERS_TO_FEET;
}

export function milesToKilometers(miles) {
  return miles * MILES_TO_KM;
}

export function kilometersToMiles(kilometers) {
  return kilometers * KM_TO_MILES;
}

export function milesToFeet(miles) {
  return miles * MILES_TO_FEET;
}

export function feetToMiles(feet) {
  return feet * FEET_TO_MILES;
}

export function feetToInches(feet) {
  return feet * FEET_TO_INCHES;
}

export function inchesToFeet(inches) {
  return inches * INCHES_TO_FEET;
}

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

export function milliToBase(milli) {
  return milli * MILLI_TO_BASE;
}

export function baseToMilli(base) {
  return base * BASE_TO_MILLI;
}
