class SumStrings {
  add(str: String) {
    if (!isNaN(Number(str))) return Number(str);
    const digits = str.split(",").map(Number);
	return digits.reduce((acc, num) => acc + num, 0);
  }
}
export default SumStrings;
