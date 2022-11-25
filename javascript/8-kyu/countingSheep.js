function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach(index => {
    if (index == true) {
      count++;
    }
  });
  return count;
}