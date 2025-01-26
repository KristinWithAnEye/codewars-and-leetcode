/* CHALLENGE DESCRIPTION

Check the provided array (x) for good ideas "good" and bad ideas "bad." 

If there are one or two good ideas, return "Publish!" If there are more than two, return "I smell a series!"

If there are no good ideas, as is often the case, return "Fail!"
*/

// MY SOLUTION
function well(x) {
    const goodIdeas = x.filter((idea) => idea === "good").length;
    if (goodIdeas > 2) {
      return "I smell a series!";
    } else if (goodIdeas > 0) {
      return "Publish!";
    } else {
      return "Fail!";
    }
}

// OTHER SOLUTIONS
const well = x => {
    const good_count = x.filter(x => x === "good").length;
    return good_count < 1 ? "Fail!" : 
           good_count < 3 ? "Publish!" : "I smell a series!";
};

const well = x => x.includes("good") ? x.filter(s => s === "good").length < 3 ? "Publish!" : "I smell a series!" : "Fail!";