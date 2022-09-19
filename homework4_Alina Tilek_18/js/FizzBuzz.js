var numberLength = 100;
var resultFizz;
var resultBuzz;

for (var i = 1; i <= numberLength; i++) {

  resultFizz = i % 3;
  resultBuzz = i % 5;
  
  if (resultFizz === 0 && resultBuzz === 0) {
    console.log('FizzBuzz');
  } else if (resultFizz === 0) {
    console.log('Fizz');
  } else if (resultBuzz === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
  
}