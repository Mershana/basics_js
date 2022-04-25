'use strict'

// Поиск ошибок в коде
// В следующих задачах некоторый программист написал код и, возможно, допустил в нем ошибки. Вы должны проверить, делает ли код то, что описано. Если код работает некорректно, вы должны исправить ошибки.

// Задача 1
// Код должен находить сумму чисел:
// // let num1 = 1;
// // let num2 = 2;
// // console.log('сумма: ' + num1 + num2);
// // Решение
// let num1 = 1;
// let num2 = 2;
// // ВАРИАНТ 1
// // alert(num1 + num2)
// // ВАРИАНТ 2
// console.log('сумма ' + (num1 + num2))
// // ВАРИАНТ 3
// // console.log(num1 + num2)

// Задача 2
// Код должен находить сумму чисел:
// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a + b + c);

// Задача 3
// ВАРИАНТ 1
// Код должен находить сумму цифр числа:
// let num = '123';
// let sum = num[0] + num[1] + num[2];
// console.log(Number(num[0]) + Number(num[1]) + Number(num[2]) );

// ВАРИАНТ 2
// let num = '123';
// let num1 = Number(num[0])
// let num2 = Number(num[1])
// let num3 = Number(num[2])
// let sum = Number(num[0]) + Number(num[1]) + Number(num[2]); //индекс
// console.log(sum);

// Задача 3
// Код должен вывести первую цифру числа:
// let num = 123;
// let num1 = Number(num.toString()[0])
// console.log(num1);

// Задача 4
// Код должен был вывести в консоль число 1, но выводит 0:
// let a = 0;
// console.log(++a); 1

// Задача 5
// Код должен вывести количество цифр в числе:
// let num = 123;
// console.log(String(num).length);

// Задача 6
// Код должен найти количество секунд в сутках:
// let a = 24  60 / 60;
// let a = 60 * 60 * 24
// let a = 24 * 60 * 60
// let a = 24 * (60 * 60)
// console.log(a);

// Задача 7
// Код должен вывести количество цифр в числе:
// let num = 123;
// let str = String(num);
// console.log(String(num).length);

// Задача 8
// Код должен вывести последнюю цифру числа:
// let num = '123';
// let str = String(num);
// console.log(str.length);

// Задача 9
// Код должен вывести последнюю цифру числа:
// let num = 123;
// // let str = num[2];
// // console.log(str);
// console.log(num.toString().split('2').pop());

// Задача 10
// Код должен вывести количество цифр в числе:
let num = 123;
let str = String(num);
console.log(str.lenght);