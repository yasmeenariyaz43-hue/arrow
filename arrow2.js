// Problem Title: LO-Convert to Arrow Function with Default Parameters
// Problem Statement: Rewrite the function 'multiply(a, b)' using arrow function syntax with default parameters for both a and b (default to 1 if no values passed).

// The required arrow function implementation:
const multiply = (a = 1, b = 1) => a * b;

// --- Example Usage from the Problem Statement ---

// Example Input 1: multiply(3, 4)
const input1Result = multiply(3, 4);
console.log(`Input: multiply(3, 4)`);
console.log(`Expected Output: 12`);
console.log(`Actual Output: ${input1Result}`);
// console.log(`Expected Output: 12`); // This matches the "Example Output: 12" shown in the image

console.log("-----------------------");

// Example Input 2 (with defaults): multiply()
const input2Result = multiply();
console.log(`Input (with defaults): multiply()`);
console.log(`Expected Output: 1`); // This matches the "Example Output (with defaults): 1" shown in the image
console.log(`Actual Output: ${input2Result}`);

