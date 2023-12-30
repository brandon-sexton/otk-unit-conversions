import {kiloToBase, baseToKilo} from '../src/convertMetric';

test('kilometers to meters', () => {
  expect(kiloToBase(1)).toBe(1000, '1 km should be 1000 m');
});

test('meters to kilometers', () => {
  expect(baseToKilo(1000)).toBe(1, '1000 m should be 1 km');
});
