exports.min = function min (array) {
    if (array === undefined || array == 0) {
      return 0;
    }
    let minimal = array[0];
    let i;
    for(i = 1; i < array.length; i++){
      if (minimal > array[i]) {
        minimal = array[i];
      }
    }
    return minimal;
  }
  
  exports.max = function max (array) {
    if (array === undefined || array == 0) {
      return 0;
    }
    let maximal = array[0];
    let i;
    for(i = 1; i < array.length; i++){
      if (maximal < array[i]) {
        maximal = array[i];
      }
    }
    return maximal;
  }
  
  exports.avg = function avg (array) {
    if (array === undefined || array == 0) {
      return 0;
    }
    let total = array.reduce(function (a, b) {return a + b});
    let average = total / array.length;
    return average;
  }
