function checkValidValue(inn) {
  return (
    [...inn].length === 14 &&
    (parseInt([...inn][0]) === 0 ||
      parseInt([...inn][0]) === 1 ||
      parseInt([...inn][0]) === 2)
  );
}

console.log(checkValidValue("16677649734666"));
