function squareDigits(num){
  return Number(String(num).split('').map(x => x**2).join(''));
}