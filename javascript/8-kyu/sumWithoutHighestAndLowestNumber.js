function sumArray(arr) {
  if (!arr || arr.length < 3) {
    return 0;
  } else {
    const sorted = arr.sort((a, b) => a - b);
    sorted.shift();
    sorted.pop();
    sorted.reduce((previousVal, currentVal) => previousVal + currentVal, 0);
  }
}