function meetings(array) {
  let schedule = {};

  for (let elements of array) {
    let tokens = elements.split(" ");
    let day = tokens[0];
    let person = tokens[1];

    if (schedule.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      schedule[day] = person;
      console.log(`Scheduled for ${day}`);
    }
  }
  for (meets in schedule) {
    console.log(`${meets} -> ${schedule[meets]}`);
  }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
