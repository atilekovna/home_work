const timeWrapper = document.getElementById("counterTimer");
const startDate = new Date(2022, 9, 1, 13, 40, 0); // 1 октября 2022

const daysCounterElement = timeWrapper.querySelector("#timer-days-value");
const hoursCounterElement = timeWrapper.querySelector("#timer-hours-value");
const minutesCounterElement = timeWrapper.querySelector("#timer-minutes-value");
const secondsCounterElement = timeWrapper.querySelector("#timer-seconds-value");

function GetDiffDate(date) {
  const dateNow = new Date();
  return date - dateNow;
}

function ExtractDaysFromDiffDate(diffDate) {
  return Math.floor(diffDate / (24 * 60 * 60 * 1000));
}

function ExtractHoursFromDiffDate(diffDate) {
  return Math.floor((diffDate % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
}

function ExtractMinutesFromDiffDate(diffDate) {
  return Math.floor((diffDate % (60 * 60 * 1000)) / (1000 * 60));
}

function ExtractSecondsFromDiffDate(diffDate) {
  return Math.floor((diffDate % (60 * 1000)) / 1000);
}

setInterval(() => {
  var daysValue = ExtractDaysFromDiffDate(GetDiffDate(startDate));

  daysCounterElement.innerHTML = daysValue;
  hoursCounterElement.innerHTML = ExtractHoursFromDiffDate(
    GetDiffDate(startDate)
  );
  minutesCounterElement.innerHTML = ExtractMinutesFromDiffDate(
    GetDiffDate(startDate)
  );
  secondsCounterElement.innerHTML = ExtractSecondsFromDiffDate(
    GetDiffDate(startDate)
  );

  console.log(daysValue);

  if (daysValue < 0) {
    document.getElementById("counterTimer").innerHTML = '';
    document.getElementById("counter-text").innerHTML = 'Курс начался';
  }
}, 1000);
