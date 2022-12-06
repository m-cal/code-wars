function findNextSquare(sq) {
  for (let i = 0; i < sq; i++) {
    if (i * i == sq) {
      return (i+1) * (i+1);
    }
  }
  return -1;
}