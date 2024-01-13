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

// const names = ["Alla", "Petro", "Max", "Olena", "Boris"];
// function add(name) {
//   if (names.includes(name)) {
//     return "такий користувач вже є"
//   }
//   names.push(name);
//   return names;
// }
// // console.log(add("Petro"));

// function remove(name) {
//   const index = names.indexOf(name);
//   if ( index === -1) {
//     console.log("користувач не знайдений")
//   } else {
//     names.splice(index, 1)
//      }
//   return names;
// }
// //
// function update(oldName, newName) {
//    const index = names.indexOf(oldName);
//   if ( index === -1) {
//     console.log("користувач не знайдений")
//   } else {
//     names.splice(index, 1, newName)
//      }
//   return names;
//   }
// console.log(update("FG", "Oleg"));

//4. Створіть об'єкт calculator з трьомя методами
//read(a, b) - приймає два аргумента і зберігає їх
//як властивості об'єкта
//sum() повертає сумму збереженних значень (з перевіркою на наявніст властивостей в об'єкті)
//mult() перемножає збереженні значення і повертає результат

// const calculator = {
//   read(a, b) {
//     this.value1 = a;
//     this.value2 = b;
//   },
//   sum() {
//     if (!this.value1 || !this.value2) {
//       return "Values don't exist"
//     }
//     return this.value1 + this.value2
//   },
//   mult() {
//     if (!this.value1 || !this.value2) {
//       return "Values don't exist"
//     }
//     return this.value1 * this.value2
//   }
//   }


// calculator.read(1, 2)
// console.log(calculator)
// console.log(calculator.sum())
// console.log(calculator.mult())

//6. Напишіть скрипт керування особистим кабінетом інтернет банка
//Є об'єкт account в якому необхідно реалізувати
//методи для работи з балансом та історією транзакцій

//Типів транзакцій всього два.
//Можна покласти або зняти гроші з рахунка
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

//Кожна транзакція це об'єкт з властивостями id, type, amount

const account = {
  //поточний баланс рахунка
  balance: 0,

  //Історія транзакцій
  transactions: [],

  //Метод створює і повертає об'єкт транзакцій
  //Приймає сумму і тип транзакцій
  createTransaction(type, amount) {
    return {
      type,
      amount,
    };
  },
  //Метод відповідає за додавання сумми к балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає його в історію транзакцій
  deposit(amount) {
    this.balance += amount;
    const newTransaction = this.createTransaction(Transaction.DEPOSIT, amount);
    // newTransaction.id = Math.random();
    // this.transactions.push(newTransaction);
    this.transactions.push({ ...newTransaction, id: Math.random() });
   },
//Метод відповідає за зняття сумми з балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає йогого в історю транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку
  withdraw(amount) {
    if (amount > this.balance) {
      return console.log("недостатньо коштів на рахунку");
    }
    this.balance -= amount;
    const newTransaction = this.createTransaction(Transaction.WITHDRAW, amount);
    this.transactions.push({ ...newTransaction, id: Math.random() });
  
    },
//Метод повертає поточний баланс
  getBalance() {  },
//Метод шукає і повертає об'єкт транзакціи по id
  getTransactionDetails(id) {  },
//Метод повертає кількіств коштів вказаного типу
  //транзакціи зі всієї історії транзакцій
  getTransactionType(type) {}
}

account.deposit(250);
account.deposit(450);
account.withdraw(100);
console.log(account);


