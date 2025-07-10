// This script creates an array, sorts it, and then inserts new numbers while maintaining ascending order.

/**
 * An array containing a list of numbers.
 * Initialized with the numbers from the previous step and sorted.
 * @type {number[]}
 */
const numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

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
// Using spread operator (...) to add all elements from newNumbersToInsert
// to the 'numbers' array.
numbers.push(...newNumbersToInsert);

console.log("Array after insertion (unsorted):", numbers);

// Re-sort the entire array to maintain ascending order after insertion.
// The sort() method with a compare function (a - b) is used for numerical sorting.
numbers.sort((a, b) => a - b);

console.log("Final array after insertion and re-sorting (ascending):", numbers);
