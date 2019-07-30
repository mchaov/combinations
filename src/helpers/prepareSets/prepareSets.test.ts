import { prepareSets } from "./prepareSets";

const flatInput = [1, 2];
const flatOutput = [[1, 2]];

const complexInput = [[1, 2], [3, 4]];
const complexOutput = [[1, 3], [1, 4], [2, 3], [2, 4]];

describe("PrepareSets suite", () => {
    it("[] => [[]]", () => {
        expect(prepareSets([])).toEqual([[]])
    });
    it("[[x],[y]] => [[x,y]]", () => {
        expect(prepareSets(flatInput)).toEqual(flatOutput)
    });
    it("[], [[x,y]] => [[x], [y]]", () => {
        expect(prepareSets([], [[1, 2]])).toEqual([[1], [2]])
    });
    it("[], [[x,y],[n,z]] => [[x,n], [x,z], [y,n], [y,z]]", () => {
        expect(prepareSets([], complexInput)).toEqual(complexOutput)
    });
})