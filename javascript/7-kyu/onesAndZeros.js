const binaryArrayToNumber = arr => {
  let sum = 0;
  let counter = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
      sum += (arr[i]);
    } else {
      sum += ((2**(counter -1)) * arr[i]);
      counter--;
    }
  }
  return sum;
};