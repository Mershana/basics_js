// Автоматическое преобразование типов данных

// Задача 1
// Не запуская код, определите, что выведется на экран:
// let a = '5' + '2';
// alert(a); выведет 52(потому что два числа в кавычках и программа воспронимает как строки эти числа)


// Задача 2
// Не запуская код, определите, что выведется на экран:
// let a = '5' + 2;
// alert(a); выведет 52(потому что к 5 - которая является строчной прибавится двойка, только она не будет складываться с 5 (чтобы получилось 7) ибо пять это строка - находится в кавычках )


// Задача 3
// Не запуская код, определите, что выведется на экран:
// let a = 5 + '2';
// alert(a); будет 52 (т.к двойка явлется строкой и к ней просто прибавляется 5)


// Задача 4
// Не запуская код, определите, что выведется на экран:
// let a = 5 + 2;
// alert(a); выведет семь, т.к оба числа( и не у одной из них нет кавычек)


// Задача 5
// Не запуская код, определите, что выведется на экран:
// let a = '5' * '2';
// alert(a); здесь уже происходит умножение (поэтому получается = 10), (символ + дает прибавку к числу, это можно увидеть в предыдущих заданиях)

// Задача 6
// Не запуская код, определите, что выведется на экран:
// let a = '5' - '2';
// alert(a); будет три, т.к это вычетание

// Задача 7
// Не запуская код, определите, что выведется на экран:
// let a = '5' / '2';
// alert(a); будет 2.5 - ведь это деление, которое воспринимает программа строки как числа.

// Задача 8
// Не запуская код, определите, что выведется на экран:
// let a = '5' % '2'; специальный оператор % которого можно найти остаток от деления одного числа на другое:
// alert(a); будет 1 т.к происходит деление и находит остаток(программа принимает их за числа, а не за строкк)

// Задача 9
// let a = '5s' * '2';
// alert(a); если хотя бы одна буква - JavaScript посчитает операцию некорректной и сделает ее результатом значение NaN:

// Задача 10
// Не запуская код, определите, что выведется на экран:
// let a = '5s' + '2';
// alert(a); сложение просто складывает строки вместе таким образом консоль покажет 5s2

// Задача 11
// Не запуская код, определите, что выведется на экран:
// let a = (-'5') + (-'2');
// alert(a); т.к две строки находится в круглых скобках, js воспронимает их как числа и делает сложение что дает нам в сумме = -7

// Задача 12
// Не запуская код, определите, что выведется на экран:
// let a = '5' * 1 + '2' * 1;
// alert(a); т.к идет умножение строки в окончательно результате выполняет сложение, что даст нам в сумме 7

// Задача 13
// Не запуская код, определите, что выведется на экран:
// let a = '5' * '1' + '2' * '1';
// alert(a); получится 7 ибо сначала 5*1+2*1= 7


// Задача 14
// Не запуская код, определите, что выведется на экран:
// let a = '' + 3 + 1;
// alert(a);  получится 31, т.к числа приписываются .