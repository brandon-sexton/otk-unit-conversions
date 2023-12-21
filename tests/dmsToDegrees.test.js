import dmsToDegrees from "../src/dmsToDegrees";

test('p.20 Test #19', () => {
  expect(dmsToDegrees(13, 4, 10)).toBeCloseTo(13.069444, 6);
});

test('p.20 Test #21', () => {
  expect(dmsToDegrees(300, 20, 0)).toBeCloseTo(300.333333, 6);
});
