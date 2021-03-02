// // Challenge 1
// let superHeroes = [
//     ["Red Riding Hood", "Carmen San Diego"],
//     ["Black Cat", "Mr Mittens"],
//     ["Tabby Fatty", "Garfield"]
//   ]

// let secretIdentity = superHeroes.map(
//     function(revealArray) {
//         return `${superHeroes[[0]]} is ${superHeroes[[1]]}`
//     }
// ) 

// console.log(secretIdentity)

// // Challenge 4
// let slideshow = {
//     photoList: [
//         'beach', 'islands', 'foods', dogs
//     ];
// }

// Problem 5

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift(0);
  }
  
  var testArr = [1,2,3,4,5];

  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));