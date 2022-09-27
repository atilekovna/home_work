var count = 1;

document.getElementById("count").innerHTML = count;

var buttonLowerCount = document.getElementById("lower-count");
buttonLowerCount.addEventListener("click", lowerCounter);

var buttonAddCount = document.getElementById("add-count");
buttonAddCount.addEventListener("click", addCounter);

function lowerCounter() {
  count -= 1;
  count = count < 0 ? 0 : count;
  document.getElementById("count").innerHTML = count;
}

function addCounter() {
  count += 1;
  document.getElementById("count").innerHTML = count;
}
