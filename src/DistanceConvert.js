const KM_TO_AU = 1 / 149597870.7;
const AU_TO_KM = 149597870.7;
const KM_TO_METERS = 1000;
const METERS_TO_KM = 1 / 1000;

export default class DistanceConvert {
  constructor() {
    this.kilometersToAU = kilometersToAU;
    this.auToKilometers = auToKilometers;
    this.kilometersToMeters = kilometersToMeters;
    this.metersToKilometers = metersToKilometers;
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
