// Create the array
let numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

// Add the new numbers (from previous instruction)
numbers.push(19, 23, 30);

// Remove the numbers 8 and 31
numbers = numbers.filter(number => number !== 8 && number !== 31);

// Sort the array in ascending order
numbers.sort((a, b) => a - b);

// Print the sorted array to the console
console.log(numbers);
