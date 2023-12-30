const FEET_TO_METERS = 0.3048;
const METERS_TO_FEET = 1 / FEET_TO_METERS;
const MILES_TO_KM = 1.609344;
const KM_TO_MILES = 1 / MILES_TO_KM;
const MILES_TO_FEET = 5280;
const FEET_TO_MILES = 1 / MILES_TO_FEET;
const FEET_TO_INCHES = 12;
const INCHES_TO_FEET = 1 / FEET_TO_INCHES;
const KM_TO_AU = 1 / 149597870.7;
const AU_TO_KM = 149597870.7;

/**
 * Converts kilometers to astronomical units (AU).
 * @param {number} kilometers - The distance in kilometers.
 * @return {number} The distance in astronomical units (AU).
 */
export function kilometersToAU(kilometers) {
  return kilometers * KM_TO_AU;
}

/**
 * Converts astronomical units (AU) to kilometers.
 * @param {number} au - The distance in astronomical units (AU).
 * @return {number} The distance in kilometers.
 */
export function auToKilometers(au) {
  return au * AU_TO_KM;
}

/**
 * Converts feet to meters.
 * @param {number} feet - The distance in feet.
 * @return {number} The distance in meters.
 */
export function feetToMeters(feet) {
  return feet * FEET_TO_METERS;
}

/**
 * Converts meters to feet.
 * @param {number} meters - The distance in meters.
 * @return {number} The distance in feet.
 */
export function metersToFeet(meters) {
  return meters * METERS_TO_FEET;
}

/**
 * Converts miles to kilometers.
 * @param {number} miles - The distance in miles.
 * @return {number} The distance in kilometers.
 */
export function milesToKilometers(miles) {
  return miles * MILES_TO_KM;
}

/**
 * Converts kilometers to miles.
 * @param {number} kilometers - The distance in kilometers.
 * @return {number} The distance in miles.
 */
export function kilometersToMiles(kilometers) {
  return kilometers * KM_TO_MILES;
}

/**
 * Converts miles to feet.
 * @param {number} miles - The distance in miles.
 * @return {number} The distance in feet.
 */
export function milesToFeet(miles) {
  return miles * MILES_TO_FEET;
}

/**
 * Converts feet to miles.
 * @param {number} feet - The distance in feet.
 * @return {number} The distance in miles.
 */
export function feetToMiles(feet) {
  return feet * FEET_TO_MILES;
}

/**
 * Converts feet to inches.
 * @param {number} feet - The distance in feet.
 * @return {number} The distance in inches.
 */
export function feetToInches(feet) {
  return feet * FEET_TO_INCHES;
}

/**
 * Converts inches to feet.
 * @param {number} inches - The distance in inches.
 * @return {number} The distance in feet.
 */
export function inchesToFeet(inches) {
  return inches * INCHES_TO_FEET;
}
