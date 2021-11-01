function oddOccurrancies(list) {
  let obj = {};
  let listAsArray = list.split(" ");

  for (let element of listAsArray) {
    let str = element.toLowerCase();

    if (!obj.hasOwnProperty(str)) {
      obj[str] = 1;
    } else {
      obj[str] += 1;
    }
  }

  let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  let empty = [];

  for (let elements of sorted) {
    if (elements[1] % 2 != 0) {
      empty.push(elements[0]);
    }
  }
  console.log(empty.join(" "));
}
oddOccurrancies("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
