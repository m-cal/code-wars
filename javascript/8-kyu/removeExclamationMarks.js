function removeExclamationMarks(str) {
  let arr = str.split('');
  return arr.filter(i => i !== '!').join('');
}