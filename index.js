function isPalindrome(word) {
  // Write your algorithm here
  // write a function to take in a word(in string) as an arguement
  // convert the string  to an array and store the results in variable a.
  // Use .reverse() to reverse the array and store the array in variale b.
  // use .join to convert the array back to a string and store the results in variable c.
  // use .lowerCase() to convert the string to lower case and store the results in variable d.
}

/* 
  Add your pseudocode here
 -Take a string into an array.
 -reverse the array.
 -Return a new string.
 Check if the original string is same as the new returned string.
*/

/*
  Add written explanation of your solution here
  -The function should take a string and check if the string return the same backwards after being reversed.
  -It should return true if the string returns the same backwards after being reversed.
  -Return false: 
  -if the string does not return the same backwards after returned.
  -if the arguement is a number, an empty string not a string


*/

function isPalindrome(word) {
  // Check if the argument is not a string or if it's an empty string
  if (typeof word !== 'string' || word.length === 0) {
    return false;
  } else {
    // Convert the word to lowercase to handle case sensitivity
    const lowerCaseWord = word.toLowerCase();
    // Remove whitespace from the word
    const trimmedWord = lowerCaseWord.trim();
    // Reverse the trimmed word
    const reversedWord = trimmedWord.split('').reverse().join('');
    // Check if the original word is equal to the reversed word
    return trimmedWord === reversedWord;
  }
}

// Write Test Cases
if (require.main === module) {
  // Test Case 1
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  // Test Case 2
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  // Test Case 3
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  // Test Case 4
  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");
}

module.exports = isPalindrome;


//  write my Test Case
// check if the file is the main module being executed.
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  // one test case
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");// the blank line is for readability

  // test case 2
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

// test 3
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  // test 4
  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");
}

module.exports = isPalindrome;
