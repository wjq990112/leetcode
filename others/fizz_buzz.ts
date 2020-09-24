/**
 * @file FizzBuzz
 */
export default function fizzBuzz(): (number | string)[] {
  const result = new Array(100);
  for (let index = 1, len = result.length + 1; index < len; index++) {
    if (!(index % 3 || index % 5)) {
      result[index - 1] = 'FizzBuzz';
      continue;
    }
    if (!(index % 3)) {
      result[index - 1] = 'Fizz';
      continue;
    }
    if (!(index % 5)) {
      result[index - 1] = 'Buzz';
      continue;
    }
    result[index - 1] = index;
  }
  return result;
}
