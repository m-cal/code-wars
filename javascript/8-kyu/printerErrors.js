function printerError(s) {
  let errorCount = 0;
  s.split('').forEach(char => {
    if ('nopqrstuvwxyz'.includes(char)) {
      errorCount ++;
    }
  });
  return `${errorCount}/${s.length}`;
}