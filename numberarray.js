// This script creates an array with the specified numbers and then sorts it in ascending order.

/**
 * An array containing a list of numbers.
 * @type {number[]}
 */
const numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

console.log("Original array:", numbers);

/**
 * Sorts the array of numbers in ascending order (smallest to largest).
 * The sort() method with a compare function (a - b) is used for numerical sorting.
 * If a - b is negative, 'a' comes before 'b'.
 * If a - b is positive, 'b' comes before 'a'.
 * If a - b is zero, their order remains unchanged.
 */
numbers.sort((a, b) => a - b);

console.log("Sorted array (ascending):", numbers);

// You can still access individual elements or iterate through the array as before.
// console.log("The first number in the sorted array is:", numbers[0]);
