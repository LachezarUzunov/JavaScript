function partyTime(list) {
  //
  let indexOfParty = list.indexOf("PARTY");
  let digitList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let vip = [];
  let regular = [];
  for (let i = 0; i < indexOfParty; i++) {
    let currentGuest = list[i];
    if (digitList.includes(currentGuest[0])) {
      vip.push(currentGuest);
    } else {
      regular.push(currentGuest);
    }
  }

  // removing guests
  for (let i = indexOfParty + 1; i < list.length; i++) {
    let currentGuest = list[i];
    if (vip.includes(currentGuest)) {
      vip.splice(vip.indexOf(currentGuest), 1);
    } else if (regular.includes(currentGuest)) {
      regular.splice(regular.indexOf(currentGuest), 1);
    }
  }
  let totalGuest = vip.length + regular.length;
  console.log(totalGuest);
  for (let guest of vip) {
    console.log(guest);
  }
  for (let guest of regular) {
    console.log(guest);
  }
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
