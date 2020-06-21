/**
 * This class lies that everything is an instance of it, except if it is the
 * string `"banana"`.
 */
export class FakeSuperclass {
  static [Symbol.hasInstance] (instance) {
    if (instance === 'banana') {
      return false;
    } 
    return true;
  }
}
