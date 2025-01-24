/* CHALLENGE DESCRIPTION

All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. Beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
*/

// MY SOLUTION
function feast(beast, dish) {
    let beastFirst = beast[0];
    let dishFirst = dish[0];
    let beastLast = beast[beast.length - 1];
    let dishLast = dish[dish.length - 1];
    
    if (beastFirst === dishFirst && beastLast === dishLast) {
      return true;
    } else {
      return false;
    }
}

// OTHER SOLUTIONS
const feast = (beast, dish) => beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];

const feast = (beast, dish) => beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);