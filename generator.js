// const countTo10 = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
//   yield 6;
//   yield 7;
//   yield 8;
//   yield 9;
//   yield 10;
// };

// const generatorObj = countTo10();
// console.log(generatorObj);

// for (const num of generatorObj) {
//   console.log(num);
// }
// ex2:
// const randomNumber = function* () {
//   while (true) {
//     yield Math.random();
//   }
// };

// const generatorObj = randomNumber();
// for (let num = 0; num <= 10; num++) {
//   console.log(generatorObj.next());
// }

// // ex3:

// const randomAmountFromRange = function* (amount, min, max) {
//   for (let i = 0; i < amount; i++) {
//     yield Math.floor(Math.random() * (max - min + 1) + min);
//   }
// };
// const generatorObj = randomAmountFromRange(3, 10, 20);
// for (let i of generatorObj) {
//   console.log(i);
// }

// ex4:

const getRandomNumber = function* () {
  for (i = 0; i < 5; i++) {
    yield Math.floor(Math.random() * 10);
  }
};
const NumbrerGeneratorObj = getRandomNumber();

let groceries = ["Avocado", "Cookies", "Milk", "Soap", "Soda"];
const groceryList = function* () {
  for (let i = 0; i < 5; i++) {
    let element = Math.floor(Math.random() * groceries.length);
    let removedItem = groceries.splice(groceries[element], 1);
    yield removedItem;
  }
};
const groceryGeneratorObj = groceryList();

for (let i = 0; i < 5; i++) {
  console.log(
    NumbrerGeneratorObj.next().value,
    groceryGeneratorObj.next().value
  );
}
