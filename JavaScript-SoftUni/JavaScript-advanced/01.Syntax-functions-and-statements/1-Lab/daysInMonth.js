function daysInMonth(month, year) {
  let days = new Date(year, month, 0);
  let daysAs = days.getDate();
  console.log(days);
  console.log(daysAs);
}

daysInMonth(1, 2012);
