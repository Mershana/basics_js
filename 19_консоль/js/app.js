// Давайте для примера что-нибудь выведем в консоль:

// console.log(123);
// А теперь выведем значение переменной:

// let num = 123;
// console.log(num);
// Можно вывести несколько переменных по очереди:

// let num1 = 123;
// let num2 = 456;

// console.log(num1);
// console.log(num2);
// Можно вывести несколько переменных с помощью одной команды, написав эти переменные через запятую:

// let num1 = 123;
// let num2 = 456;
// console.log(num1, num2);

// Задача 1
// Дана переменная. Выведите в консоль ее значение.
// let num1 = 456;
// console.log(num1)

// Задача 2
// Даны три переменные. Выведите в консоль их значения.
// let num1 = 456;
// let num2 = 789;
// let num3 = 123;
// console.log(num1, num2, num3)

// или так 
// let num1 = 456;
// let num2 = 789;
// let num3 = 123;

// console.log(num1)
// console.log(num2)
// console.log(num3)

// Тип данных в консоли
// В консоли разным цветом выводятся строки и числа. Это часто помогает найти ошибки в программах.

// Давайте выведем рядом число и строку, чтобы можно было увидеть разницу в цвете:

// Типы данных
// Стандарт ECMAScript определяет 8 типов:

// 6 типов данных являющихся примитивами:
// Undefined (Неопределённый тип)  : typeof instance === "undefined"
// Boolean (Булев, Логический тип) : typeof instance === "boolean"
// Number (Число) : typeof instance === "number"
// String (Строка) : typeof instance === "string"
// BigInt  : typeof instance === "bigint"
// Symbol (в ECMAScript 6)  : typeof instance === "symbol"
// Null (Null тип ) : typeof instance === "object". Специальный примитив, используемый не только для данных но и в качестве указателя на финальную точку в Цепочке Прототипов;
// Object (Объект) : typeof instance === "object". Простая структура, используемая не только для хранения данных, но и для создания других структур, где любая структура создаётся с использованием ключевого слова new: new Object, new Array, new Map (en-US), new Set, new WeakMap, new WeakSet, new Date и множество других структур;

console.log(123);
console.log('123')
console.log(typeof null)
console.log(typeof 'null')
console.log(null)

													// Ошибки в консоли

// Задача 4
// Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется в консоли. Определите, в какой строке кода случилась ошибка.

alert(eee); // Uncaught ReferenceError: eee is not defined

// alert(.); //Uncaught SyntaxError: Unexpected token '.' (at app.js:70:7)