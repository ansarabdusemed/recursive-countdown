// Only change code below this line
function countdown(n) {
    //return an empty array if n is or less than 0
    if (n <= 0) {
      return [];
    } else {
      //recursive call
      const countArray = countdown(n - 1);
      /* .unshift() - adds new items to the beginning of an array, and returns the new length */
      countArray.unshift(n);
      return countArray ;
    }
  }
  
  // Only change code above this line

  var data = countdown(5);
  
  //this should print => [5, 4, 3, 2, 1]
  console.log(data);
  