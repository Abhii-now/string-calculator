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
  it("Should return 0 as output, ignore numbers > 1000", () => {
    const calculator = new SumStrings();
    expect(calculator.add("1005")).toBe(0);
  });
});

describe("Send Single Digit with spaces", () => {
  let calculator: SumStrings;
  beforeEach(() => {
    calculator = new SumStrings();
  });
  it("Should return digit as output", () => {
    expect(calculator.add("       72         ")).toBe(72);
  });
  it("Should return exception since negative number is present", () => {
    expect(() => calculator.add("       -72         ")).toThrow(
      Error("negative numbers not allowed -72")
    );
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
  it("Should return sum of the Numbers smaller than 1000", () => {
    expect(calculator.add("13,14,1050,16")).toBe(43);
  });
  it("Should return sum of the Numbers smaller than 1000", () => {
    expect(calculator.add("1003,1004,1050,1006")).toBe(0);
  });
  it("Should return exception since negative number is present", () => {
    expect(() => calculator.add("-13,14,   15,16")).toThrow(
      Error("negative numbers not allowed -13")
    );
  });
  it("Should return exception since negative number is present", () => {
    expect(() => calculator.add("-13,14,   15,-16")).toThrow(
      Error("negative numbers not allowed -13,-16")
    );
  });
  it("Should return exception since negative number is present", () => {
    expect(() => calculator.add("-13,-14,   -15,16")).toThrow(
      Error("negative numbers not allowed -13,-14,-15")
    );
  });
});

describe("Send multiple numbers seperated by comma, new line or new custom delimiter", () => {
  let calculator: SumStrings;
  beforeEach(() => {
    calculator = new SumStrings();
  });
  it("Should return sum of all numbers based on all possible delimiters", () => {
    expect(calculator.add("//;\n1;2;3;4,5,6")).toBe(21);
  });
  it("Should return sum of all numbers based on ;;; as new delimiter", () => {
    expect(calculator.add("//[;;;]\n1;;;2;;;3;;;   4\n5\n6,7,8")).toBe(36);
  });
  it("Should return sum of all numbers less than 1000 based on ; as new delimiter", () => {
    expect(calculator.add("//;\n1;2;3;4000\n5\n6,7,8")).toBe(32);
  });
  it("Should return sum of all numbers less than 1000 based on ;;; as new delimiter", () => {
    expect(calculator.add("//[;;;]\n1;;;2;;;3;;;4000\n5\n6,7,8")).toBe(32);
  });
  it("Should return sum of all numbers based on ' ' as new delimiter", () => {
    expect(calculator.add("// \n1 2 3 4 5 6,7,12")).toBe(40);
  });
  it("Should return sum of all numbers based on special regex as new delimiter", () => {
    expect(calculator.add("//[[]]\n1[]2[]3[]4[]5[]6,7,12")).toBe(40);
  });
  it("Should return sum of all numbers based on special regex as new delimiter", () => {
    expect(calculator.add("//[**]\n1**21**3")).toBe(25);
  });
  it("Should return exception since negative number is present", () => {
    expect(() => calculator.add("//[*]\n-1*-21*-3")).toThrow(
      Error("negative numbers not allowed -1,-21,-3")
    );
  });
});
