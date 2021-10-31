function solve(catsAsStrings) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let cats = [];

  for (catData of catsAsStrings) {
    let tokens = catData.split(" ");
    let name = tokens[0];
    let age = tokens[1];

    let cat = new Cat(name, age);
    cats.push(cat);
  }

  for (let cat of cats) {
    cat.meow();
  }
}
solve(["Mellow 2", "Tom 5"]);
