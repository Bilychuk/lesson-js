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
const STORAGE_KEY = "login-form"
const formLogin = document.querySelector(".login-form");
const buttonLogin = document.querySelector(".login-btn");

formLogin.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const email = formLogin.elements.email.value.trim();
    const password = formLogin.elements.password.value.trim();
    if (!email || !password) {
       iziToast.warning({
    title: 'Caution',
    message: 'Всі поля мають бути заповнені',
       });
        return;
    }

    if (email !== USER_DATA.email || password !== USER_DATA.password) {
    iziToast.warning({
    title: 'Caution',
    message: 'Не вірні дані',
    });
        return;
    } 
    const userData = { email, password}
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    buttonLogin.textContent = "Logout";
    
    formLogin.elements.email.setAttribute("readonly", true);
    formLogin.elements.password.setAttribute("readonly", true);
}