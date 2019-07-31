import { performance } from "perf_hooks";

import {
    processSet,
    prepareSets,
    // processMultipleSets
} from "./helpers";

let simpleSets = [
    1, 2, 3, 4,
    5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20
];
let complexSets = [[1, 2]];

let normalizedSets = prepareSets(simpleSets.slice(1), complexSets);

const perfMap = {
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0
};

let flatSet = { ...perfMap };
console.log("Generation for:", simpleSets);
Object.keys(flatSet).forEach(x => {
    let n = parseInt(x);
    let start = performance.now();
    flatSet[x] = `${processSet(n, simpleSets).length} combos in ${performance.now() - start} ms`;
});
console.log(flatSet);

let complexSet = { ...perfMap };
console.log("Generation for:", normalizedSets);
Object.keys(complexSet).forEach(x => {
    let n = parseInt(x);
    let start = performance.now();

    // use the minimum logic needed, no need for loops and memory allocations to polute the results
    complexSet[x] = `${
        processSet(n, normalizedSets[0]).length + processSet(n, normalizedSets[1]).length
        } combos in ${performance.now() - start} ms`;
});
console.log(complexSet);
