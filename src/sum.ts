class SumStrings {
  add(str: String) {
    const { newDelimiter, numbersStr } = this.extractDelimiterAndNumbers(str); //sent to check if contains custom delimiter
    const numbers = this.processString(numbersStr, newDelimiter);
    return numbers.reduce((acc, num) => acc + num, 0);
  }

  private escapeDelimiter(delimiter: string): string {
    // Escape special regex characters
    return delimiter.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  }

  private extractDelimiterAndNumbers(str: String) {
    let numbersStr = str;
    let delimiter = ",|\n";
    if (str.startsWith("//")) {
      const delimiterLineEnd = str.indexOf("\n");
      const customDelimiter = str.substring(2, delimiterLineEnd);
      // Escape special characters for regex and avoid invalid empty delimiter
      const escapeDelimiter = this.escapeDelimiter(customDelimiter);
      delimiter = delimiter + "|" + escapeDelimiter;
      numbersStr = str.substring(delimiterLineEnd + 1); // Get the rest of the numbers part
    }
    return { newDelimiter: new RegExp(delimiter), numbersStr };
  }
  processString(str: String, delimiter: RegExp) {
    return str.split(delimiter).map(Number);
  }
}
export default SumStrings;
