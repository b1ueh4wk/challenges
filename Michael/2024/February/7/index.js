// Given two strings write a function that returns true or false 
// based on if one letter is missing, 
// one letter is replaced by another letter, 
// one letter is added, 
// or nothing is different.

/*
    Doing some research I found a really interesting solution:
    https://medium.com/@ethannam/understanding-the-levenshtein-distance-equation-for-beginners-c4285a5604f0
*/

function levenshteinDistance(str1, str2) {
    // Get the lengths of both input strings
    const len1 = str1.length;
    const len2 = str2.length;

    // Initialize a 2D array (Dynamic Programming table (dp)) to store the distances.
    // The array has (len1 + 1) rows and (len2 + 1) columns.
    const dp = Array.from({ length: len1 + 1 }, () => new Array(len2 + 1));

    // Fill the (Dynamic Programming table (dp)) table
    for (let i = 0; i <= len1; i++) {
        for (let j = 0; j <= len2; j++) {
            // Filling the first row: If str1 is empty, we need 'j' insertions to transform it into str2
            if (i === 0) {
                dp[i][j] = j;
            }
            // Filling the first column: If str2 is empty, we need 'i' deletions to transform str1 into an empty string
            else if (j === 0) {
                dp[i][j] = i;
            }
            // If the current characters in both strings are the same, no additional cost is incurred
            else if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            // If the current characters are different, consider the cost of three operations:
            // 1. Deletion from str1 (move left in the table)
            // 2. Insertion into str1 (move up in the table)
            // 3. Substitution in str1 (move diagonally up-left in the table)
            // Choose the operation with the minimum cost and add 1 (for the current operation)
            else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j],    // deletion
                                        dp[i][j - 1],    // insertion
                                        dp[i - 1][j - 1]); // substitution
            }
        }
    }

    // The value in dp[len1][len2] is the Levenshtein Distance between str1 and str2
    return dp[len1][len2];
}

function oneLetterOff(str1, str2) {
    return levenshteinDistance(str1, str2) <= 1;
}

console.log(oneLetterOff('cake', 'bake')) // Should return true
console.log(oneLetterOff('cake', 'ake')) // Should return true
console.log(oneLetterOff('cake', 'cake')) // Should return true
console.log(oneLetterOff('cake', 'caked')) // Should return true
console.log(oneLetterOff('cake', 'baked')) // Should return false