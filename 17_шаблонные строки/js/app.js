// Шаблонные строки в JavaScript
// Существует специальный тип кавычек - косые:

// let str = `abc`;
// alert(str); // выведет 'abc'
// В косых кавычках можно выполнять вставку переменных. Для этого имя переменной нужно написать в конструкции ${}.

// Давайте посмотрим на примере. Пусть мы хотим выполнить сложение строк и переменной:

// let str = 'xxx';
// let txt = 'aaa ' + str + ' bbb';
// Этот код можно переписать следующим образом:

// let str = 'xxx';
// let txt = `aaa ${str} bbb`;

// Задача 1
// Перепишите следующий код через вставку переменных:

// let str1 = 'xxx';
// let str2 = 'yyy';
// let txt  = 'aaa ' + str1 + ' bbb ' + str2 + ' ccc';

let str1 = 'xxx';
let str2 = 'yyy';
let txt  = `aaa  ${str1}  ' bbb '  ${str2}   ccc`;
// выведетaaa  xxx  ' bbb '  yyy   ccc
alert(txt);

// Многострочность
// В JavaScript строках, созданных через одинарные или двойные кавычки, не допустим перенос строки. То есть вот так не будет работать:

// let str = 'abc
// def'; // так не будет работать
// И так не будет работать:

// let str = "abc
// def"; // так не будет работать
// А вот косые кавычки специально предназначены для создания многострочных строк:

// let str = `abc
// def`; // так будет работать

let str = `'a'
'b'
'c'`
alert(str)
// каждую букву переносит с новой строке