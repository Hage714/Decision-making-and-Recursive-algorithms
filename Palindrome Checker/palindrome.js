//Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.

function PalindromeChecker(str) {
  const cleanStr = str.replace(/\W/g, "").toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase

  if (cleanStr.length <= 1) {
    return true;
  }

  return (
    cleanStr[0] === cleanStr[cleanStr.length - 1] &&
    PalindromeChecker(cleanStr.slice(1, -1))
  ); // Check if the first and last characters are the same, then call the function again
}

const check1 = "madam";
const check2 = "level";
const check3 = "book";

console.log(`${check1} is a palindrome: ${PalindromeChecker(check1)}`);
console.log(`${check2} is a palindrome: ${PalindromeChecker(check2)}`);
console.log(`${check3} is a palindrome: ${PalindromeChecker(check3)}`);
