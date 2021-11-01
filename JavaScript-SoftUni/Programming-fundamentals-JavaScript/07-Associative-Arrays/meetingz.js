function meetingz(list) {
  let meets = {};
  for (let days of list) {
    let tokens = days.split(" ");
    let day = tokens[0];
    let name = tokens[1];

    if (meets.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      meets[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }
  for (let key in meets) {
    console.log(`${key} -> ${meets[key]}`);
  }
}

meetingz(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
