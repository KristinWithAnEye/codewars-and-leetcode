/* 1768: MERGE STRINGS ALTERNATELY

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Example 3:
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 
Constraints:
1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.
*/

// function that takes two str, word1 and word2, only lowercase, never empty
    // word1.length and word2.length >= 1
    // word1.length and word2.length <= 100
// return str, merged word1 and word2, adding chars in alt order
    // if one string is longer than other, append additional chars to end of merged str

function mergeAlternately(word1, word2) {

}

console.log(mergeAlternately("abc", "pqr"), "apbqcr");
console.log(mergeAlternately("ab", "pqrs"), "apbqrs");
console.log(mergeAlternately("abcd", "pq"), "apbqcd");