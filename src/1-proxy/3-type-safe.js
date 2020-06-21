/**
 * Returns a new function that checks the arguments it receives.
 * Preserves all the other properties that the function has.
 *
 * @param {Function} fn function to wrap
 * @param {string[]} argumentTypes array of types (results of typeof calls)
 */
export function makeTypeSafe (fn, argumentTypes) {
  return new Proxy(fn, {
    apply: function (target, thisArg, argumentsList) {
      if (argumentTypes.length !== argumentsList.length) {
        throw new TypeError('Incorrect number of arguments');
      } else {
        argumentTypes.map((type, index) => {
          if (typeof argumentsList[index] !== type) {
            throw new TypeError('Incorrect argument type');
          }
        });
        return Reflect.apply(target, thisArg, argumentsList)
      }
    }
  })
}
