class SumStrings {
  add(str: String) {
    const { newDelimiter, numbersStr } = this.handleCustomDelimiters(str); //sent to check if contains custom delimiter
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
    // Match custom delimiters in square brackets
    const customDelimiters = str.match(/\[.*?\]/g);
    return customDelimiters //return array of all new delimiters found
      ? customDelimiters.map(
          (delim: String) => this.escapeDelimiter(delim.slice(1, -1)) // Remove square brackets
        )
      : this.escapeDelimiter(str);
  }

  private handleCustomDelimiters(str: String) {
    let delimiters: String[] = [",", "\n"]; // Default delimiters
    if (str.startsWith("//"))
      delimiters = [
        ...delimiters,
        ...this.extractDelimiterAndNumbers(str.substring(2, str.indexOf("\n"))),
      ]; //Merging the default and new Delimiters
    const delimiterRegex = new RegExp(delimiters.join("|")); // Combine all delimiters into one regex
    return { newDelimiter: delimiterRegex, numbersStr: str };
  }

  processString(str: String, delimiter: RegExp) {
    return str.split(delimiter).map(Number).filter(this.filterBigNumbers);
  }

  private filterBigNumbers(num: number): boolean {
    return num <= 1000;
  }
}
export default SumStrings;
