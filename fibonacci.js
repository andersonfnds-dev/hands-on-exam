const limit = 50;

function printFibonacciSeries(limit) {
    let a = 0, b = 1;
    let result = '';
  
    while (a <= limit) {
      result += a + ' ';
      let temp = a + b;
      a = b;
      b = temp;
    }
  
    console.log(result.trim());
  }
  
  
  printFibonacciSeries(limit);