function roadRaddar(speed, area) {
  let typeOfSpeeding = "";
  let speedLimit = 0;
  if (area == "residential") {
    speedLimit = 20;
  } else if (area == "city") {
    speedLimit = 50;
  } else if (area == "interstate") {
    speedLimit = 90;
  } else if (area == "motorway") {
    speedLimit = 130;
  }

  if (speed - speedLimit <= 20) {
    typeOfSpeeding = "speeding";
  } else if (speed - speedLimit <= 40) {
    typeOfSpeeding = "excessive speeding";
  } else if (speed - typeOfSpeeding > 40) {
    typeOfSpeeding = "reckless driving";
  }

  if (area == "residential") {
    if (speed - speedLimit < 1) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else if (speed - speedLimit <= 20) {
      console.log(
        `The speed is ${
          speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${typeOfSpeeding}`
      );
    } else if (speed - speedLimit <= 40) {
      console.log(
        `The speed is ${
          speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${typeOfSpeeding}`
      );
    } else {
      console.log(
        `The speed is ${
          speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${typeOfSpeeding}`
      );
    }
  } else if (area == "city") {
    if (speed - speedLimit < 1) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else if (speed - speedLimit <= 20) {
      console.log(
        `The speed is ${
          speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${typeOfSpeeding}`
      );
    } else if (speed - speedLimit <= 40) {
      console.log(
        `The speed is ${
          speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${typeOfSpeeding}`
      );
    } else {
      console.log(
        `The speed is ${
          speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${typeOfSpeeding}`
      );
    }
  } else if (area == "interstate") {
    if (speed - speedLimit < 1) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else if (speed - speedLimit <= 20) {
      console.log(
        `The speed is ${
          speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${typeOfSpeeding}`
      );
    } else if (speed - speedLimit <= 40) {
      console.log(
        `The speed is ${
          speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${typeOfSpeeding}`
      );
    } else {
      console.log(
        `The speed is ${
          speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${typeOfSpeeding}`
      );
    }
  } else if (area == "motorway") {
    if (speed - speedLimit < 1) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else if (speed - speedLimit <= 20) {
      console.log(
        `The speed is ${
          speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${typeOfSpeeding}`
      );
    } else if (speed - speedLimit <= 40) {
      console.log(
        `The speed is ${
          speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${typeOfSpeeding}`
      );
    } else {
      console.log(
        `The speed is ${
          speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${typeOfSpeeding}`
      );
    }
  }
}

roadRaddar(120, "interstate");
