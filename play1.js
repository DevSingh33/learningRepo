// Logs 3 thrice, not what we meant.
for (var i = 0; i < 3; i++) {
    console.log('i :', i);
    setTimeout(() => console.log(i), 0);
  }
  const name = 'dev';
  name = 2;
  // Logs 0, 1 and 2, as expected.
  for (let j = 0; j < 3; j++) {
    console.log('j :', j);
    setTimeout(() => console.log(j), 0);
  }