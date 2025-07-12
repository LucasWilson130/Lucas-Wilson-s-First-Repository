// This script demonstrates array operations (creation, sorting, insertion, removal)
// and implements both sequential and binary search functions.

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
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// --- Binary Search Function Implementation ---

/**
 * Performs a binary search on a *sorted* array to find the index of a target value.
 * Binary search works by repeatedly dividing the search interval in half.
 * It is significantly more efficient than sequential search for large sorted arrays.
 *
 * @param {Array<number>} arr The sorted array to search within.
 * @param {number} target The value to search for.
 * @returns {number} The index of the target value if found, otherwise -1.
 */
function binarySearch(arr, target) {
  let low = 0; // Initialize the lower bound of the search interval
  let high = arr.length - 1; // Initialize the upper bound of the search interval

  // Continue searching as long as the lower bound is less than or equal to the upper bound
  while (low <= high) {
    // Calculate the middle index of the current search interval
    // Using Math.floor to ensure it's an integer index
    const mid = Math.floor((low + high) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
      return mid; // Target found, return its index
    }
    // If the target is greater than the middle element,
    // discard the left half and search in the right half
    else if (arr[mid] < target) {
      low = mid + 1;
    }
    // If the target is less than the middle element,
    // discard the right half and search in the left half
    else {
      // arr[mid] > target
      high = mid - 1;
    }
  }

  // If the loop finishes, it means the target was not found in the array
  return -1;
}

// --- Demonstrating the search functions ---

console.log("\n--- Demonstrating Sequential Search ---");
const seqTarget1 = 19;
const seqIndex1 = sequentialSearch(numbers, seqTarget1);
console.log(`Sequential search for ${seqTarget1}: Index = ${seqIndex1}`);

const seqTarget2 = 3;
const seqIndex2 = sequentialSearch(numbers, seqTarget2);
console.log(`Sequential search for ${seqTarget2}: Index = ${seqIndex2}`);

const seqTarget3 = 50; // Not in array
const seqIndex3 = sequentialSearch(numbers, seqTarget3);
console.log(`Sequential search for ${seqTarget3}: Index = ${seqIndex3}`);

console.log("\n--- Demonstrating Binary Search ---");
// Note: Binary search requires the array to be sorted, which 'numbers' already is.
const binTarget1 = 19;
const binIndex1 = binarySearch(numbers, binTarget1);
console.log(`Binary search for ${binTarget1}: Index = ${binIndex1}`);

const binTarget2 = 3;
const binIndex2 = binarySearch(numbers, binTarget2);
console.log(`Binary search for ${binTarget2}: Index = ${binIndex2}`);

const binTarget3 = 50; // Not in array
const binIndex3 = binarySearch(numbers, binTarget3);
console.log(`Binary search for ${binTarget3}: Index = ${binIndex3}`);

const binTarget4 = 25;
const binIndex4 = binarySearch(numbers, binTarget4);
console.log(`Binary search for ${binTarget4}: Index = ${binIndex4}`);
