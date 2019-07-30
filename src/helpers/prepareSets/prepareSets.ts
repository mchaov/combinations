import { cartesianProduct } from "../cartesianProduct";

/**
 * prepareSets
 * @param simpleSets - flat array of odds to combine
 * @param complexSets - array of arrays of odds that are not combinable to create flat arrays of combinable ones
 */
export function prepareSets<T>(simpleSets: T[], complexSets?: T[][]) {
    if (!complexSets) {
        return [simpleSets];
    }

    return cartesianProduct(complexSets).reduce((a: T[][], b: T[]) => {
        a.push(b.concat(simpleSets));
        return a;
    }, []);
}