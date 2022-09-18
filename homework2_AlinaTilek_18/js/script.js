var numberFirst = prompt('Number first');
var numberSecond = prompt('Number second');

if (+numberFirst && +numberSecond) {
  if (numberFirst > numberSecond) {
    console.log('Number first is greater: ', numberFirst);
  } else {
    console.log('Number second is greater: ', numberSecond);
  } 
} else {
  console.log('You entered incorrect values');
}
