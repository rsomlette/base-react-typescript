/**
 * Returns the input itself if it's a full object type, `null` otherwise.
 *
 * In JavaScript, `typeof null === 'object'` as well as `typeof [] === 'object'`.
 * Hence, we define a full object as `!null && !array && typeof object`.
 *
 * When using the `mixed` type of `Flow`, you will often need to check what type
 * it is. However, for `object` type, the caveats of JavaScript regarding
 * `null` and `[]` gets in thw way. One must first check the three conditions to
 * use `input` as an `Object` type.
 *
 * This helper method is here to ease the Flow check. Use it like this:
 *
 * ```
 * const value = asObject(data);
 * if (value == null) throw new Error('Excepting an object type!');
 * ```
 *
 * @param input The input to transform (or not).
 *
 * @return The input itself if a full object type, null otherwise.
 */
export function asObject(input: any): any {
  return input != null && typeof input === 'object' && !Array.isArray(input) ? input : null;
}
