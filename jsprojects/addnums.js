// const readline = require('readline');
// 
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const readline = require("readline");

const reader = readline.createInterface({
  // debugger
  input: process.stdin,
  output: process.stdout
  // debugger
});

function addNumbers(sum, numsLeft, completionCallback) {
  // debugger
  if (numsLeft > 0) {
    // debugger
    reader.question('What numbers would you like to add?', function(res) {
      let firstNum = res;
      firstNum = parseInt(firstNum);
      numsLeft -= 1;
      sum += firstNum;
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
}

// function parseInt 
  
addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
  reader.close();
});
  