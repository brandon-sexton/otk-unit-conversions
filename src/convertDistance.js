const KM_TO_AU = 1 / 149597870.7;
const AU_TO_KM = 149597870.7;
const KM_TO_METERS = 1000;
const METERS_TO_KM = 1 / 1000;

export default function convertDistance(distance, fromUnit, toUnit) {
  switch(fromUnit) {
    case 'km':
      switch(toUnit) {
        case 'au':
          return kilometersToAU(distance);
        case 'm':
          return kilometersToMeters(distance);
        default:
          return distance;
      }
    case 'au':
      switch(toUnit) {
        case 'km':
          return auToKilometers(distance);
        default:
          return distance;
      }
    case 'm':
      switch(toUnit) {
        case 'km':
          return metersToKilometers(distance);
        default:
          return distance;
      }
    default:
      return distance;
  }
}

export function kilometersToAU(kilometers) {
  return kilometers * KM_TO_AU;
}

export function auToKilometers(au) {
  return au * AU_TO_KM;
}

export function kilometersToMeters(kilometers) {
  return kilometers * KM_TO_METERS;
}

export function metersToKilometers(meters) {
  return meters * METERS_TO_KM;
}
