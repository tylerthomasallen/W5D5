const readline = require("readline");

const reader = readline.createInterface({
  // debugger
  input: process.stdin,
  output: process.stdout
  // debugger
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} bigger than ${el2}?`, function(res){
    console.log('Hit the reader');
    if (res === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

// askIfGreaterThan(1, 2, function(val) {
//   console.log(val);
//   reader.close();
// });

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSort) {
  if (i === arr.length - 1 ) {
    outerBubbleSort(madeAnySwaps);
    console.log('Hit the end');
  } else {
    askIfGreaterThan(arr[i], arr[i+1], function (isGreaterThan) {
      if (isGreaterThan) {
        console.log(isGreaterThan);
        console.log('Hit the logic');
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSort);
    });
  }
}

function absurdBubbleSort(arr, sortCompletionCallBack) {
  outerBubbleSort(true)
  function outerBubbleSort(madeAnySwaps){
    if (madeAnySwaps){
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSort)
      
    }
  }  
}

innerBubbleSortLoop([1, 2, 3, 4, 5], 0, false);