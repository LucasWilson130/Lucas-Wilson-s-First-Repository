// This script demonstrates array operations (creation, sorting, insertion, removal)
// and implements a sequential search function.

/**
 * An array containing a list of numbers.
 * Initialized with the numbers from the first step.
 * @type {number[]}
 */
let numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

// --- Array Operations ---

// 1. Sort the initial array in ascending order
numbers.sort((a, b) => a - b);
console.log("Initial sorted array:", numbers);
// Expected: [3, 5, 8, 11, 14, 16, 20, 25, 31, 45]

// 2. Insert new numbers and re-sort
const newNumbersToInsert = [19, 23, 30];
console.log("Numbers to insert:", newNumbersToInsert);
numbers.push(...newNumbersToInsert);
numbers.sort((a, b) => a - b); // Re-sort after insertion
console.log("Array after insertion and re-sorting (ascending):", numbers);
// Expected: [3, 5, 8, 11, 14, 16, 19, 20, 23, 25, 30, 31, 45]

// 3. Remove specified numbers
const numbersToRemove = [8, 31];
console.log("Numbers to remove:", numbersToRemove);
// Filter out numbers that are in the numbersToRemove array
numbers = numbers.filter((number) => !numbersToRemove.includes(number));
console.log("Final array after removal (still ascending):", numbers);
// Expected: [3, 5, 11, 14, 16, 19, 20, 23, 25, 30, 45]

// --- Sequential Search Function Implementation ---

/**
 * Performs a sequential (linear) search on an array to find the index of a target value.
 * This function iterates through each element of the array one by one until the target
 * is found or the end of the array is reached.
 *
 * @param {Array<number>} arr The array to search within.
 * @param {number} target The value to search for.
 * @returns {number} The index of the target value if found, otherwise -1.
 */
function sequentialSearch(arr, target) {
  // Iterate through each element of the array
  for (let i = 0; i < arr.length; i++) {
    // If the current element matches the target, return its index
    if (arr[i] === target) {
      return i; // Target found at this index
    }
  }
  // If the loop completes without finding the target, return -1
  return -1; // Target not found in the array
}

// --- Demonstrating the sequentialSearch function ---

// Test cases for sequential search
const searchTarget1 = 19;
const index1 = sequentialSearch(numbers, searchTarget1);
console.log(`Sequential search for ${searchTarget1}: Index = ${index1}`); // Expected: Index = 5 (since 19 is at index 5 in the final array)

const searchTarget2 = 3;
const index2 = sequentialSearch(numbers, searchTarget2);
console.log(`Sequential search for ${searchTarget2}: Index = ${index2}`); // Expected: Index = 0

const searchTarget3 = 50; // A number not in the array
const index3 = sequentialSearch(numbers, searchTarget3);
console.log(`Sequential search for ${searchTarget3}: Index = ${index3}`); // Expected: Index = -1

const searchTarget4 = 25;
const index4 = sequentialSearch(numbers, searchTarget4);
console.log(`Sequential search for ${searchTarget4}: Index = ${index4}`); // Expected: Index = 8
