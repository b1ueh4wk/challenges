/*

Challenge Description
Given a string 

find the most common character that occurs and return the character. 

Use a JavaScript file and you can run it in the terminal using Node [FILE_NAME].js.

Acceptable Solution Standards
- Must take in a string (It can be a declared variable).
- Must return the character that occurs the most in said string.
- Attempt to use the fastest time complexity when completing the challenge
Estimated Time for Completion
20-30 minutes

Additional Notes or Resources (Optional)
Submission Guidelines
Assign yourself to this issue
Create a branch for yourself in this issue
Write your code locally
Push up your code to your branch on GitHub
Create a Pull Request to merge your code into main
Get reviewed by the "challenger"
Get merged or update your code as requested, and repeat 4, 5, 6.

Similar to: https://www.codewars.com/kata/52efefcbcdf57161d4000091

*/

function mostCommonCharacter(string) {
    let characterCounter = {};
    let maxCount = 0;
    let mostFrequentChars = [];

    for (const char of string) {
        if (char.match(/[a-zA-Z]/)) {
            characterCounter[char] = (characterCounter[char] || 0) + 1;

            if (characterCounter[char] > maxCount) {
                maxCount = characterCounter[char];
                mostFrequentChars = [char];
            } else if (characterCounter[char] === maxCount && !mostFrequentChars.includes(char)) {
                mostFrequentChars.push(char);
            }
        }
    }

    return mostFrequentChars[0]; // Returns the first character with the highest frequency
}

// Test case #1:
console.log(mostCommonCharacter("aaaa")); // should return "a"
