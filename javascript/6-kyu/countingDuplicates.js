function duplicateCount(text){
  const arr = text.toLowerCase().split('');
  const alreadyExists = [];
  const toCount = [];
  for (let i = 0; i < arr.length; i++) {
    if (!alreadyExists.includes(arr[i])) {
      alreadyExists.push(arr[i]);
    } else if (toCount.includes(arr[i])){
      console.log('hehe');
    } else {
      toCount.push(arr[i])
    }
  }
  return toCount.length;
}