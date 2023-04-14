# Organizing our JavaScript code

-incredibly forgiving
-4 patterns to organize your code

## Patterns in organizing our JS code

1. Object Constructors
2. Factory Functions & Module Pattern
3. Classes
4. ES6 Modules

## Other important JS Concept

1. Closure
2. Prototypes
3. IIFE - Immediately Invoked Function Expression

## Lesson Objective

1. How to write an object constructor and instantiate the object.
2. Describe what a prototype is and how it can be used.
3. Explain prototypal inheritance.
4. Understand the basic do's and dont's of prototypal inheritance
5. Explain what Object.create
6. Explain what the "this" keyword mean.

## When naming Object Constructor Function the name should start with capital letters. You do not need to make it a verb./

- For Example. See below:
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
