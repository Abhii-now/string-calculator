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

describe("Send Multiple comma or newLine seperated Numbers", () => {
  let calculator: SumStrings;

  beforeEach(() => {
    calculator = new SumStrings();
  });

  it("Should return sum of 2 Numbers sent", () => {
    expect(calculator.add("13,14")).toBe(27);
  });
  it("Should return sum of all the Numbers sent", () => {
    expect(calculator.add("13,14,15,16")).toBe(58);
  });
  it("Should return sum of all the Numbers containing spaces sent", () => {
    expect(() => calculator.add("-13,14,   15,16")).toThrow(
      Error("negative numbers not allowed -13")
    );
  });
  it("Should return sum of all the Numbers containing spaces sent", () => {
    expect(calculator.add("-13\n14\n15\n16")).toBe(32);
  });
  it("Should return sum of all the Numbers containing spaces sent", () => {
    expect(calculator.add("-13,14\n   15,16")).toBe(32);
  });
});

describe("Send multiple numbers seperated by comma, new line or new custom delimiter", () => {
  const calculator = new SumStrings();
  it("Should return sum of all numbers based on all possible delimiters", () => {
    expect(calculator.add("//;\n1;2;3;4,5,6")).toBe(21);
  });
  it("Should return sum of all numbers based on ;;; as new delimiter", () => {
    expect(calculator.add("//;;;\n1;;;2;;;3;;;4\n5\n6,7,8")).toBe(36);
  });
  it("Should return sum of all numbers based on ' ' as new delimiter", () => {
    expect(calculator.add("// \n1 2 3 4 5 6,7,12")).toBe(40);
  });
  it("Should return sum of all numbers based on special regex as new delimiter", () => {
    expect(calculator.add("//[]\n1[]2[]3[]4[]5[]6,7,12")).toBe(40);
  });
  it("Should return sum of all numbers based on special regex as new delimiter", () => {
    expect(calculator.add("//***\n1***21***3")).toBe(25);
  });
});
