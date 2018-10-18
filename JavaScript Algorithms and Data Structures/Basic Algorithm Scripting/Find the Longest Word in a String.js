function findLongestWordLength(str) {
  const regex = /\S+/g;
  let wordArray = str.match(regex); //separates each word into its own item on an array
  let lengthArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    lengthArray.push(wordArray[i].length); //converted wordArray into a corresponding array of wordlengths
  }
  return Math.max(...lengthArray); //determining largest number of wordlength array
}
//there was probably a more elegant solution to this, but I solved it a couple different ways and this seemed the least clunky of them all. Plus, Math.max is cool and I wanted an excuse to use it again.
findLongestWordLength("The quick brown fox jumped over the lazy dog");
