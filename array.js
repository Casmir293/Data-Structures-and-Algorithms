let myArray = [7, 12, 9, 11, 3];

/** @ARRAY MINIMUM VALUE
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

/** @ARRAY BUBBLE SORT
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

/** @ARRAY SELECTION SORT
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
