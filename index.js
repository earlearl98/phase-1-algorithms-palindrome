function isPalindrome(word) {
const normalWord = word.toLowerCase().replace(/\s/g, ' ');
const reversedWord = normalWord.split('').reverse().join('');

// compare original word with new word 

return normalWord === reversedWord

}

const word1 = "mom"
const word2 = "racecar"
console.log(isPalindrome(word1))
console.log(isPalindrome(word2))

/* 
  the function is palindrome and 
  it checks if the word input is the same 
  when read both from left to right
  and from right to left i.e "mom"









  solution; reverse the input word and 
  compare it with the original word.If the same
  then the word is a palidrome hence `true` if not 
  then it is not a palindrome hence `false`

*/

/*
  Add written explanation of your solution here
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
