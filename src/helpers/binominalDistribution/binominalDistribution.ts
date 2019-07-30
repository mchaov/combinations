import { factorial } from "../factorial";

/**
 * kOutOfN - all combinations k out of n items, no repeats, order is not important
 *
 * Read more here: https://en.wikipedia.org/wiki/Binomial_distribution#Probability_mass_function
 *
 * @param k - number, K < N
 * @param n - number, N > K
 */
export function kOutOfN(k: number, n: number) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}