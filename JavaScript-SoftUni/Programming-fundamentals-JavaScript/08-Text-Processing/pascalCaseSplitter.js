// function pascalCaseSplitter(text) {
//   let result = [];
//   let currentWod = "";
//   // find word boundaries
//   let lower = text.toLocaleLowerCase();

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] != lower[i]) {
//       if (currentWod.length > 0) {
//         result.push(currentWod);
//       }
//       currentWod = text[i];
//     } else {
//       currentWod += text[i];
//     }
//   }
//   // extract words
//   if (currentWod.length > 0) {
//     result.push(currentWod);
//   }
//   // print results
//   console.log(result.join(", "));
// }

// function pascalCaseSplitter(text) {
//   let result = [];
//   let lastIndex = 0;
//   // find word boundaries
//   let lower = text.toLocaleLowerCase();

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] != lower[i]) {
//       let word = text.substring(lastIndex, i);
//       lastIndex = i;
//       if (word.length > 0) {
//         result.push(word);
//       }
//     }
//   }
//   let word = text.substring(lastIndex);
//   if (word.length > 0) {
//     result.push(word);
//   }

//   // print results
//   console.log(result.join(", "));
// }

function pascalCaseSplitter(text) {
  let result = text[0];
  let lower = text.toLocaleLowerCase();

  for (let i = 1; i < text.length; i++) {
    if (text[i] != lower[i]) {
      result += ", ";
    }
    result += text[i];
  }
  console.log(result);
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
