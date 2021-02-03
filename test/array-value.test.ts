import {ArrayValue} from "../src/array-value";

describe("ArrayValue", () => {
    it("should be defined", () => {
      expect(ArrayValue).toBeDefined();
    });

    it("should match valid object", () => {
      const expected = {title: "TypeA", value: 1};
      
      const result = new ArrayValue("TypeA", 1);

      expect(result).toEqual(expected);
  });
});