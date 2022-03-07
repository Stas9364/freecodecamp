// Only change code below this line
function countdown(n){
    let count;
    if (n < 1) {
        return [];
    }else {
      let count = countdown(n - 1);
      count.unshift(n);
      console.log(count)
  
      return count;
  
    }
  }
  countdown(10)