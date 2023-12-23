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
const MILLI_TO_BASE = 1 / 1000;
const BASE_TO_MILLI = 1000;

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

export function milliToBase(milli) {
  return milli * MILLI_TO_BASE;
}

export function baseToMilli(base) {
  return base * BASE_TO_MILLI;
}
