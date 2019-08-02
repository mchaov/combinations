const factorialCache = {
    0: 1,
    1: 1,
    2: 2,
    3: 6,
    4: 24,
    5: 120,
    6: 720,
    7: 5040,
    8: 40320,
    9: 362880,
    10: 3628800,
    11: 39916800,
    12: 479001600,
    13: 6227020800,
    14: 87178291200,
    15: 1307674368000,
    16: 20922789888000,
    17: 355687428096000,
    18: 6402373705728000,
    19: 121645100408832000,
    20: 2432902008176640000
};

/**
 * factorial
 * @param n - number to factorize
 */
export function factorial(n: number) {
    if (!factorialCache[n]) {
        let f = n;
        let i = n - 1;
        while (!factorialCache[i] && i > 0) {
            f = f * i;
            i = i - 1;
        }
        factorialCache[n] = f * factorialCache[i];
    }
    return factorialCache[n];
}