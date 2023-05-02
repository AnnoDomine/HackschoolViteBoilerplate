/**
 * #### Returns a boolean based if the given value is compair with the given type
 * ----------------------------------------------------------------
 * @example isTypeOf<string>("Hallo World") // true
 * @example isTypeOf<number>("Hallo World") // false
 * ----------------------------------------------------------------
 * Only checks simple or declared types.
 * Can't differentiate between string and Array-string types
 * ----------------------------------------------------------------
 * @param check Value to check the given type
 * @returns
 */
export function isTypeOf<T>(check: unknown): check is T {
    if (check as T) {
        return true;
    }
    return false;
}

/**
 * #### Returns a boolean based if the given type is compair with the given instance
 * ----------------------------------------------------------------
 * @example isInstanceOf("string", "Hallo World") // true
 * @example isInstanceOf("array", ["Hallo World"]) // true
 * @example isInstanceOf("object", { foo: "Hallo World" }) // true
 * @example isInstanceOf("object", "Hallo World") // false --> is a string
 * @example isInstanceOf("string", ["Hallo World"]) // false --> is an array
 * @example isInstanceOf("string", { foo: "Hallo World" }) // false --> is an object
 * ----------------------------------------------------------------
 * @param type Compair type as a string (string, number, array, object, etc.)
 * @param instance Instance to compair
 * @returns
 */
export function isInstanceOf(type: string, instance: unknown): boolean {
    return typeof instance === type;
}
