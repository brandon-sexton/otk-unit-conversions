import { baseToKilo, baseToMilli, milliToBase, kiloToBase } from "../src/convertMetric";

test('baseToKilo', () => {
  expect(baseToKilo(1)).toBe(0.001);
});

test('baseToMilli', () => {
  expect(baseToMilli(1)).toBe(1000);
});

test('milliToBase', () => {
  expect(milliToBase(1)).toBe(0.001);
});

test('kiloToBase', () => {
  expect(kiloToBase(1)).toBe(1000);
});