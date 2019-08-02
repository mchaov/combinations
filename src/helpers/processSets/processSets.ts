import { kOutOfN } from "../binominalDistribution";
import { combinationUtil } from "../combinationUtil";

export type ProcessedSet<T> = {
    [key: string]: T[][]
}

/**
 * processAllSets - produces an object with all the possible combinations of 1 or more elements
 *
 * Example: [a, b, c, ...] => {
 *  2: [
 *      [a, b]
 *      [a, c]
 *      [a, ...]
 *      [b, c]
 *      [b, ...]
 *      [c, ...]
 *  ],
 *  3: [
 *      [a, b, c],
 *      [a, b, ...],
 *      [a, c, ...],
 *      [b, c, ...],
 *  ]
 *
 *  ...
 *  ...
 *
 * }
 *
 * @param arr - numbers to proccess
 */
export function processAllSets<T>(arr: T[]): ProcessedSet<T> {
    let data = {};
    for (let i = 1; i <= arr.length; i++) {
        data[i] = processSet(i, arr);
    }
    return data;
}

/**
 * processSet - results combination calculations of the following format:
 *
 * Example: processSet(2, [a, b, c, ...]) => [
 *      [a, b]
 *      [a, c]
 *      [a, ...]
 *      [b, c]
 *      [b, ...]
 *      [c, ...]
 *  ]
 * }
 *
 * @param comboSize - how many items to combine out of the set
 * @param options - possible options to combine from
 */
export function processSet<T>(comboSize: number, options: T[]): T[][] {
    return combinationUtil<T>(
        options,
        new Array(comboSize),
        0,
        options.length - 1,
        0,
        comboSize,
        new Array(kOutOfN(comboSize, options.length))
    );
}

/**
 * processMultipleSets
 *
 * Example: [[a, b, c, ...], [a, b, c, ...]] => [ {
 *  2: [
 *      [a, b]
 *      [a, c]
 *      [a, ...]
 *      [b, c]
 *      [b, ...]
 *      [c, ...]
 *  ],
 *  3: [
 *      [a, b, c],
 *      [a, b, ...],
 *      [a, c, ...],
 *      [b, c, ...],
 *  ]
 *
 *  ...
 *  ...
 *
 * }, {...}, {...} ]
 *
 * @param arrs - multiple sets of items to process
 */
export function processMultipleSets<T>(arrs: T[][]): ProcessedSet<T>[] {
    return arrs.map(x => processAllSets<T>(x))
}