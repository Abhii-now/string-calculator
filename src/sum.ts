class SumStrings {
  add(str: String) {
    if (!isNaN(Number(str))) return Number(str);
    const digits = str.split(",").map(Number);
    return digits[0] + digits[1];
  }
}
export default SumStrings;
