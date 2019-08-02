import { performance } from "perf_hooks";

import {
    processSet,
    prepareSets,
} from "../";
processSet;
prepareSets;

let input: any = parseInt(process.argv[process.argv.length - 1]);

if (isNaN(parseInt(input))) {
    input = 20;
}

const TOTAL_ITEMS = input;

let simpleSets = new Array(TOTAL_ITEMS);
let complexSets = [[1, 1]];
let perfMap: { [key: string]: any[] } = {};

for (let i = 0; i < TOTAL_ITEMS; i++) {
    simpleSets[i] = i + 1;
    perfMap[i + 1] = [0, 0];
}

let normalizedSets = prepareSets(simpleSets.slice(1), complexSets);
normalizedSets;

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

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// // test the string version
// import { combinationUtil } from "../helpers/combinationUtilStr";
// let stringTimesTest = { ...perfMap }
// console.log("Generation for:", simpleSets);
// Object.keys(stringTimesTest).forEach(x => {
//     let n = parseInt(x);
//     let start = performance.now();
//     stringTimesTest[x][0] = combinationUtil(
//         simpleSets,
//         new Array(n),
//         0,
//         simpleSets.length - 1,
//         0,
//         n,
//         ""
//     ).length;
//     stringTimesTest[x][1] = performance.now() - start;
// });
// let stringTimesTestTotal = Object.keys(stringTimesTest).reduce((a, b) => {
//     return [
//         a[0] + stringTimesTest[b][0],
//         a[1] + stringTimesTest[b][1]
//     ]
// }, [0, 0]);
// console.log(stringTimesTest);
// console.log("Total:", stringTimesTestTotal);

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// // test with the cartesian product
// let complexSet = { ...perfMap };
// console.log(`\n\nGeneration for: [${simpleSets.slice(1)}] + [${complexSets}]\n`, normalizedSets);
// Object.keys(complexSet).forEach(x => {
//     let n = parseInt(x);
//     let start = performance.now();

//     // use the minimum logic needed, no need for loops and memory allocations to polute the results
//     complexSet[x][0] = processSet(n, normalizedSets[0]).length + processSet(n, normalizedSets[1]).length;
//     complexSet[x][1] = performance.now() - start;
// });
// let complexSetTotal = Object.keys(complexSet).reduce((a, b) => {
//     return [
//         a[0] + complexSet[b][0],
//         a[1] + complexSet[b][1]
//     ]
// }, [0, 0]);
// console.log(complexSet);
// console.log("Total:", complexSetTotal);
