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
    let delimiters: String[] = [",", "\n"]; // Default delimiters
    if (str.startsWith("//")) {
      const delimiterLineEnd = str.indexOf("\n");
      const delimiterPart = str.substring(2, delimiterLineEnd);

      const customDelimiters = delimiterPart.match(/\[.*?\]/g);
      if (customDelimiters) {
        let newDelimiters = customDelimiters
          .map(
            (delim) => this.escapeDelimiter(delim.slice(1, -1)) // Remove square brackets
          )
          .concat(delimiters);
        delimiters = newDelimiters;
      } else {
        // Single custom delimiter
        delimiters.push(delimiterPart);
      }

      numbersStr = str.substring(delimiterLineEnd + 1); // Get the numbers part
    }
    const delimiterRegex = new RegExp(delimiters.join("|")); // Combine all delimiters into one regex
    return { newDelimiter: delimiterRegex, numbersStr };
  }

  processString(str: String, delimiter: RegExp) {
    return str.split(delimiter).map(Number).filter(this.filterBigNumbers);
  }
  private filterBigNumbers(num: number): boolean {
    return num <= 1000;
  }
}
export default SumStrings;
