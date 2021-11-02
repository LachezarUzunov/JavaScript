function matchFullName(input) {
  let pattern = /(?<name>\b[A-Z][a-z]+ [A-Z][a-z]+\b)/g;
  let validName = pattern.exec(input);
  let names = [];
  while (validName != null) {
    names.push(validName[1]);
    validName = pattern.exec(input);
  }
  console.log(names.join(" "));
}

matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
