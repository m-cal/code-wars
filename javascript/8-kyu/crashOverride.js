function aliasGen(first, last){
  let aliasFirst = '';
  let aliasLast = '';
  let reg = /[a-zA-Z]/gi;
  if (! first[0].match(/[a-zA-z]/) || ! last[0].match(/[a-zA-Z]/)) {
    return 'Your name must start with a letter from A - Z.';
  } else if (first[0] != first[0].toUpperCase()) {
    first = first.charAt(0).toUpperCase() + first.slice(1);
    last = last.charAt(0).toUpperCase() + last.slice(1);
  }
  for (let i in firstName) {
    if (first[0].toUpperCase() == i) {
      aliasFirst = firstName[i];
    }
  }

  for (let i in surname) {
    if (last[0].toUpperCase() == i) {
      aliasLast = surname[i];
    }
  }
  return `${aliasFirst} ${aliasLast}`;
}