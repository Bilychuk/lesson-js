// task 1

// Завдання 16
//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

const table  = document.querySelector("#productTable");
const div = document.querySelector("#productDetails");

table.addEventListener("click", (event) => {
    if (event.target.nodeName !== "TD"){
        return
    } 

    const parent = event.target.parentNode;
    const product = parent.firstElementChild.textContent;
    const price = parent.lastElementChild.textContent;

    div.textContent = `Ви вибрали ${product} за ${price}`;
});