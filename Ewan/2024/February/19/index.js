function PalindromeChecker(word) {
  word = word.replaceAll(' ', '')
  const wordReverse = word.split('').reverse('').join('')
  return word == wordReverse
}

console.log(PalindromeChecker('racecar')) // true
console.log(PalindromeChecker('level')) // true
console.log(PalindromeChecker('table')) // false
console.log(PalindromeChecker('mom')) // true
console.log(PalindromeChecker('02022020')) //true
console.log(PalindromeChecker('a santa at nasa')) // true
console.log(PalindromeChecker('checker')) // false
console.log(PalindromeChecker('was it a car or a cat i saw')) // true
