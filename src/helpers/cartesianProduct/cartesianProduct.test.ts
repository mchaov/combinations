import { cartesianProduct } from "./cartesianProduct";

describe("Cartesian product suite", () => {
    it("[[1,2],[3,4]] => [[1,3],[1,4],[2,3],[2,4]]", () => {
        expect(
            cartesianProduct([[1, 2], [3, 4]])
        ).toEqual([[1, 3], [1, 4], [2, 3], [2, 4]])
    })
});