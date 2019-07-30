import { performance } from "perf_hooks";

import {
    prepareSets,
    processMultipleSets
} from "./helpers";

let simpleSets = [
    1, 2, 3, 4,
    5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20
];

let complexSets = [[1, 2], [3, 4]];

let start = performance.now();
let normalizedSets = prepareSets(
    simpleSets//, complexSets
);

let timeNormalizedSets = performance.now() - start;

let timeAllSetsStart = performance.now();
let processedSets = processMultipleSets(normalizedSets);
let timeAllSets = performance.now() - timeAllSetsStart;

processedSets;

let timeTotal = performance.now() - start;

let out = `
## Times:
- complex set size: ${complexSets.length} lists of X choices => ${JSON.stringify(complexSets)}
- simple set size: ${simpleSets.length} choices => ${JSON.stringify(simpleSets)}

- normalize sets: ${timeNormalizedSets} ms.
- process sets: ${timeAllSets} ms.
- total: ${timeTotal} ms.
`
console["log"](out);