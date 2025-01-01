import SumStrings from "../src/sum";

describe("Send Empty String", () => {
  it("'' Should return 0 as output", () => {
    const calculator = new SumStrings();
    expect(calculator.add("")).toBe(0);
  });
});

describe("Send Empty String With Multiple Spaces", () => {
  it("'' Should return 0 as output", () => {
    const calculator = new SumStrings();
    expect(calculator.add("     ")).toBe(0);
  });
});

describe("Send Single Digit", () => {
  it("Should return digit as output", () => {
    const calculator = new SumStrings();
    expect(calculator.add("5")).toBe(5);
  });
});


describe("Send Single Digit with spaces", () => {
  it("Should return digit as output", () => {
    const calculator = new SumStrings();
    expect(calculator.add("       72         ")).toBe(72);
  });
});
