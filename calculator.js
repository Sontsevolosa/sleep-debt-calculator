function getSleepHours(day) {
  var hours = prompt('How many hours of sleep did you get on ' + day + ' this week?');
  return Number(hours);
}

function getActualSleepHours() {
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
}

function getIdealSleepHours() {
  var idealHours = prompt('How much sleep would you prefer per night?');
  return Number(idealHours) * 7;
}

function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualHoursPerWeek - idealHoursPerWeek) + ' hours more sleep than needed!');
  } else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest!');
  }  
}

calculateSleepDebt();
