// Задача 1
// Дана переменная a со значением '10' и переменная b со значением '20'. Сложите данные переменные как числа.

// let a = Number('10')
// let b = Number('20')
// alert(a+b)


// Задача 2
// Не запуская код, определите, что выведется на экран:
// alert( Number('2') + Number('3') ); выведет 5
// let a = '2'
// let b = '3'
// alert(Number(a) + Number(b))

// Задача 3
// Не запуская код, определите, что выведется на экран:
// alert( 2 + Number('3') );
// выведет 5
// let a = 2;
// let b = 3;
// alert(a + Number('3'));

// Задача 4
// Не запуская код, определите, что выведется на экран:
// alert( '2' + Number('3') );
// выведет 23

// Альтернатива

// Задача 5
// Дан код:
let a = +'2';
let b = +'3';
alert(a + b); // выведет '5'
// С помощью описанного приема с плюсом исправьте приведенный код так, чтобы в переменные a и b присваивалось число, а не строка, ну и результатом, соответственно, было не '23', а 5.

// Не только цифры
// При попытке преобразовать строку, содержащую не только цифры, но и другие символы, функция Number вернет своим результатом значение NaN:

alert(Number('2s')); // выведет NaN
// Тот же эффект даст использование плюса:

alert(+'2s'); // выведет NaN