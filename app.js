let raceNumber = Math.floor(Math.random() * 1000);

let runnerEarly = true;
let age = 17;

if (runnerEarly && age > 18) {
  raceNumber += 1000; 
  console.log(`Runner ${raceNumber}, your race will be at 9:30 am.`);
} else if (!runnerEarly && age >18) { console.log(`Runner ${raceNumber}, your race will be at 11:00 am.`);
} else if (age < 18) {
  console.log(`Runner ${raceNumber}, your race will be at 12:30 pm.`)
} else {
  console.log('Approach the registration desk.')
}
