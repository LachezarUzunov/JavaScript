function dayOfWeek(day) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (day > 0 && day < 8) {
    console.log(days[day - 1]);
  } else {
    console.log("Invalid day!");
  }
}
dayOfWeek(3);
