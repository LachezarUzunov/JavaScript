function vacation(num, type, day) {
  let price = 0;
  if (type === "Students") {
    switch (day) {
      case "Friday":
        price = num * 8.45;
        break;
      case "Saturday":
        price = num * 9.8;
        break;
      case "Sunday":
        price = num * 10.46;
        break;
    }
  } else if (type === "Business") {
    switch (day) {
      case "Friday":
        price = num * 10.9;
        break;
      case "Saturday":
        price = num * 15.6;
        break;
      case "Sunday":
        price = num * 16;
        break;
    }
  } else if (type === "Regular") {
    switch (day) {
      case "Friday":
        price = num * 15;
        break;
      case "Saturday":
        price = num * 20;
        break;
      case "Sunday":
        price = num * 22.5;
        break;
    }
  }

  if (type === "Students") {
    if (num >= 30) {
      price *= 0.85;
    }
  } else if (type === "Business") {
    if (num >= 100) {
      switch (day) {
        case "Friday":
          price = price - 109;
          break;
        case "Saturday":
          price = price - 156;
          break;
        case "Sunday":
          price = price - 160;
          break;
      }
    }
  } else if (type === "Regular") {
    if (num >= 10 && num <= 20) {
      price *= 0.95;
    }
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
