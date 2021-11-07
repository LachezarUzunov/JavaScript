function timeToWalk(steps, footLength, speed) {
  // each 500 meters the student takes 1 min break;
  // S = V x T   T = S / V
  let meters = steps * footLength;
  let km = meters / 1000;
  let time = km / speed;
  let rests = meters / 500;
  let timeAsString = time.toString();
  let hours = timeAsString[0];
  let endTime = time + rests;
  let minutes = endTime * 60;
  let secondsAsString = minutes.toString();
  let secs = secondsAsString[secondsAsString.length - 1];

  console.log(time);
  console.log(minutes);
  console.log(secondsAsString);
  console.log(secs);
  let seconds;
}
timeToWalk(4000, 0.6, 5);
