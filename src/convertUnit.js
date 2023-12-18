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

export default function convertUnit(distance, fromUnit, toUnit) {
  switch(fromUnit) {
    case 'km':
      switch(toUnit) {
        case 'au':
          return kilometersToAU(distance);
        case 'm':
          return kiloToBase(distance);
        case 'mi':
          return kilometersToMiles(distance);
        case 'ft':
          return metersToFeet(kiloToBase(distance));
        default:
          throw new Error(`fromUnit ${fromUnit} is incompatible with toUnit ${toUnit} or has not been implemented yet`);
      }
    case 'au':
      switch(toUnit) {
        case 'km':
          return auToKilometers(distance);
        case 'm':
          return kiloToBase(auToKilometers(distance));
        case 'mi':
          return kilometersToMiles(auToKilometers(distance));
        case 'ft':
          return metersToFeet(kiloToBase(auToKilometers(distance)));
        default:
          throw new Error(`fromUnit ${fromUnit} is incompatible with toUnit ${toUnit} or has not been implemented yet`)
      }
    case 'm':
      switch(toUnit) {
        case 'km':
          return baseToKilo(distance);
        case 'au':
          return kilometersToAU(baseToKilo(distance));
        case 'mi':
          return kilometersToMiles(baseToKilo(distance));
        case 'ft':
          return metersToFeet(distance);
        default:
          throw new Error(`fromUnit ${fromUnit} is incompatible with toUnit ${toUnit} or has not been implemented yet`)
      }
    case 'mi':
      switch(toUnit) {
        case 'km':
          return milesToKilometers(distance);
        case 'au':
          return kilometersToAU(milesToKilometers(distance));
        case 'm':
          return kiloToBase(milesToKilometers(distance));
        case 'ft':
          return milesToFeet(distance);
        default:
          throw new Error(`fromUnit ${fromUnit} is incompatible with toUnit ${toUnit} or has not been implemented yet`)
      }
    case 'ft':
      switch(toUnit) {
        case 'km':
          return baseToKilo(feetToMeters(distance));
        case 'au':
          return kilometersToAU(baseToKilo(feetToMeters(distance)));
        case 'm':
          return feetToMeters(distance);
        case 'mi':
          return feetToMiles(distance);
        case 'in':
          return feetToInches(distance);
        default:
          throw new Error(`fromUnit ${fromUnit} is incompatible with toUnit ${toUnit} or has not been implemented yet`)
      }
    case 'in':
      switch(toUnit) {
        case 'ft':
          return inchesToFeet(distance);
        default:
          throw new Error(`fromUnit ${fromUnit} is incompatible with toUnit ${toUnit} or has not been implemented yet`)
      }
    case 'sec':
      switch(toUnit) {
        case 'min':
          return secondsToMinutes(distance);
        case 'hr':
          return secondsToHours(distance);
        case 'day':
          return secondsToDays(distance);
        default:
          throw new Error(`fromUnit ${fromUnit} is incompatible with toUnit ${toUnit} or has not been implemented yet`)
      }
    case 'min':
      switch(toUnit) {
        case 'sec':
          return minutesToSeconds(distance);
        case 'hr':
          return minutesToHours(distance);
        case 'day':
          return minutesToDays(distance);
        default:
          throw new Error(`fromUnit ${fromUnit} is incompatible with toUnit ${toUnit} or has not been implemented yet`)
      }
    case 'hr':
      switch(toUnit) {
        case 'sec':
          return hoursToSeconds(distance);
        case 'min':
          return hoursToMinutes(distance);
        case 'day':
          return hoursToDays(distance);
        default:
          throw new Error(`fromUnit ${fromUnit} is incompatible with toUnit ${toUnit} or has not been implemented yet`)
      }
    case 'day':
      switch(toUnit) {
        case 'sec':
          return daysToSeconds(distance);
        case 'min':
          return daysToMinutes(distance);
        case 'hr':
          return daysToHours(distance);
        default:
          throw new Error(`fromUnit ${fromUnit} is incompatible with toUnit ${toUnit} or has not been implemented yet`)
      }
    default:
      throw new Error(`fromUnit ${fromUnit} is incompatible with toUnit ${toUnit} or has not been implemented yet`)
  }
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


