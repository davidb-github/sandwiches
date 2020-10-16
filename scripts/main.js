console.log("Welcome to the main module")
// 1. Define a function called "makeSandwich" that takes 4 parameters: protein, cheese, veggie, bread
const makeSandwich = (protein, cheese, veggie, bread) => {
    // 2. makeSandwich should create a new sandwich object with the 4 parameters as its key/value pairs
    const sandwichObj = 
    {
        protein: protein,
        cheese: cheese,
        veggie: veggie,
        bread: bread
    }
    // 3. makeSandwich will return our newly created sandwich
    return sandwichObj;
}


// 4. Call it a few times passing in different arguments to make different sandwiches!
let food1 = makeSandwich('ham','cheddar','tomato','wheat')
let food2 = makeSandwich('turkey','havarti','tomato','rye')
console.log(food1, food2);


