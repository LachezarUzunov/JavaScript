function makeDictionary(dictionary) {
  //create object from the array of strings
  let list = [];

  for (let terms of dictionary) {
    let obj = JSON.parse(terms);
    console.log(obj);
  }

  // string contains word and definition, so split them to word and definition

  // check if word contains in the obj already and replace it with the new definition

  // sort dictionary alpabetically and print term and definition
}

makeDictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
