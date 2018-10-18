function reverseString(str) {
  let strArr = [];
  for (let i = 0; i < str.length; i++) {
    strArr.unshift(str[i]);
  }
  let revStr = "";
  for (let a = 0; a < str.length; a++) {
    revStr += strArr[a];
  }
  return revStr;
}

reverseString("hello");
