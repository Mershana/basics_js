// Преобразование к логическому типу в JavaScript
// Давайте теперь изучим преобразование других типов данных к логическому. Такое преобразование осуществляется с помощью функции Boolean. Вот значения, которые при приведению к логическому типу дают false:

// console.log(Boolean(0));          // false
// console.log(Boolean(-0));         // false
// console.log(Boolean(+0));         // false
// console.log(Boolean(null));       // false
// console.log(Boolean(false));      // false
// console.log(Boolean(NaN));        // false
// console.log(Boolean(undefined));  // false
// console.log(Boolean(''));         // false

// Все остальные значения в JavaScript (в других языках бывает не так) дают true. Вот значения, приводящиеся к true, но могущие вызвать у вас сомнения:

// console.log(Boolean(-1));          // true
// console.log(Boolean(Infinity));    // true
// console.log(Boolean(-Infinity));   // true

// Следующие значения являются строками, так как взяты в кавычки, и также приводятся к true:
// console.log(Boolean('0'));         // true
// console.log(Boolean('false'));     // true
// console.log(Boolean('NaN'));       // true
// console.log(Boolean('null'));      // true
// console.log(Boolean('undefined')); // true

// Задача 1
// let test = Boolean(3);
// alert(test); // false

// Задача 2
// let test = Boolean(0);
// alert(test); //false

// Задача 3
// let test = Boolean(-1);
// alert(test); //true

// Задача 4
// let test = Boolean(-0);
// alert(test);  //false

// Задача 5
// let test = Boolean(+0);
// alert(test); false

//Задача 6
// let test = Boolean('abc');
// alert(test); // true

// Задача 7
// let test = Boolean('');
// alert(test); //false

// Задача 8
// let test = Boolean('0');
// alert(test); //true

// Задача 9
// let test = Boolean(true);
// alert(test); //true

// // Задача 10
// let test = Boolean(false);
// alert(test); //false

// Задача 11
// let test = Boolean('true');
// alert(test); true

// Задача 12
// let test = Boolean('false');
// alert(test); //true

// Задача 13
// let test = Boolean(null);
// alert(test); false

// Задача 14
// let test = Boolean('null');
// alert(test); //true

// Задача 15
// let test = Boolean(undefined);
// alert(test) //false

//Задача 16
// let test = Boolean('undefined');
// alert(test); //true

//Задача 17
// let test = Boolean(NaN);
// alert(test); //false

// Задача 18
// let test = Boolean('NaN');
// alert(test); //true

// Задача 19
// let test = Boolean(3 * 'abc');
// alert(test); //false

// Задача 20
// let test = Boolean(Infinity);
// alert(test); true

// Задача 21
// let test = Boolean(1 / 0);
// alert(test); true