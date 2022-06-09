//jshint esversion:8
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');


  const kittySchema = new mongoose.Schema({
    name: String,
    age: Number
  });

  // NOTE: methods must be added to the schema before compiling it with mongoose.model()
  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

const Kitten = mongoose.model('Kitten', kittySchema);

// creating new document
const silence = new Kitten({ name: 'Silence', age: 2 });
console.log(silence.name + ' ' + silence.age); // 'Silence'

// creating new document
const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

await fluffy.save();
fluffy.speak();

const kittens = await Kitten.find();
await Kitten.find({ name: /^fluff/ });

}
