Array Operations & Search Algorithms
This repository contains 2 files that go by the names of "support.html" and "numberarray.js". When they are combined together, they demonstrate basic array manipulations and implement two common search algorithms: Sequential Search and Binary Search.

Files
support.html
This is the main HTML file that provides a user interface for demonstrating array operations and search algorithms.

Key Features:

Initial Array Setup: Defines an initial array of numbers.

Array Modification:

Adds new numbers (19, 23, 30) to the array.

Removes specific numbers (8, 31) from the array.

Array Sorting: Sorts the modified array in ascending order.

Dynamic List Display: Populates an unordered list (<ul>) in the HTML with the current state of the array.

Sequential Search Interface:

An input field to enter a number to search for.

A button to initiate the sequential search.

A paragraph element to display the search result (found, not found, or error).

Binary Search Interface:

An input field to enter a number to search for.

A button to initiate the binary search.

A paragraph element to display the search result.

Note: Binary search requires the array to be sorted to function correctly. The HTML file ensures the array is sorted before binary search is performed.

Styling: Includes basic CSS to style the page elements, inputs, buttons, and search results (e.g., green for found, yellow for not found, red for errors).

numberarray.js
This JavaScript file contains the implementation of the sequentialSearch function. In the provided context, the support.html file includes this logic directly within its <script> tags, making numberarray.js a conceptual separation rather than a distinct external file in this specific setup.

Key Function:

sequentialSearch(arr, target):

Purpose: Implements the sequential (linear) search algorithm.

How it works: Iterates through each element of the input array (arr) from the beginning until it finds a match for the target value.

Returns: The index of the target if found; otherwise, returns -1.

(Note: The binarySearch function is implemented directly within the <script> tags of support.html for this example.)

How to Use
Open support.html: Simply open the support.html file in your web browser.

View Initial Array: The "Current Array (Modified & Sorted)" section will display the numbers in the array after the initial modifications and sorting. The array will also be logged to your browser's developer console.

Perform Sequential Search:

Enter a number in the input field under "Sequential Search".

Click the "Search Sequentially" button.

The result will be displayed below the button.

Perform Binary Search:

Enter a number in the input field under "Binary Search".

Click the "Search Binarily" button.

The result will be displayed below the button.
