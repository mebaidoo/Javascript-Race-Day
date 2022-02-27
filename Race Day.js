//Registering different aged runners for specific time periods
let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 19;
if (age > 18 && registeredEarly === true) {
  raceNumber += 1000;
}
if (age > 18 && registeredEarly === true) {
  console.log('Your race starts at 9:30 am.')
}
else if (age > 18 && registeredEarly === false) {
  console.log(`${raceNumber}, you start at 11:00am.`)
}
else if (age < 18) {
  console.log(`${raceNumber}, you start at 12:30am.`)
}
else {
  console.log('Please see the registration desk')
};