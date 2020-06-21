/**
 * Cracks open the safe by yielding the correct values.
 */
export function * open () {
  try {
    const number = yield 'hello';
    yield number * 42;
  } catch (err) {
    yield undefined;
    return err.toUpperCase();
  }
}
