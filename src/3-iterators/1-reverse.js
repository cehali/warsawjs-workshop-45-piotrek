/**
 * @param {any[]} array the input array
 * @returns {Iterable} iterable that goes through the array in reverse.
 */
export function reverse (array) {
  return {
    // [Symbol.iterator]() {
    //   return {
    //     i: array[array.length - 1],
    //     next() {
    //       if (this.i > 0) {
    //         return { value: this.i--, done: false };
    //       }
    //       return { value: undefined, done: true };
    //     }
    //   }
    // }

    *[Symbol.iterator]() {
      for (let i = array.length - 1; i >= 0; i--) {
        yield array[i];
      }
    }
  }
}
