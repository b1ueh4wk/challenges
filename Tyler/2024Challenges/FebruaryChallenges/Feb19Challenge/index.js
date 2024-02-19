
const palindromeStr = 'lalal'

const spacedPalindrome = 'was it a car or a cat i saw'

const nonPalindromeStr = 'kittens'


function findPalindrome (string) {

  let reverseString = ''
  let forwardString = ''

  for(let i = string.length - 1; i >= 0; i--){
    console.log('current char: ', string[i])
    if(string[i] == ' ')
    {
      console.log('skipping space')
      i--
    }
    reverseString = reverseString.concat(string[i])

    console.log('current string: ', reverseString)
  }

  for(let i = 0; i < string.length; i++){
    if(string[i] == ' ')
    {
      i++
    }
    forwardString = forwardString.concat(string[i])
  }

  console.log('does ', forwardString, ' = ', reverseString, ' ?')

  if(forwardString == reverseString){
    return true
  }
  else{
    return false
  }
}

console.log(findPalindrome(palindromeStr))

console.log(findPalindrome(spacedPalindrome))

console.log(findPalindrome(nonPalindromeStr))