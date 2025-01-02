# SumStrings

SumStrings is a simple JavaScript/TypeScript-based utility that calculates the sum of numbers from a string, supporting both default and custom delimiters. It parses the input string, identifies numbers, sums them up, and handles various cases like custom delimiters, ignoring numbers above 1000, and throwing an error if negative numbers are encountered.

## Key Features

- **Supports default delimiters**: `,` and `\n`.
- **Allows multiple numbers**.
- **Allows multiple custom delimiters** in the format `//[delimiter]`, e.g., `//[***][%%]`.
- **Ignores numbers greater than 1000**.
- **Throws an error for negative numbers**.

## Tech Used

- **TypeScript**: Statically typed superset of JavaScript.
- **Node.js**: JavaScript runtime environment.
- **Regular Expressions (Regex)**: Used to parse custom delimiters.
- **Jest**: Used for testing the implementation.

## How to Set Up Locally

### Prerequisites

- **Node.js**: Ensure that Node.js is installed. You can download it from [Node.js](https://nodejs.org/).
- **npm**: npm comes with Node.js, but if needed, you can install it separately.

### Setup Instructions

1. **Clone the repository**:

   ```sh
   git clone https://github.com/Abhii-now/string-calculator.git
   ```

2. **Navigate to the project folder**:

   ```sh
   cd string-calculator
   ```

3. **Install the dependencies**: Ensure you're in the project directory, then run:

   ```sh
   npm install
   ```

4. **Run the Code**: After compilation, you can run the code using:
   ```sh
   npx ts-node src/sum.ts
   ```

## Testing

This project uses Jest for unit testing. To run the tests:

1. **Install Jest** (if not already installed):

   ```sh
   npm install --save-dev jest @types/jest ts-jest
   ```

2. **Configure Jest**: Add a `jest.config.js` file for TypeScript support:

   ```js
   module.exports = {
     testEnvironment: "node",
     transform: {
       "^.+.tsx?$": ["ts-jest", {}],
     },
   };
   ```

3. **Run the tests**: To run the tests, use:
   ```sh
   npm test
   ```

## Example Usage

Here’s an example of how to use the `SumStrings` class:

### Input 1

```typescript
const sumStrings = new SumStrings();
console.log(sumStrings.add("//[***][%%]\n1***2%%3"));
```

**Output**:

```
6
```

### Input 2

```typescript
const sumStrings = new SumStrings();
console.log(sumStrings.add("//;\n1;2,3"));
```

**Output**:

```
6
```

## Error Handling

- **Negative Numbers**: If the input contains negative numbers, an error will be thrown:
  ```
  Error: negative numbers not allowed -1,-2
  ```
- **Invalid Input**: Ensure the input string is properly formatted. For custom multi-length delimiters, the format should be `//[delimiter]\n`, followed by the numbers.
- **Invalid Input**: Avoid using special regex characters for multiple inputs as they might cause issues.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
