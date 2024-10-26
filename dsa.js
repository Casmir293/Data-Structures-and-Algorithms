let myArray = [7, 12, 9, 11, 3];

/** @ARRAY MINIMUM VALUE
 * save the first value
 * loop through and compare the next value with the saved value
 * if the value is lower than the saved, update the saved value
 */
function minimumValue(arr) {
  let lowestValue = arr[0];

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < lowestValue) {
      lowestValue = arr[i];
    }
  }
  console.log("Lowest Value ==>", lowestValue);
}

/** @ARRAY BUBBLE SORT
 * loop through the array
 * check if initial value is greater than the next value
 * if true, swap their index positions and assign new initial value
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return console.log("Bubble Sort ==>", arr);
}
