const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['Janusz', 'Tadek', 'Karol', 'Tomek', 'Piotrek'];
const femaleNames = ['Anna', 'Bianka', 'Nikole', 'Anna', 'Emilia'];
const lastNames = ['Sokół', 'Kowalski', 'Nowak', 'Polański', 'Kijak'];

const randChoice = (arr) => {
  const info = Math.floor(Math.random() * arr.length);
  return arr[info];
}

const people = [];

for(i = 0; i < 20; i++) {
  const gender = randChoice(genders);
  const firstName = (gender == 'male') ? randChoice(maleNames) : randChoice(femaleNames);
  const lastName = randChoice(lastNames);
  const age = Math.floor(Math.random() * 60) + 18;

  const person = {
  gender,
  firstName,
  lastName,
  age,
};

  people.push(person)
};

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});