function nextDay(year, month, day) {
  let nextDay = day + 1;
  year = Date(year);

  if (day === 30) {
    nextDay = 1;
    month++;
    if (month === 12) {
      month = 1;
      year++;
    }
  }
  console.log(`${year}-${month}-${nextDay}`);
}
nextDay(1, 1, 1);
