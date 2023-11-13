const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

const greeting = alert("Hey! Happy to serve your pizza. On our menu we have " + vegetarian + ", " + hawaiian + ", " + pepperoni + ".");
const orderName = prompt("Enter the name of the pizza you want.");
const orderQuantity = parseInt(prompt("How many of " + orderName + " do you want?"));


console.log(orderName)
if (orderName.toUpperCase() === vegetarian.toUpperCase() || orderName.toUpperCase() === hawaiian.toUpperCase() || orderName.toUpperCase() === pepperoni.toUpperCase()) {
    if (orderQuantity <= 2) {
        alert("Great, I'll get started on your " + orderName + " right away, it will cost you " + (orderQuantity * pizzaPrice) + "kr. The pizzas will take 10 minutes.")
    } if (orderQuantity >= 3 && orderQuantity <= 5) {
        alert("Great, I'll get started on your " + orderName + " right away, it will cost you " + (orderQuantity * pizzaPrice) + "kr. The pizzas will take 15 minutes.")
    } if (orderQuantity >= 6) {
        alert("Great, I'll get started on your " + orderName + " right away, it will cost you " + (orderQuantity * pizzaPrice) + "kr. The pizzas will take 20 minutes.")
    }
} else {
    alert("Sorry, we don't have that pizza on our menu.");
}



