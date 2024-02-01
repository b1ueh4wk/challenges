function mostCommon(str) {
  const hashMap = {}
  let maxChar = null
  for (let char of str) {
    if (!hashMap[char]) {
      hashMap[char] = 0
    }
    hashMap[char]++
    if (hashMap[char] > hashMap[maxChar] || !maxChar) {
      maxChar = char
    }
  }
  return maxChar
}

console.log(`The most common character is: ${mostCommon('alphabet')}`) // Should return a