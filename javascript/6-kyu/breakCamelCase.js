function solution(string) {
  const arr = string.split('');
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i].toUpperCase()) {
      arr[i - 1] += ' ';
    }
  }
  return arr.join('');
}