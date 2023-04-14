const items = [
  {
    description: "Shampoo",
    price: 99,
    quantity: 55,
  },

  {
    description: "Soap",
    price: 65,
    quantity: 33,
  },
];

function Item(description, price, quantity) {
  this.description = description;
  this.price = price;
  this.quantity = quantity;
}

const item1 = new Item("Conditioner", 125, 25);

const item2 = new Item("Lotion", 200, 10);

items.push(item1);
items.push(item2);
console.log(items);
