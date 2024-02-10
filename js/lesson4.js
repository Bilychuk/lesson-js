// task 1

// Завдання 16
//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

// const table  = document.querySelector("#productTable");
// const div = document.querySelector("#productDetails");

// table.addEventListener("click", (event) => {
//     if (event.target.nodeName !== "TD"){
//         return
//     }

//     const parent = event.target.parentNode;
//     const product = parent.firstElementChild.textContent;
//     const price = parent.lastElementChild.textContent;

//     div.textContent = `Ви вибрали ${product} за ${price}`;
// });

//TODO:==============================================
/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення 
з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться 
сума значення, 
а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

// const fatherList = document.querySelector(".statList");
// const resultButton = document.querySelector("#resultButton");
// const resultSection = document.querySelector("#resultSection");
// let sumValue = 0;
// let counter = {};

// fatherList.addEventListener("click", (event) => {
//     if (event.target.nodeName !== "BUTTON") return
//     const buttonName = event.target.textContent;

//     sumValue += Number(event.target.dataset.number);
//     if (counter[buttonName]) {
//         counter[buttonName] ++
//     } else {
//         counter[buttonName] = 1;
//     }
// })

// resultButton.addEventListener("click", (event) => {
//     let markup = `Загальна кількість ${sumValue}<br>`;
//     for (const [key, value] of Object.entries(counter)) {
//         markup += `${key} натиснута ${value} разів<br>`;
//     }
//     resultSection.innerHTML = markup;
//     // resultSection.insertAdjacentHTML("beforeend", markup);
//     // markup = "";
//     sumValue = 0;
//     counter = {};
// })

// ЗАДАЧА 1

// Якщо імейл і пароль користувача збігаються, зберігай дані з форми при сабміті
// у локальне сховище і змінюй кнопку login на logout і роби поля введення
// недоступними для змін.

// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.

// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.

const USER_DATA = {
  email: "user@mail.com",
  password: "secret",
};
const STORAGE_KEY = "login-form";
const formLogin = document.querySelector(".login-form");
const buttonLogin = document.querySelector(".login-btn");

const saveData = localStorage.getItem(STORAGE_KEY);
if (saveData) {
  const parseData = JSON.parse(saveData);
  formLogin.email.value = parseData.email || "";
  formLogin.password.value = parseData.password || "";
  buttonLogin.textContent = "Logout";

  formLogin.email.setAttribute("readonly", true);
  formLogin.password.setAttribute("readonly", true);
}

formLogin.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  if (buttonLogin.textContent === "Logout") {
    localStorage.removeItem(STORAGE_KEY);
    formLogin.reset();

    buttonLogin.textContent = "Login";
    formLogin.elements.email.removeAttribute("readonly");
    formLogin.elements.password.removeAttribute("readonly");
    return;
  }

  const email = formLogin.elements.email.value.trim();
  const password = formLogin.elements.password.value.trim();
  if (!email || !password) {
    iziToast.warning({
      title: "Caution",
      message: "Всі поля мають бути заповнені",
    });
    return;
  }

  if (email !== USER_DATA.email || password !== USER_DATA.password) {
    iziToast.warning({
      title: "Caution",
      message: "Не вірні дані",
    });
    return;
  }
  const userData = { email, password };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  buttonLogin.textContent = "Logout";

  formLogin.elements.email.setAttribute("readonly", true);
  formLogin.elements.password.setAttribute("readonly", true);
}

// Task1;
// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// Task2;
// Створити червоний квадрат розміром 50 на 50 рх
// Додати кнопку "Зменшити", яка робить квадрат менше на 10 пікселів
// Додати кнопку "Збільшити", яка робить його більше на 10 пікселів.

// Task3;
// <!-- ЗАДАЧА 6 -->
//     <!-- <div>
//       <p class="taskTitle">ЗАДАЧА 6</p>
//       <ul class="list">
//         <li class="listItem">1</li>
//         <li class="listItem">4</li>
//         <li class="listItem">8</li>
//         <li class="listItem">16</li>
//         <li class="listItem">20</li>
//         <li class="listItem">30</li>
//       </ul>
//       <button id="double">Подвоїти</button>
//     </div> -->
//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

// Task4
// <!-- ЗАДАЧА 7 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 7</p>
//       <div class="outerCircle">
//         <div class="innerCircle"></div>
//       </div>
//     </div>
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
*/

// Task5

// <!-- ЗАДАЧА 11 -->
//     <!-- <p class="taskTitle">ЗАДАЧА 11</p>
//     <input class="contactsFilter" type="text" />
//     <ul class="contacts">
//       <li class="contact">Peter Miller</li>
//       <li class="contact">John Carter</li>
//       <li class="contact">Amanda Diaz</li>
//       <li class="contact">Brad Sanders</li>
//       <li class="contact">Devis Brooks</li>
//       <li class="contact">Robert Morgan</li>
//     </ul> -->
//TODO:==============================================
/*
Завдання 11
Наведено список людей. Зроби фільтр на ім'я/прізвище.
*/
