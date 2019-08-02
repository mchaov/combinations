import { performance } from "perf_hooks";

import {
    processSet,
    prepareSets
} from "../";


let simpleSets = [
    1, 2, 3, 4,
    5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20
];
let complexSets = [[1, 1]];

let normalizedSets = prepareSets(simpleSets.slice(1), complexSets);
normalizedSets;

const perfMap = {
    1: [0, 0],
    2: [0, 0],
    3: [0, 0],
    4: [0, 0],
    5: [0, 0],
    6: [0, 0],
    7: [0, 0],
    8: [0, 0],
    9: [0, 0],
    10: [0, 0],
    11: [0, 0],
    12: [0, 0],
    13: [0, 0],
    14: [0, 0],
    15: [0, 0],
    16: [0, 0],
    17: [0, 0],
    18: [0, 0],
    19: [0, 0],
    20: [0, 0],
};

let flatSet = { ...perfMap };
console.log("Generation for:", simpleSets);
Object.keys(flatSet).forEach(x => {
    let n = parseInt(x);
    let start = performance.now();
    flatSet[x][0] = processSet(n, simpleSets).length;
    flatSet[x][1] = performance.now() - start;
});
let simpleSetTotal = Object.keys(flatSet).reduce((a, b) => {
    return [
        a[0] + flatSet[b][0],
        a[1] + flatSet[b][1]
    ]
}, [0, 0]);
console.log(flatSet);
console.log("Total:", simpleSetTotal);


let complexSet = { ...perfMap };
console.log(`\n\nGeneration for: [${simpleSets.slice(1)}] + [${complexSets}]\n`, normalizedSets);
Object.keys(complexSet).forEach(x => {
    let n = parseInt(x);
    let start = performance.now();

    // use the minimum logic needed, no need for loops and memory allocations to polute the results
    complexSet[x][0] = processSet(n, normalizedSets[0]).length + processSet(n, normalizedSets[1]).length;
    complexSet[x][1] = performance.now() - start;
});
let complexSetTotal = Object.keys(complexSet).reduce((a, b) => {
    return [
        a[0] + complexSet[b][0],
        a[1] + complexSet[b][1]
    ]
}, [0, 0]);
console.log(complexSet);
console.log("Total:", complexSetTotal);
