/* CHALLENGE DESCRIPTION (ARRAY LADDER)

Find the mean (average) of a list of numbers in an array.

To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7:

1. Add all of the numbers
1 + 3 + 5 + 7 = 16

2. Divide by the number of values in the list. In this example there are 4 numbers in the list.
16 / 4 = 4

3. The mean (or average) of this list is 4.
*/

/* PREP
Parameters
    // array of integers
Returns 
    // return the average of all the elements in the array
Examples 
    // [1, 2, 3, 4, 5]
        // 3
    //  [10, 20, 30]
        // 20
Pseudocode 
    // function that takes in one parameter, array of integers
    // sum all the elements in the array
    // divide the sum by the array.length
    // return the average
*/

// MY SOLUTIO
function findAverage(nums) {
    let sum = nums.reduce((a, b) => a + b);
    return sum / nums.length;
}

// OTHER SOLUTIONS
const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;