// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers. Done
// b. All items should be strings. Done
// c. Objects and properties should have commas seperating them. Done
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    },
    {
        name: "espresso",
        price: 5,
        seasonal: false,
    },
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "affogato",
        price: 9,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: "americano",
        price: 7,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: 6,
        seasonal: false,
    },
    {
        name: "frappe",
        price: 8,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    },
]

// Conneting coffee_data to the index.js file 

/*  Office hours: module.exports = coffeeMenu; is not working (node.js)*/

// Print an array of all the drinks on the menu -> Using map method
const drinks = coffeeMenu.map(item => item.name);
console.log(drinks)

// Print an array of drinks that cost 5 and under. -> Using filter
const underFive = (item) => {
    return item.price <= 5;
}
const drinksUnderFive = coffeeMenu.filter(underFive);
console.table(drinksUnderFive);

// Another way to write the code: const cheapDrinks = coffeeMenu.filter(item => item.price <= 5);

// Print an array of drinks that are priced at an even number. -> Using filter
const evenDrinks = coffeeMenu.filter(item => item.price % 2 === 0);
console.log(evenDrinks);

// First print all the prices into an Array using map method 
// Then Print the total if you were to order one of every drink. -> Using accumulator and reduce
const priceArray = coffeeMenu.map(item => item.price);
console.log(priceArray);

const totalPrice = priceArray.reduce(
    (accumulater, currentValue) => accumulater + currentValue, 0
)
console.log(totalPrice);

// Print an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeMenu.filter(item => item.seasonal === true);
console.table(seasonalDrinks);

// Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
const seasonalImported = coffeeMenu.filter(item => item.seasonal)
.map(item => item.name + "with imported beans");
console.log(seasonalImported);


console.log(coffeeMenu)
console.table(coffeeMenu)
