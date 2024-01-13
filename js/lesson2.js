'use strict';

// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
//Видаліть перший елемент масива та виведіть його в консоль
// Додайте 'Реп' та 'Реггі' на початок списку.

const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
const index = styles.indexOf('Блюз');
// styles[index] = 'Класика';
styles.splice(index, 1, 'Класика');
console.log(styles.shift());
styles.unshift('Реп', 'Реггі');
console.log(styles);
