/**
 * cartesianProduct
 *
 * Part of set theory, read more here: https://en.wikipedia.org/wiki/Cartesian_product
 * 
 * various implementations: https://rosettacode.org/wiki/Cartesian_product_of_two_or_more_lists
 * -> note that the JS one has been changed, because the example there doesn't work
 *
 * @param lists - lists of [[a,b], [c,d]], that will produce lists of [[a,c],[a,d],[b,c],[b,d]]
 */
export function cartesianProduct<T>(lists: T[][]): T[][] {
    return foldr((as, xs) =>
        bind(xs, x => bind(as, a => [[x].concat(a)])), [[]], lists);
}

const bind = (xs, f) => [].concat.apply([], xs.map(f));
const foldr = (f, a, xs) => xs.reduceRight(f, a);