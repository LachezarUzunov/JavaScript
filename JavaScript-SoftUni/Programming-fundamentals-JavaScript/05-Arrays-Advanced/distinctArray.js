// function distinctArray(array) {
//   let newArray = [];
//   let isRepeating = false;
//   for (let i = 0; i < array.length; i++) {
//     let currentNum = array[i];
//     let compareNum = 0;
//     for (let j = i + 1; j < array.length; j++) {
//       compareNum = array[j];
//       if (currentNum === compareNum) {
//         isRepeating = true;
//       }
//     }

//     if (!isRepeating) {
//       newArray.push(currentNum);
//     }
//     isRepeating = false;
//   }
//   console.log(newArray.join(" "));
// }

// function distinctArray(array) {
//   let newArray = array;

//   for (let i = 0; i < array.length; i++) {
//     let currentNum = array[i];
//     let compareNum = 0;

//     for (let j = i + 1; j < array.length; j++) {
//       compareNum = array[j];

//       if (currentNum === compareNum) {
//         newArray.splice(j, 1);
//       }
//     }
//   }

//   console.log(newArray.join(" "));
// }

function distinctArray(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];

    if (!result.includes(currentNum)) {
      result.push(currentNum);
    }
  }
  console.log(result.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 7, 1, 7]);
