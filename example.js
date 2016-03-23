var pizza = {
  size: 12,
  crust: "thin",
  topings: [
      "tomatoes",
      "peperoni",
      "spinach",
      "mushrooms"
    ]
};


console.log("I want to order a pizza: ");
console.log("of size: " + pizza.size);
console.log("with crust: " + pizza.crust);
console.log("and topings: ");
for(var index = 0; index < pizza.topings.length; index++) {
  console.log( pizza.topings[index] );
}
