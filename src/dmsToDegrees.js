/**
 * Converts degrees, minutes, and seconds to decimal degrees.
 * 
 * @param {number} degrees - The degrees value.
 * @param {number} minutes - The minutes value.
 * @param {number} seconds - The seconds value.
 * @returns {number} - The decimal degrees value.
 */
export default function dmsToDegrees(degrees, minutes, seconds) {
    
    let ONE_OVER_SIXTY = 1 / 60;

    // 1. Determine the sign of the final result.
    let sign = 1;
    if (degrees < 0) {
        sign = -1;
    };

    // 2. Convert the degrees, minutes, and seconds to absolute values.
    let degs = Math.abs(degrees);
    let mins = Math.abs(minutes);
    let secs = Math.abs(seconds);

    // 3. Convert the seconds to a fraction of a minute.
    let dm = secs * ONE_OVER_SIXTY;

    // 4. Add the fraction of a minute to the minutes.
    mins += dm;

    // 5. Convert the minutes to a fraction of a degree.
    let dd = mins * ONE_OVER_SIXTY;

    // 6. Add the fraction of a degree to the degrees.
    degs += dd;

    // 7. Multiply the result by the sign to determine the final result.
    return degs * sign;
}
