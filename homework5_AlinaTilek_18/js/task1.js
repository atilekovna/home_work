function reverseStr(string) {
  if (string) {
    return [...string].reverse().join("");
  } else {
    return "String is not valid";
  }
}

console.log(reverseStr("123456789"));
