class SumStrings {
  add(str: String) {
    const digits = str.split(",").join("\n").split("\n").map(Number);
    return digits.reduce((acc, num) => acc + num, 0);
  }
}
export default SumStrings;
