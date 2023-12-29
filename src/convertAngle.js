/**
 * Converts degrees to degrees, minutes, and seconds (DMS) format.
 * @param {number} degrees - The degrees value to convert.
 * @return {Array} - An array of the degrees, minutes, seconds, and sign.
 */
export function degreesToDMS(degrees) {
  // 1. Determine the sign of the final result.
  let sign = 1;
  if (degrees < 0) {
    sign = -1;
  };

  // 2. get absolute value
  const degs = Math.abs(degrees);

  // 3. get degrees
  let d = Math.floor(degs);

  // 4. get minutes
  let m = Math.floor(((degs - d) * 60).toPrecision(12));

  // 5. get seconds
  let s = ((degs - d) * 60 - m) * 60;

  if (s > 59.99999999999999) {
    s = 0;
    m += 1;
  }
  if (m > 59) {
    m = 0;
    d += 1;
  }

  return [d, m, s, sign];
};

/**
 * Converts degrees, minutes, and seconds to decimal degrees.
 * @param {number} degrees - The degrees value.
 * @param {number} minutes - The minutes value.
 * @param {number} seconds - The seconds value.
 * @return {number} - The decimal degrees value.
 */
export function dmsToDegrees(degrees, minutes, seconds) {
  const ONE_OVER_SIXTY = 1 / 60;

  // 1. Determine the sign of the final result.
  let sign = 1;
  if (degrees < 0) {
    sign = -1;
  };

  // 2. Convert the degrees, minutes, and seconds to absolute values.
  let degs = Math.abs(degrees);
  let mins = Math.abs(minutes);
  const secs = Math.abs(seconds);

  // 3. Convert the seconds to a fraction of a minute.
  const dm = secs * ONE_OVER_SIXTY;

  // 4. Add the fraction of a minute to the minutes.
  mins += dm;

  // 5. Convert the minutes to a fraction of a degree.
  const dd = mins * ONE_OVER_SIXTY;

  // 6. Add the fraction of a degree to the degrees.
  degs += dd;

  // 7. Multiply the result by the sign to determine the final result.
  return degs * sign;
}

export default {
  degreesToDMS,
  dmsToDegrees,
};
