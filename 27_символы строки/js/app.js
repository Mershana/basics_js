// Задача 1
// Дана строка 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
// let srt = 'abcde'
// alert(srt[0]);
// alert(srt[2]);
// alert(srt[4]);

// Задача 2
// Дана переменная со строкой 'abcde'. Обращаясь к отдельным символам этой строки запишите в новую переменную символы этой строки в обратном порядке, то есть 'edcba'.

// let srt = 'abcde';
// let result = srt[4] + srt[3] + srt[2] + srt[1] + srt[0]
// let result1 = srt[3]
// let result2 = srt[2]
// let result3 = srt[1]
// let result4 = srt[0]

// console.log(result)

// console.log(srt.length)
// for (с чего начинается цикл , до каких пор работает цикл , с каким шагом рабоает цикл) {тело цикла}

// for (let i = 0; srt.length; i++) {
// 	alert(i)
// }

// console.log(result)
// // alert(str[result])

// console.log(srt[0])


// alert(srt[0]);
// alert(srt[1]);
// alert(srt[2]);
// alert(srt[3]);
// alert(srt[4]);

// alert(srt[4]);
// alert(srt[3]);
// alert(srt[2]);
// alert(srt[1]);
// alert(srt[0]);


// Задача 3⋕
// Дана переменная str со строкой 'abcde' и переменная num с номером символа. Выведите на экран символ, номер которого хранится в переменной num.

let str = 'abcde'
let num = 3;
alert(str[num])
// выведет символ d

// Неизменяемость строк
// Символы строк можно читать, но нельзя изменять. Следующий пример кода выдаст ошибку (в строгом режиме):

let str = 'abcde';
str[0] = '!';