class SumStrings {
  add(str: String) {
    let delimiter;
    if (str.startsWith("//")) {
      delimiter = str.substring(2, str.indexOf("\n"));
      str = str.substring(str.indexOf("\n"));
      str = str.split(delimiter).join(",");
    }
    const digits = str.split(/[\s,]+/).map(Number);
    return digits.reduce((acc, num) => acc + num, 0);
  }
}
export default SumStrings;
