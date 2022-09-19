var height = 10;
var result = ""
for (var i = 0; i < height; i++) {
  for (var j = 0; j < height; j++) {
    if ( i % 2 !== 0 ) {
      result += j % 2 === 0 ? " " : "#"
    } else {
      result += j % 2 === 0 ? "#" : " " 
    }
  }
  result += '\n'
}
console.log(result)