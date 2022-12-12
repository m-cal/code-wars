function XO(str) {
  const arr = str.toLowerCase().split('')
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      xCount ++;
    } else if (arr[i] === 'o') {
      oCount ++;
    }
  }
  return xCount === oCount;
}