'use strict';

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


function sumTotal(min, max) {
    let total = 0;
    for (let i = max; i >= min; i--) {
        console.log(i);
        if (i % 2 === 0) {
            total += i;
        }
    }
    return total;
}
console.log(sumTotal(5, 15));

