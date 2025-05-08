// find occurence of each word in array
const fruits = ["apple", "banana", "apple", "kiwi", "orange", "banana"];

const wordCount = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(wordCount);

// find occurence of each character in word
const word = "apple";

const charCount = word.split("").reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});

console.log(charCount);

// check string is palindrome
const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

console.log(isPalindrome("madam"));

// reverse the string
const isReverse = (str) => {
    return str.split("").reverse().join("");
}

console.log(isReverse("Atish"));

// remove duplicates 
function removeDuplicates(arr) {
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
      if (!unique.includes(arr[i])) {
        unique.push(arr[i]);
      }
    }
    return unique;
  }
  
  console.log(removeDuplicates([1, 2, 2, 3]));
