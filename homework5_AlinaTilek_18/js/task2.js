function reverseStr(string) {
  return string === [...string].reverse().join("");
}

console.log(reverseStr("топот"));
