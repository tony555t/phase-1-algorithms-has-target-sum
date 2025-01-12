//function hasTargetSum(array, target) {
  // Write your algorithm here
  function hasTargetSum(target, array) {
    // Write your algorithm here
    const availableSet= new Set(); // initialize an empty Set
    for (const number of array) {
        const complement = target - number;

        // .has returns true if the Set includes the complement
        if (availableSet.has(complement)) return true;

        // .add adds the number to the Set
        availableSet.add(number);
    }
    return false;
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  write a funtion contain a target and a array
  \initialize an empty object
  use for if to see if our set meets the coditions set aside.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
