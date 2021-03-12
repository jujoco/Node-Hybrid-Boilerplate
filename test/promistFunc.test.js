import promiseFunc from '../src/javascript/promiseFunc';

test('Promise should should return the same value', async () => {
  const result = await promiseFunc(1);
  expect(result).toBe(1);
});
