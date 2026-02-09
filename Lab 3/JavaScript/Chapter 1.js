let admin;
let name = "John";
admin = name;
alert(admin);
let ourPlanetName;
let currentUser;

const BIRTHDAY = "05.09.2007";
const age = "Age=BIRTHDAY";

let name1 = "Ilya";

alert( `hello ${1}` ); 

alert( `hello ${"name"}` ); 

alert( `hello ${name1}` ); 


let userName = prompt("What is your name?");
alert( "Your name is " + userName );



let a = 1, b = 1;

let c = ++a; // 2 a = 2
let d = b++; // 1 b = 2



let a1 = 2;

let x = 1 + (a1 *= 2); // x = 5 a = 4



//"" + 1 + 0 = "10" 
//"" - 1 + 0 = -1 
//true + false = 1
/*
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" 
"  -9  " - 5 = -14 
null + 1 = 1 
undefined + 1 = NaN 
" \t \n" - 2 = -2 
*/

let ab = +prompt("Первое число?", 1);
let bb = +prompt("Второе число?", 2);

alert(ab + bb);







/* 
5 > 4 True
"ананас" > "яблоко" False
"2" > "12" True 
undefined == null True
undefined === null False 
null == "\n0\n" False
null === +"\n0\n" False
*/


if ("0") {
    alert( 'Привет' );
}

if (prompt("Какое \"официальное\" название JavaScript?") == "ECMAScript") {
    alert("True")
}
else{
    alert("Не знаете? “ECMAScript”!")
}


value = prompt()

if (value > 0) {
    alert(1)
}
else if (value == 0){
    alert(0)
}
else{
    alert(-1);
}


let result;
result = ( a + b < 4) ? "Small" : "Medium";

let message
message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            '';


alert( null || 2 || undefined ); // 2

alert( alert(1) || 2 || alert(3) ); // 2

alert( 1 && null && 2 ); //  null

alert( alert(1) && alert(2) ); // undefined

alert( null || 2 && 3 || 4 ); // 3

let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

alert(value); // 30

if (age >= 14 && age <= 90) {
    alert(age);
}

if (age < 14 || age > 90){
    alert(age);
}
if (-1 || 0) alert( 'first' );//Yes
if (-1 && 0) alert( 'second' ); //NO
if (null || -1 && 1) alert( 'third' ); // Yes


let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass === 'Я главный') {
        alert( 'Здравствуйте!' );
    } else if (pass === '' || pass === null) {
        alert( 'Отменено' );
    } else {
        alert( 'Неверный пароль' );
    }

} else if (userName === '' || userName === null) {
    alert( 'Отменено' );
} else {
    alert( "Я вас не знаю" );
}


alert(undefined ?? NaN ?? null ?? "" ?? " "); // NaN

let city = null;

city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

alert(city); // Berlin



let num1 = 10,
    num2 = 20,
    result1;
result ??= num1 ?? num2;

let i = 3;

while (i) {
    alert( i-- );
} // i = 0

let i = 0;
while (i++ < 5) alert( i ); // till 5

let i = 0;
while (++i < 5) alert( i ); // till 4

for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i ); // 4



for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert( i );
    }
}



let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}


let num;

do {
    num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);



let n = 10;

nextPrime:
    for (let i = 2; i <= n; i++) { 

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime; 
        }

        alert( i );
    }


if(browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}


const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;

    case 1:
        alert('Вы ввели число 1');
        break;
    
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}



function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}


function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
} 
// are not  the same

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}


function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}



function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n >= 1 && n % 1 == 0) {
    alert( pow(x, n) );
} else {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
}


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);






