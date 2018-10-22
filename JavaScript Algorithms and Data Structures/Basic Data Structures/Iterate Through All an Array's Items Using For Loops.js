function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      //sub-array
      if (newArr[i][j] == elem) {
        //we want to cut out this entire sub-array if true, and return to the start of the j loop if false.
        
        /*Was originally trying to approach this problem to do arr[i][j] != elem, but realized the program would
        have to somehow track that NONE of the j's had == elem in order to then execute the next step. There's
        probably a way to do that, but idk if it would be concise nor quick to run. Lesson learned: don't try
        and use the complex solution just cuz it's the first one you thought of. */

        newArr.splice(i, 1);
        i--;
        break; //got stuck, had to peek at the solution and then review breaks to see why this was needed, too. 
      }
    }
  }

  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
