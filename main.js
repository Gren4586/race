let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true
let runnerAge = 20

if (registeredEarly === true && runnerAge > 18) {
  raceNumber += 1000
}

if (registeredEarly === true && runnerAge > 18) {
  console.log('Early registered adults race at 9:30 AM. Racer Number: ' + raceNumber);
} else if (registeredEarly === false && runnerAge > 18 ) {
  console.log('Late registered adults race at 11:00 AM. Racer Number: ' + raceNumber);
} else if (runnerAge < 18) {
  console.log('Youth registrants will run at 12:30 PM regardless of registration. Racer Number: ' + raceNumber);
} else {
  console.log('Please see the registration desk!');
}
