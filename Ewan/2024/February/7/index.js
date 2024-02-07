function oneLetterOff(str1, str2) {
  if (str1 == str2) {
    return true
  }
  const lengthDif = str1.length - str2.length
  if (lengthDif == -1) {
    ;[str1, str2] = [str2, str1]
  }
  let dif = 0
  for (let i = 0; i < str2.length; i++) {
    const char1 = Math.abs(lengthDif) ? str1[i + dif] : str1[i]
    const char2 = str2[i]
    if (char1 != char2) {
      if (dif) {
        return false
      }
      dif++
    }
  }
  return true
}

console.log(oneLetterOff('cake', 'bake')) // Should return true
console.log(oneLetterOff('cake', 'cae')) // Should return true
console.log(oneLetterOff('cake', 'cake')) // Should return true
console.log(oneLetterOff('cake', 'caked')) // Should return true
console.log(oneLetterOff('cake', 'baked')) // Should return false
