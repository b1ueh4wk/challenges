
// Must take in a string (It can be a declared variable).
// Must return the character that occurs the most in said string.
// Attempt to use the fastest time complexity when completing the challenge

const str = 'aabbbbccc';

function mostCommonCharacter(str) {
  const charMap = {};
  for (const char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  let maxChar = "";
  let maxCount = 0;
  for (const char in charMap) {
    if (charMap[char] > maxCount) {
      maxChar = char;
      maxCount = charMap[char];
    }
  }
  console.log(maxChar);

  return maxChar;
}

let mostCommon = mostCommonCharacter(str);

// NOTE: solution should output the common character as 'b'