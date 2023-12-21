/**
 * Converts degrees to degrees, minutes, and seconds (DMS) format.
 * 
 * @param {number} degrees - The degrees value to convert.
 * @returns {Array} - An array containing the degrees, minutes, seconds, and sign.
 */
export default function degreesToDMS(degrees) {
    
    // 1. Determine the sign of the final result.
    let sign = 1;
    if (degrees < 0) {
        sign = -1;
    };

    // 2. get absolute value
    let degs = Math.abs(degrees);

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