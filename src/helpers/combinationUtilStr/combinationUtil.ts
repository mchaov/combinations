/**
 * combinationUtil - test implementation for aggregating in a string, has much worse complexity than the arrays one, left here for reference only
 * @param dataset - array of data you want to combine
 * @param buffer - reference array for buffering
 * @param start - starting point for the recursive call to increment
 * @param end - final point
 * @param index - current index to process
 * @param radius - radius to process i.e. 2 out of 5 | 3 out of 5 ... etc.
 * @param aggregate - empty string
 */
export function combinationUtil<T>(dataset: T[], buffer: T[], start: number, end: number,
    index: number, radius: number, aggregate: string) {
    if (index === radius) {
        return innerCombination(radius, buffer, aggregate);
    }

    return combinationIteration(start, end, radius, index, buffer, dataset, aggregate);
}

/**
 * innerCombination
 * @param radius
 * @param buffer
 * @param aggregate
 */
function innerCombination<T>(radius: number, buffer: T[], aggregate: string) {
    for (let j = 0; j < radius; j++) {
        aggregate = aggregate + buffer[j] + ",";
    }
    aggregate = aggregate.slice(0, aggregate.length - 1) + "|";
    return aggregate;
}

/**
 * combinationIteration
 * @param start
 * @param end
 * @param radius
 * @param index
 * @param buffer
 * @param dataset
 * @param aggregate
 */
function combinationIteration<T>(start: number, end: number, radius: number, index: number, buffer: T[], dataset: T[], aggregate: string) {
    for (let i = start; i <= end && end - i + 1 >= radius - index; i++) {
        buffer[index] = dataset[i];
        aggregate = combinationUtil(dataset, buffer, i + 1, end, index + 1, radius, aggregate);
    }
    return aggregate;
}