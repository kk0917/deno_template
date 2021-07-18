import { assert } from "https://deno.land/std@0.101.0/testing/asserts.ts";

/** Details
 * "https://deno.land/manual/testing/assertions"
 * 
 * "ex. deno test file_name.ts"
 */
Deno.test("Hello Test", () => {
  assert("Hello");
});