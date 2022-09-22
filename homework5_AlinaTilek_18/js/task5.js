function countChar(string, symbol) {
  var counter = 0;
  for (str of [...string]) {
    if (String(str).toLowerCase() === symbol) {
      counter += 1;
    }
  }
  return counter;
}

console.log(countChar("Abrakadabra", "a"));
console.log(countChar("Hello world", "o"));
