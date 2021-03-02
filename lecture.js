// Challenge 1
let superHeroes = [
    ["Batman", "Bruce Wayne"],
    ["Spiderman", "Peter Parker"],
    ["The Flash", "Barry Allen"]
  ]

let secretIdentity = superHeroes.map(
    function(revealArray) {
        return `${superHeroes[[0]]} is ${superHeroes[[1]]}`
    }
) 

console.log(secretIdentity)

// Challenge 2