class SumStrings {
  add(str: String) {
    const { newDelimiter, numbersStr } = this.extractDelimiterAndNumbers(str); //sent to check if contains custom delimiter
    const numbers = this.processString(numbersStr, newDelimiter);
    this.checkForNegative(numbers);
    return numbers.reduce((acc, num) => acc + num, 0);
  }

  private checkForNegative(numbers: number[]) {
    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        `negative numbers not allowed ${negativeNumbers.join(",")}`
      );
    }
  }

  private escapeDelimiter(delimiter: String): String {
    // Escape special regex characters
    return delimiter.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  }

  private extractDelimiterAndNumbers(str: String) {
    let numbersStr = str;
    let delimiter = ",|\n";
    if (str.startsWith("//")) {
      const delimiterLineEnd = str.indexOf("\n");
      const customDelimiter = str
        .substring(2, delimiterLineEnd)
        .replace(/^\[|\]$/g, ""); // Remove surrounding square brackets

      // Escape special characters for regex and avoid invalid empty delimiter
      const escapeDelimiter = this.escapeDelimiter(customDelimiter);
      delimiter = delimiter + "|" + escapeDelimiter;
      numbersStr = str.substring(delimiterLineEnd + 1); // Get the rest of the numbers part
    }
    return { newDelimiter: new RegExp(delimiter), numbersStr };
  }

  processString(str: String, delimiter: RegExp) {
    return str.split(delimiter).map(Number).filter(this.filterBigNumbers);
  }
  private filterBigNumbers(num: number): boolean {
    return num <= 1000 && !isNaN(num);
  }
}
export default SumStrings;
