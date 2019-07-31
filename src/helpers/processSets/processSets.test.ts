import { processAllSets, processMultipleSets } from "./processSets";

const input = [1, 2, 3, 4]
const output = {
    1: [[1], [2], [3], [4]],
    2: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]],
    3: [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]],
    4: [[1, 2, 3, 4]]
}

describe("ProcessSets suite", () => {
    it("Generates combinations based on the number of elements to combine", () => {
        expect(
            processAllSets(input)
        ).toEqual(output)
    });
    it("Can process multiple sets", () => {
        expect(
            processMultipleSets([
                [1, 2, 3],
                [2, 3, 4]
            ])
        ).toEqual(
            [
                {
                    1: [[1], [2], [3]],
                    2: [[1, 2], [1, 3], [2, 3]],
                    3: [[1, 2, 3]]
                },
                {
                    1: [[2], [3], [4]],
                    2: [[2, 3], [2, 4], [3, 4]],
                    3: [[2, 3, 4]]
                }
            ]
        )
    })
})