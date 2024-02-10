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
let counter = {};

fatherList.addEventListener("click", (event) => {
    if (event.target.nodeName !== "BUTTON") return
    const buttonName = event.target.textContent;
    
    sumValue += Number(event.target.dataset.number);
    if (counter[buttonName]) {
        counter[buttonName] ++
    } else {
        counter[buttonName] = 1;
    }
})

resultButton.addEventListener("click", (event) => {
    let markup = `Загальна кількість ${sumValue}<br>`;
    for (const [key, value] of Object.entries(counter)) {
        markup += `${key} натиснута ${value} разів<br>`;
    }
    resultSection.innerHTML = markup;
    // resultSection.insertAdjacentHTML("beforeend", markup);
    // markup = "";
    sumValue = 0;
    counter = {};
})


