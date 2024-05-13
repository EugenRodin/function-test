import weekFn from '../2-function';

test('returns "Понеділок" for 1', () => {
  expect(weekFn(1)).toBe('Понеділок');
})

test('returns "Вівторок" for 2', () => {  
  expect(weekFn(2)).toBe('Вівторок');
})

test('returns "Середа" for 3', () => {
  expect(weekFn(3)).toBe('Середа');
}) 

test('returns "Четвер" for 4', () => {  
  expect(weekFn(4)).toBe('Четвер');
}) 

test('returns "П\'ятниця" for 5', () => {
  expect(weekFn(5)).toBe('П\'ятниця');
})

test('returns "Субота" for 6', () => {
  expect(weekFn(6)).toBe('Субота');
})

test('returns "Неділя" for 7', () => {
  expect(weekFn(7)).toBe('Неділя');
})