//jshint esversion:8
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitsDB');

// We have to create a schema first // for Fruits
  const fruitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true,"The name is required"]
    },
    rating: {
    type: Number,
    min: 1,
    max: 10 },
    review: String
  });

// Creating model + collection. The Mongo will Always drop the Capital letter in "Fruit"
// and makes it a plural // "fruits"
const Fruit = mongoose.model('Fruit', fruitSchema);

// creating new document
const fruit = new Fruit({
  name: "peach",
  rating: 10,
  review: "LOVELY!"
});

fruit.save();

// Let's console log errs if any else log fruits
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {

// Let's list each name of the element in collection
fruits.forEach(fruit => console.log(fruit.name));
    // console.log(fruits);
  }

// Let's close the database connection
  mongoose.connection.close();
  });

}
