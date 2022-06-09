//jshint esversion:8
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitsDB');

// We have to create a schema first // for Fruits
  const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
  });

  // We have to create a schema first // for People
  const personSchema = new mongoose.Schema({
    name: String,
    age: Number
  });

// Creating model + collection. The Mongo will Always drop the Capital letter in "Fruit"
// and makes it a plural // "fruits"
const Fruit = mongoose.model('Fruit', fruitSchema);

// creating new document
const fruit = new Fruit({
  name: "apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});

const kiwi = new Fruit({
  name: "kiwi",
  score: 10,
  review: "The best fruit!"
});

const orange = new Fruit({
  name: "orange",
  score: 4,
  review: "Too sour for me"
});

const annanas = new Fruit({
  name: "annanas",
  score: 5,
  review: "Too sweet"
});

// adding multiple documents into the collection from above
await Fruit.insertMany([kiwi, orange, annanas], function (err) {
  if (err){
    console.log(err);
  } else {
    console.log("Sucessfully saved all the fruits to fruitsDB");
  }
  });

// we have to save a document to collection with
// fruit.save();
// or

await fruit.save();

// Let's console log errs if any else log fruits
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
// Let's list each name of the element in collection
fruits.forEach(fruit => console.log(fruit.name));
    // console.log(fruits);
  }
});


const Person = mongoose.model('Person', personSchema);

const person = new Person({
  name: "Lucas",
  age: 45
});

await person.save();

// const fruits = await Fruit.find();

// console.log(person);
}
