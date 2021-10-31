function cats2(input) {
  let cats = [];
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow = () => {
      console.log(`${this.name}, age ${this.age} says Meow`);
    };
  }

  for (let i = 0; i < input.length; i++) {
    let catData = input[i].split(" ");
    let name = catData[0];
    let age = catData[1];
    cats.push(new Cat(name, age));
  }

  for (let elements of cats) {
    elements.meow();
  }
}

cats2(["Mellow 2", "Tom 5"]);
