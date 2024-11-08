let myArray = [7, 12, 9, 11, 3];

/**
 * @ARRAY MINIMUM VALUE
 * save the first value
 * loop through and compare the next value with the saved value
 * if the value is lower than the saved, update the saved value
 */
const minimumValue = (arr) => {
  let lowestValue = arr[0];

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < lowestValue) {
      lowestValue = arr[i];
    }
  }
  console.log("Lowest Value ==>", lowestValue);
  return arr;
};

/**
 * @ARRAY BUBBLE SORT
 * loop through the array
 * check if initial value is greater than the next value
 * if true, swap their index positions and assign new initial value
 */
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSwapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  console.log("Bubble Sort ==>", arr);
  return arr;
};

/**
 * @ARRAY SELECTION SORT
 * loop through the array
 * find the lowest value
 * move it to the start of the loop by swapping its index
 */
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  console.log("Selection Sort ==>", arr);
  return arr;
};

/**
 * @ARRAY INSERTION SORT
 * Start from the second element in the array (index 1).
 * For each element, compare it with the elements in the sorted portion on its left.
 * If the element is smaller, shift the larger elements to the right to make space.
 * Place the element in its correct position within the sorted portion.
 * Repeat until the entire array is sorted.
 */
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }

  console.log("Insertion Sort ==>", arr);
  return arr;
};

/**
 * @QUICK SORT
 * Recursive function to sort an array.
 * Choose a pivot, partition the array, and recursively sort the subarrays.
 */
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  arr = [...quickSort(left), pivot, ...quickSort(right)];
  console.log("Quick Sort ==>", arr);
  return arr;
};

quickSort(myArray);
