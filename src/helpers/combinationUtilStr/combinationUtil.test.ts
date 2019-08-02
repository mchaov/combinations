import { combinationUtil } from "./combinationUtil";

const testCases = [{
    input: [2, [1, 2, 3]],
    output: "1,2|1,3|2,3|"
}, {
    input: [2, [1, 2, 3, 4]],
    output: "1,2|1,3|1,4|2,3|2,4|3,4|"
}, {
    input: [3, [1, 2, 3, 4]],
    output: "1,2,3|1,2,4|1,3,4|2,3,4|"
}]

describe("Combination utility suite", () => {
    testCases.forEach(
        x => it(`Combines ${x.input[0]} out of ${x.input[1]} => ${x.output}`, () => {
            let aggregate = combinationUtil(
                x.input[1] as any,
                new Array(x.input[0] as any),
                0,
                (x.input[1] as any).length - 1,
                0,
                x.input[0] as any,
                ""
            );
            expect(aggregate).toEqual(x.output)
        })
    )

})