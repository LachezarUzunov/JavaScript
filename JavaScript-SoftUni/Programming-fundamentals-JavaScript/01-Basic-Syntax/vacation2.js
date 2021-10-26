function vacation2(num, type, day) {
  if (type === "Students") {
    if (num >= 30) {
      switch (day) {
        case "Friday":
          console.log(`Total price: ${(num * 8.45 * 0.85).toFixed(2)}`);
          break;
        case "Saturday":
          console.log(`Total price: ${(num * 9.8 * 0.85).toFixed(2)}`);
          break;
        case "Sunday":
          console.log(`Total price: ${(num * 10.46 * 0.85).toFixed(2)}`);
          break;
      }
    } else {
      switch (day) {
        case "Friday":
          console.log(`Total price: ${(num * 8.45).toFixed(2)}`);
          break;
        case "Saturday":
          console.log(`Total price: ${(num * 9.8).toFixed(2)}`);
          break;
        case "Sunday":
          console.log(`Total price: ${(num * 10.46).toFixed(2)}`);
          break;
      }
    }
  } else if (type === "Business") {
    if (num >= 100) {
      switch (day) {
        case "Friday":
          console.log(`Total price: ${(num * 10.9 - 109).toFixed(2)}`);
          break;
        case "Saturday":
          console.log(`Total price: ${(num * 15.6 - 156).toFixed(2)}`);
          break;
        case "Sunday":
          console.log(`Total price: ${(num * 20 - 200).toFixed(2)}`);
          break;
      }
    } else {
      switch (day) {
        case "Friday":
          console.log(`Total price: ${(num * 10.9).toFixed(2)}`);
          break;
        case "Saturday":
          console.log(`Total price: ${(num * 15.6).toFixed(2)}`);
          break;
        case "Sunday":
          console.log(`Total price: ${(num * 20).toFixed(2)}`);
          break;
      }
    }
  } else if (type === "Regular") {
    if (num >= 10 && num <= 20) {
      switch (day) {
        case "Friday":
          console.log(`Total price: ${(num * 15 * 0.95).toFixed(2)}`);
          break;
        case "Saturday":
          console.log(`Total price: ${(num * 20 * 0.95).toFixed(2)}`);
          break;
        case "Sunday":
          console.log(`Total price: ${(num * 22.5 * 0.95).toFixed(2)}`);
          break;
      }
    } else {
      switch (day) {
        case "Friday":
          console.log(`Total price: ${(num * 15).toFixed(2)}`);
          break;
        case "Saturday":
          console.log(`Total price: ${(num * 20).toFixed(2)}`);
          break;
        case "Sunday":
          console.log(`Total price: ${(num * 22.5).toFixed(2)}`);
          break;
      }
    }
  }
}
vacation2(40, "Regular", "Saturday");
