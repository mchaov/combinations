/**
 * combinationsCache - used to buffer the correct place where we need to push in the referential arrays. It is being reset every time the combinationUtil function is called with start = 0;
 */
var combinationsCache = 0;

/**
 * combinationUtil - for performance reasons this function operates with referential data and limits the allocation of new memory as much as possible
 * @param dataset - array of data you want to combine
 * @param buffer - reference array for buffering
 * @param start - starting point for the recursive call to increment
 * @param end - final point
 * @param index - current index to process
 * @param radius - radius to process i.e. 2 out of 5 | 3 out of 5 ... etc.
 * @param aggregate - full size pre-allocated reference to fill up with the result
 */
export function combinationUtil<T>(dataset: T[], buffer: T[], start: number, end: number,
    index: number, radius: number, aggregate: T[][]) {
    if (start === 0) {
        combinationsCache = 0;
    }
    if (index === radius) {
        return innerCombination(radius, buffer, aggregate);
    }

    combinationIteration(start, end, radius, index, buffer, dataset, aggregate);
}

/**
 * innerCombination
 * @param radius
 * @param buffer
 * @param aggregate
 */
function innerCombination<T>(radius: number, buffer: T[], aggregate: T[][]) {
    let combo: T[] = new Array(radius);
    for (let j = 0; j < radius; j++) {
        combo[j] = buffer[j];
    }
    aggregate[combinationsCache] = combo;
    combinationsCache++;
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
function combinationIteration<T>(start: number, end: number, radius: number, index: number, buffer: T[], dataset: T[], aggregate: T[][]) {
    for (let i = start; i <= end && end - i + 1 >= radius - index; i++) {
        buffer[index] = dataset[i];
        combinationUtil(dataset, buffer, i + 1, end, index + 1, radius, aggregate);
    }
}