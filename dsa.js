let myArray = [7, 12, 9, 11, 3];

/** @FIND THE MINIMUM VALUE IN THE ARRAY
 * save the first data
 * loop through and compare the next item with the saved item
 * if the data is lower than the saved, update the saved data
 */

let lowestData = myArray[0];

for (let i = 1; i <= myArray.length; i++) {
  if (myArray[i] < lowestData) {
    lowestData = myArray[i];
  }
}

console.log("Lowest Value:", lowestData);

// BUBBLE SORT
