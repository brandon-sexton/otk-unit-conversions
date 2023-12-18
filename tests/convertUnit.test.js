import convertUnit from '../src/convertUnit';

test('kilometers to meters', () => {
  expect(convertUnit(1, 'km', 'm')).toBe(1000, '1 km should be 1000 m');
});

test('meters to kilometers', () => {
  expect(convertUnit(1000, 'm', 'km')).toBe(1, '1000 m should be 1 km');
})

test('astronomical unit to kilometers', () => {
  expect(convertUnit(1, 'au', 'km')).toBe(149597870.7, '1 AU should be 149597870.7 km');
});

test('kilometers to astronomical unit', () => {
  expect(convertUnit(149597870.7, 'km', 'au')).toBe(1);
});

test('minutes to seconds', () => {
  expect(convertUnit(1, 'min', 'sec')).toBe(60, '1 minute should be 60 seconds');
});

test('seconds to minutes', () => {
  expect(convertUnit(60, 'sec', 'min')).toBe(1, '60 seconds should be 1 minute');
});

test('hours to minutes', () => {
  expect(convertUnit(1, 'hr', 'min')).toBe(60, '1 hour should be 60 minutes');
});

test('minutes to hours', () => {
  expect(convertUnit(60, 'min', 'hr')).toBe(1, '60 minutes should be 1 hour');
});

test('days to hours', () => {
  expect(convertUnit(1, 'day', 'hr')).toBe(24, '1 day should be 24 hours');
});

test('hours to days', () => {
  expect(convertUnit(24, 'hr', 'day')).toBe(1, '24 hours should be 1 day');
});

test('seconds to days', () => {
  expect(convertUnit(86400, 'sec', 'day')).toBe(1, '86400 seconds should be 1 day');
});

test('days to seconds', () => {
  expect(convertUnit(1, 'day', 'sec')).toBe(86400, '1 day should be 86400 seconds');
});

test('days to minutes', () => {
  expect(convertUnit(1, 'day', 'min')).toBe(1440, '1 day should be 1440 minutes');
});

test('minutes to days', () => {
  expect(convertUnit(1440, 'min', 'day')).toBe(1, '1440 minutes should be 1 day');
});

test('seconds to hours', () => {
  expect(convertUnit(3600, 'sec', 'hr')).toBe(1, '3600 seconds should be 1 hour');
});

test('hours to seconds', () => {
  expect(convertUnit(1, 'hr', 'sec')).toBe(3600, '1 hour should be 3600 seconds');
});

test('inches to feet', () => {
  expect(convertUnit(12, 'in', 'ft')).toBe(1, '12 inches should be 1 foot');
});

test('feet to inches', () => {
  expect(convertUnit(1, 'ft', 'in')).toBe(12, '1 foot should be 12 inches');
});

test('feet to miles', () => {
  expect(convertUnit(5280, 'ft', 'mi')).toBe(1, '5280 feet should be 1 mile');
});

test('miles to feet', () => {
  expect(convertUnit(1, 'mi', 'ft')).toBe(5280, '1 mile should be 5280 feet');
});
