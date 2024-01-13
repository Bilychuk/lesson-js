"use strict";

// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
//Видаліть перший елемент масива та виведіть його в консоль
// Додайте 'Реп' та 'Реггі' на початок списку.

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// const index = styles.indexOf('Блюз');
// // styles[index] = 'Класика';
// styles.splice(index, 1, 'Класика');
// console.log(styles.shift());
// styles.unshift('Реп', 'Реггі');
// console.log(styles);

// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLog(arrayNew) {
//     const login = prompt("Enter your login!");
//         if (arrayNew.includes(login)) {
//             console.log("Доступ дозволено");
//             return;
//         }
//     console.log("Користувач не знайден")

// }

// checkLog(logins);

// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1}: ${array[i]}`);
//   }
// }

// logItems(logins);



//Напишіть функції для роботи з масивом
//add(name) додає ім'я до кінця колекції
//remove(name) видаляє ім'я із колекції
//update(oldName, newName) змінює ім'я на нове

const names = ["Alla", "Petro", "Max", "Olena", "Boris"];
function add(name) {
  if (names.includes(name)) {
    return "такий користувач вже є"
  }
  names.push(name);
  return names;
}
// console.log(add("Petro"));

function remove(name) {
  const index = names.indexOf(name);
  if ( index === -1) {
    console.log("користувач не знайдений")
  } else {
    names.splice(index, 1)
     }
  return names; 
}
// 
function update(oldName, newName) {
   const index = names.indexOf(oldName);
  if ( index === -1) {
    console.log("користувач не знайдений")
  } else {
    names.splice(index, 1, newName)
     }
  return names; 
  }
console.log(update("FG", "Oleg"));





