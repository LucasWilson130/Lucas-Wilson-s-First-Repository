// This script creates an array, sorts it, inserts new numbers, removes specified numbers,
// and ensures the array remains in ascending order.

/**
 * An array containing a list of numbers.
 * Initialized with the numbers from the previous step and sorted.
 * @type {number[]}
 */
let numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

// Sort the initial array in ascending order
numbers.sort((a, b) => a - b);
console.log("Initial sorted array:", numbers); // Expected: [3, 5, 8, 11, 14, 16, 20, 25, 31, 45]

/**
 * New numbers to be inserted into the array.
 * @type {number[]}
 */
const newNumbersToInsert = [19, 23, 30];

console.log("Numbers to insert:", newNumbersToInsert);

// Insert the new numbers into the existing array.
numbers.push(...newNumbersToInsert);

// Re-sort the entire array to maintain ascending order after insertion.
numbers.sort((a, b) => a - b);
console.log("Array after insertion and re-sorting (ascending):", numbers);
// Expected after insertion: [3, 5, 8, 11, 14, 16, 19, 20, 23, 25, 30, 31, 45]

/**
 * Numbers to be removed from the array.
 * @type {number[]}
 */
const numbersToRemove = [8, 31];

console.log("Numbers to remove:", numbersToRemove);

// Remove the specified numbers using the filter method.
// The filter method creates a new array containing only elements for which
// the provided callback function returns true.
// Here, we keep numbers that are NOT in the numbersToRemove array.
numbers = numbers.filter(number => !numbersToRemove.includes(number));

console.log("Final array after removal (still ascending):", numbers);
// Expected after removal: [3, 5, 11, 14, 16, 19, 20, 23, 25, 30, 45]
