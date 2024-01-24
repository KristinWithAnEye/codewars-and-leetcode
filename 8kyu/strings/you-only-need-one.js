/* CHALLENGE DESCRIPTION

You will be given an array and a value. All you need to do is check whether the provided array contains the value.

The array can contain numbers or strings. The value can be either.

Return true if the array contains the value, false if not.
*/

// MY SOLUTION
const check = (a, x) => a.includes(x) ? true : false;

// OTHER SOLUTIONS
const checkA = (a, x) => a.includes(x);

function check(a, x) {
    return a.includes(x);
}