const BASE_TO_KILO = 0.001;
const KILO_TO_BASE = 1000;
const BASE_TO_MILLI = 1000;
const MILLI_TO_BASE = 0.001;

/**
 * Converts a value from the base unit to kilo unit.
 * @param {number} base - The value in the base unit.
 * @returns {number} The converted value in kilo unit.
 */
export function baseToKilo(base) {
  return base * BASE_TO_KILO;
}

/**
 * Converts a value from kilo unit to the base unit.
 * @param {number} kilo - The value in kilo unit.
 * @returns {number} The converted value in the base unit.
 */
export function kiloToBase(kilo) {
  return kilo * KILO_TO_BASE;
}

/**
 * Converts a value from the base unit to milli unit.
 * @param {number} base - The value in the base unit.
 * @returns {number} The converted value in milli unit.
 */
export function baseToMilli(base) {
  return base * BASE_TO_MILLI;
}

/**
 * Converts a value from milli unit to the base unit.
 * @param {number} milli - The value in milli unit.
 * @returns {number} The converted value in the base unit.
 */
export function milliToBase(milli) {
  return milli * MILLI_TO_BASE;
}