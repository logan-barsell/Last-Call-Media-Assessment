import { textTruncate } from '../../typography';

test('truncates the given string at the given max length with the ending provided', () => {
  const str = 'This is a string! It has a length of 40.';
  const length = 16;
  const ending = '...!';
  const result = textTruncate(str, length, ending);
  expect(result.length).not.toEqual(str.length);
  expect(result.length).toEqual(length);
  expect(
    result.substring(result.length - ending.length, result.length)
  ).toEqual(ending);
});
