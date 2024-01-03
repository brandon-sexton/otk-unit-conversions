const MILLI_TO_BASE = 1000;
const BASE_TO_MILLI = 1 / MILLI_TO_BASE;
const KILO_TO_BASE = 1000;
const BASE_TO_KILO = 1 / KILO_TO_BASE;

/**
 * Converts milli to base units.
 * @param {number} milli - The distance in milli units.
 * @return {number} The distance in base units.
 */
export function milliToBase(milli) {
  return milli * MILLI_TO_BASE;
}

/**
 * Converts base units to milli.
 * @param {number} base - The distance in base units.
 * @return {number} The distance in milli units.
 */
export function baseToMilli(base) {
  return base * BASE_TO_MILLI;
}

/**
 * Converts kilometers to base units.
 * @param {number} kilometers - The distance in kilometers.
 * @return {number} The distance in base units.
 */
export function kiloToBase(kilometers) {
  return kilometers * KILO_TO_BASE;
}

/**
 * Converts base units to kilometers.
 * @param {number} meters - The distance in base units.
 * @return {number} The distance in kilometers.
 */
export function baseToKilo(meters) {
  return meters * BASE_TO_KILO;
}
