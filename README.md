Workshop: Coffee Menu ☕
UNIT 2
 
 Overview
You have just been hired at a famous coffee chain as a web developer. Your first assignment is to clean up the menu data and filter it through specific guidelines (prompts two through seven).

Complete the following coding challenges using what you know about debugging and higher-order functions. Some of the questions rely on previous answers, so do your best to complete prompts two through seven in order.

Note: Be sure to console.log and console.table throughout the workshop to check your work.

Getting Started
Create a new repository using this starter code:
// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
    {
        name: "cappuccino",
        price: "8",
        seasonal: false,
    },
    {
        name: espresso,
        price: 5,
        seasonal: false,
    }
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: affogato,
        price: "9",
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: "6",
        seasonal: false,
    }
    {
        name: americano,
        price: 7,
        seasonal: false,
    }
    {
        name: "iced coffee",
        price: "6",
        seasonal: false,
    },
    {
        name: frappe,
        price: "8",
        seasonal: false,
    }
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    }
]

module.exports = coffeeMenu
Open up the repository through VS Code.
Project Requirements
1. Clean the coffee_data.js file.

All prices should be numbers.
All items should be strings.
Objects and properties should have commas separating them.
Connect the coffee_data.js file to the index.js file.
2. Print an array of all the drinks on the menu.

3. Print an array of drinks that cost 5 and under.

4. Print an array of drinks that are priced at an even number.

5. Print the total if you were to order one of every drink.

6. Print an array with all the drinks that are seasonal.

7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

Finished? Submit your coffee_data.js file AND your index.js file for this workshop.

Note: It is important that you submit something before the next class session. Even if you are not done, submit your proof of progress before the next class begins.