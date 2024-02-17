// Задача 1: Вивести стовпець елементів масиву, які більше 3-х, але менше 10
const mass = [1, 2, 5, 9, 4, 13, 4, 10];
mass.forEach((num) => {
  if (num > 3 && num < 10) {
    console.log(num);
  }
});

// Задача 2: Перевірити чи є в масиві елемент зі значенням, рівним 4
if (mass.includes(4)) {
  console.log("Наявний!");
}

// Задача 3: Знайти середнє арифметичне елементів масиву
const average = mass.reduce((sum, num) => sum + num, 0) / mass.length;
console.log(average);

// Задача 4: Знайти сумарну кількість символів у всіх стрічках всередині масиву разом взятих
const words = ["parrot", "bull", "bear", "monkey"];
const totalCharacters = words.reduce((sum, word) => sum + word.length, 0);
console.log(totalCharacters);

// Задача 5: Відфільтрувати  масив, залишивши лише стрічки в новому масиві
const filteredMass = mass.filter((item) => typeof item === "string");
console.log(filteredMass);
