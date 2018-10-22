function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    let copiedArr = [...arr];
    newArr.push(copiedArr);

    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
