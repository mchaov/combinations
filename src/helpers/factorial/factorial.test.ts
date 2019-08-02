import { factorial, factorial2 } from "./factorial";
factorial;
// since we are distributing the function with the most expected results pre-computed, we need to use a bigger number for the test.
const root = 21;
const total = 21 * 20 * 19 * 18 * 17 * 16 * 15 * 14 * 13 * 12 * 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1;

describe("Factorial suite", () => {
    it("factorial calculates factorials", () => {
        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
        expect(factorial(root)).toBe(total);
    });
})