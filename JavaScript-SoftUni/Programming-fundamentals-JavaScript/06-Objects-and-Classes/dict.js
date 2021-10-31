function dict(list) {
  let emptyList = [];

  for (let strings of list) {
    let tokens = JSON.parse(strings);
    emptyList.push(tokens);
  }
  let newlist = [];
  for (let i = 0; i < emptyList.length; i++) {
    let obj = emptyList[i];
    for (let key in obj) {
      let word = key;
      let desc = obj[key];
      if (!newlist.includes(word)) {
        newlist.push(word, desc);
      } else {
        let index = newlist.indexOf(word);
        newlist[index + 1] = desc;
      }
    }
  }

  let third = [];
  for (let i = 0; i < newlist.length; i += 2) {
    let term = newlist[i];
    let description = newlist[i + 1];
    let obj = {
      Term: term,
      Definition: description,
    };
    third.push(obj);
  }
  third.sort((a, b) => a.Term.localeCompare(b.Term));

  for (let words of third) {
    console.log(`Term: ${words.Term} => Definition: ${words.Definition}`);
  }
}

dict([
  '{"Coffee":"A hot drink."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Coffee":"A water."}',
]);
