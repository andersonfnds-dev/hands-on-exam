function isPalindrome(str) {
 
  const cleanedStr = str.toLowerCase();

 
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

const testString = 'arara'; 
const result = isPalindrome(testString);
console.log(`Is "${testString}" a palindrome? ${result}`);
