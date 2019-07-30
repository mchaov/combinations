# Combinations

A repository that explores the nature of combinations and JavaScript through the TypeScript lens :)


## Install/Run

1. Clone/Fork this repository
2. ```npm install```
3. ```npm run build```
4. ```npm run start```

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

**processSets** - produces an object with the possible combinations.

Example:

```typescript
[a, b, c, ...] => {
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