function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = word.split("").reverse().join("");
  return word === reverseWord;
}

/* 
  Add your pseudocode here

*/

/*
  Add written explanation of your solution here
  first we created a variable name reverseWord, parameter is 'word', then we are using 'split' method that will split the word
  . 'reverse' method will use the split letter and reverse them in the same order. 
  after this we are using 'join' method that will join the split and reverse letters together in the same order. This will only work on the palindrome word.
  if the word is not a palindrome, it will return FALSE.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
