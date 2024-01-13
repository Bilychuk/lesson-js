"use strict";

// Task 1
//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

//const question = prompt("Яка офіційна назва JavaScript?");
// if (question === "ECMAScript") {
//   alert("Вірно!")
// } else {
//     alert("Не знаєте? ECMAScript!");
// }
//alert(question === "ECMAScript" ? "Вірно!" : "Не знаєте? ECMAScript!");

// Task 2

//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const question = prompt("enter number");
// let hours = Math.floor(question / 60);
// let minutes = question % 60;
// hours = String(hours).padStart(2, "0");
// minutes = String(minutes).padStart(2, "0");
// console.log(`${hours}:${minutes}`);

// Task3
//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел

// const max = 15;
// const min = 7;
// let total = 0;
// for (let i = max; i >= min; i--) {
// console.log(i);
// if (i % 2 === 0) {
// total += i;
// }
// }
// console.log(total);

// function sumTotal(min, max) {
//     let total = 0;
//     for (let i = max; i >= min; i--) {
//         console.log(i);
//         if (i % 2 === 0) {
//             total += i;
//         }
//     }
//     return total;
// }
// console.log(sumTotal(5, 15));

// task 4

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.



//task-5
//
//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

// const question = prompt("введіть логін");
// console.log(question);
// if (question === "Адмін") {
//   const password = prompt("введіть пароль");
//   // if (password === "Я головний") {
//   //   alert("Вітаю!")
//   // } else {
//   //   alert("Невірний пароль!")
//   // }
//   alert(password === "Я головний" ? "Вітаю!" : "Невірний пароль!");
// } else if (question === "" || question === null) {
//   alert("Скасовано");
// } else {
//   alert("Я вас не знаю");
// }


// task-6

// В змінній minuteValue є число від 0 до 59.
// Визначте до якої чверті години входить
// це число(в першу, другу, треттю чи четверту).

// const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);

// if (minuteValue >= 0 && minuteValue <= 15) {
//   console.log(`${minuteValue} - перша чверть`);
// } else if (minuteValue > 15 && minuteValue <= 30) {
//   console.log(`${minuteValue} - друга чверть`);
// } else if (minuteValue > 30 && minuteValue <= 45) {
//   console.log(`${minuteValue} - третя чверть`)
// } else {
//   console.log(`${minuteValue} - четверта чверть`)
// }

// if (minuteValue <= 15) {
//   console.log(`${minuteValue} - перша чверть`);
// } else if (minuteValue <= 30) {
//   console.log(`${minuteValue} - друга чверть`);
// } else if (minuteValue <= 45) {
//   console.log(`${minuteValue} - третя чверть`)
// } else {
//   console.log(`${minuteValue} - четверта чверть`)
// }

// function checkValue(minuteValue) {
//   if (minuteValue <= 15) {
//   return `${minuteValue} - перша чверть`;
//   }

//   if (minuteValue <= 30) {
//     return `${minuteValue} - друга чверть`;
//   }

//   if (minuteValue <= 45) {
//     return `${minuteValue} - третя чверть`;
//   }

//   return `${minuteValue} - четверта чверть`;

// }

// console.log(checkValue(Math.floor(Math.random() * (59 - 0) + 0)));

// task 6



