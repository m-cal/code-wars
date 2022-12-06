function minMax(arr){
  const toReturn = [];
  const sorted = arr.sort((a, b) => a-b);
  toReturn.push(sorted[0]);
  toReturn.push(sorted.pop());
  return toReturn
}