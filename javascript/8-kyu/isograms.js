function isIsogram(str){
  const arr = str.toLowerCase().split('');
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr2.includes(arr[i])) {
      return false;
    } else {
      arr2.push(arr[i]);
    }
  }
  return true;
}
