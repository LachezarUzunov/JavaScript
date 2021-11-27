function carFactory(form) {
  let obj = {};

  function getEngine(power) {
    if (power <= 90) {
      return { power: 90, volume: 1800 };
    } else if (power <= 120) {
      return { power: 120, volume: 2400 };
    } else {
      return { power: 200, volume: 3500 };
    }
  }
  const properWheelSize =
    form.wheelsize % 2 == 0 ? form.wheelsize - 1 : form.wheelsize;

  obj.model = form.model;
  obj.engine = getEngine(form.power);
  obj.carriage = { type: form.carriage, color: form.color };
  obj.wheels = new Array(4).fill(properWheelSize, 0, 4);

  return obj;
}

carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});

console.log(
  carFactory({
    model: "Ferrari",
    power: 200,
    color: "red",
    carriage: "coupe",
    wheelsize: 21,
  })
);
