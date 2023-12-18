import { kilometersToMeters, metersToKilometers, auToKilometers, kilometersToAU } from './convertDistance';

test('converts 1 km to 1000 m', () => {
  expect(kilometersToMeters(1)).toBe(1000);
});

test('converts 2 km to 2000 m', () => {
  expect(kilometersToMeters(2)).toBe(2000);
});

test('converts 1000 m to 1 km', () => {
  expect(metersToKilometers(1000)).toBe(1);
})

test('converts 1 AU to 149597870.7 km', () => {
  expect(auToKilometers(1)).toBe(149597870.7);
});

test('converts 149597870.7 km to 1 AU', () => {
  expect(kilometersToAU(149597870.7)).toBe(1);
});