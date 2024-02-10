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

const fatherList = document.querySelector(".statList");
const resultButton = document.querySelector("#resultButton");
const resultSection = document.querySelector("#resultSection");
let sumValue = 0;

fatherList.addEventListener("click", (event) => {
    if (event.target.nodeName !== "BUTTON") return
    sumValue += Number(event.target.dataset.number);
})

resultButton.addEventListener("click", (event) => {
    resultSection.textContent = `Загальна кількість ${sumValue}`;
    sumValue = 0;
})