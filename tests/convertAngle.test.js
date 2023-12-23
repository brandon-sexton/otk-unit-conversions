import { degreesToDMS, dmsToDegrees } from '../src/convertAngle';

test('p.20 Test #19 reverse', () => {
  let dmsSign = degreesToDMS(13.069444444444444);
  expect(dmsSign[0]).toEqual(13);
  expect(dmsSign[1]).toEqual(4);
  expect(dmsSign[2]).toBeCloseTo(10, 6);
  expect(dmsSign[3]).toEqual(1);
});

test('p.20 Test #21 reverse', () => {
  let dmsSign = degreesToDMS(300.3333333333333);
  expect(dmsSign[0]).toEqual(300);
  expect(dmsSign[1]).toEqual(20);
  expect(dmsSign[2]).toBeCloseTo(0, 6);
  expect(dmsSign[3]).toEqual(1);
});

test('p.20 Test #20', () => {
  let dmsSign = degreesToDMS(-0.5083333333333);
  expect(dmsSign[0]).toEqual(0);
  expect(dmsSign[1]).toEqual(30);
  expect(dmsSign[2]).toBeCloseTo(30, 6);
  expect(dmsSign[3]).toEqual(-1);
});

test('p.20 Test #22', () => {
  let dmsSign = degreesToDMS(10.2958);
  expect(dmsSign[0]).toEqual(10);
  expect(dmsSign[1]).toEqual(17);
  expect(dmsSign[2]).toBeCloseTo(44.88, 6);
  expect(dmsSign[3]).toEqual(1);
});

test('p.20 Test #19', () => {
  expect(dmsToDegrees(13, 4, 10)).toBeCloseTo(13.069444, 6);
});

test('p.20 Test #21', () => {
  expect(dmsToDegrees(300, 20, 0)).toBeCloseTo(300.333333, 6);
});