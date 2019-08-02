# Combinations

A repository that explores the nature of combinations and JavaScript through the TypeScript lens :)


## Install/Run

1. Clone/Fork this repository
2. ```npm install```
3. ```npm run build```
4. ```npm run start```

Optionally after build you can use ```npm run start -- ##``` to denote the number of combinations you want to test.

Use the table below to understand the impact from your numbers:

| choose from X |                   Total possible combos | Time mm:ss:ms |
| :------------ | --------------------------------------: | ------------: |
| 5             |                                      31 |    00:00.0001 |
| 10            |                                   1 023 |      00:00.02 |
| 15            |                                  32 767 |      00:00.45 |
| 20            |                               1 048 575 |      00:00.16 |
| 25            |                              33 554 431 |      00:15.47 |
| 26            |                              67 108 863 |      00:47.60 |
| 27            |                             134 217 727 |      02:45.50 |
| 28            | FAILS: array lenght in JS is up to 2^32 |        NaN :) |

Combinations include: single item, x choose y, all items. Times are provided for reference only, they are dependend on your PC configuration, duh...

## What's inside

### Math stuff

#### Binominal coefficient

Function used to calculate sizes for arrays for pre-allocation purposes. [Read more here](https://en.wikipedia.org/wiki/Binomial_distribution#Probability_mass_function)

#### Factorial

Factorization is needed for the binominal coefficient calculation. Implementation is imperative because of performance reasons. Distributed with pre-filled cache for factorials calculations up to 20. Using memoization to store any calculations not already in cache.

#### Cartesian product

Part of set theory, read more here: [Wikipedia](https://en.wikipedia.org/wiki/Cartesian_product).

Various implementations in different languages could be found [**here**](https://rosettacode.org/wiki/Cartesian_product_of_two_or_more_lists) -> note that the JS has bugs and I've used a modified version of it.

In short: ```[[1,2],[3,4]] => [[1,3],[1,4],[2,3],[2,4]]```

### Non-math stuff

#### Combination util

Recursively go over data sets and extract possible combinations out of them. Implemented with multiple recursion. Works with referenced data in order to improve times for allocations when dealing with larger data sets.

#### Prepare sets

Function that flattens sets best explained by the test cases:

- ```[] => [[]]```
- ```[[x],[y]] => [[x,y]]```
- ```[], [[x,y]] => [[x], [y]]```
- ```[], [[x,y],[n,z]] => [[x,n], [x,z], [y,n], [y,z]]```

#### Process sets

A suite of 3 functions that allow the caller to transform one set for one type of combination, or multiple sets for multiple types of combos.

**processSet** - results combination calculations of the following format:

Example: 

```typescript
processSet(2, [a, b, c, ...]) => [
     [a, b]
     [a, c]
     [a, ...]
     [b, c]
     [b, ...]
     [c, ...]
 ]
}
```

**processAllSets** - produces an object with all the possible combinations of 1 or more elements.

Example:

```typescript
[a, b, c, ...] => {
 1: [...]
 2: [
     [a, b]
     [a, c]
     [a, ...]
     [b, c]
     [b, ...]
     [c, ...]
 ],
 3: [
     [a, b, c],
     [a, b, ...],
     [a, c, ...],
     [b, c, ...],
 ]
 ...
 ...
}
```

**processMultipleSets** - processes sets of sets of sets ... of sets ... of sets ....

Example:

```typescript
[[a, b, c, ...], [a, b, c, ...]] => [ {
 1: [...]
 2: [
     [a, b]
     [a, c]
     [a, ...]
     [b, c]
     [b, ...]
     [c, ...]
 ],
 3: [
     [a, b, c],
     [a, b, ...],
     [a, c, ...],
     [b, c, ...],
 ]
 ...
 ...
}, {...}, {...} ]
```