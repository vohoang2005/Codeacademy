let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = 'yes';
const age = 19;
if (registeredEarly === 'yes' && age > 18) {
  console.log(`Race at 9:30 am, Race number :${raceNumber}`);
} else if (registeredEarly === 'No' && age > 18) {
  console.log(`Race at 11:00 am, Race number : ${raceNumber}`);
} else if (age < 18) {
  console.log(`Youth registrants run at 12:30 pm, Race number : ${raceNumber}`);
} else {
  console.log('runner, see the registration desk');
}