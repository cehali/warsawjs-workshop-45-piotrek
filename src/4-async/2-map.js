/**
 * Maps over an asyncIterable
 */
export function map (asyncIterable, fn) {
  return {
    async *[Symbol.asyncIterator]() {
      for await (const element of asyncIterable) {
        yield fn(element);
      }
    }
  }
}
