import { kOutOfN } from "./binominalDistribution";

describe("Binominal distribution suite", () => {
    it("K out of N", () => {
        expect(kOutOfN(2, 3)).toBe(3);
        expect(kOutOfN(2, 10)).toBe(45);
    })
})