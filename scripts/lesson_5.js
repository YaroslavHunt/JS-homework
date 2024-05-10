function createHr(color='red', num=1){
    document.write(`<hr style="border: ${color} solid ${num}px">`)
}
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square = (a, b) => a * b;
console.log(square(2,3));
document.write(`<div>${square(2,3)}</div>`);
createHr();
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let squareOfACircle = (r) => 3.14 * (r * r);
console.log(squareOfACircle(3));
document.write(`<div>${squareOfACircle(3)}</div>`);
createHr();
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let squareOfACylinder = (h, r) => 2 * 3.14 * r * (h + r);
console.log(squareOfACylinder(2,3));
document.write(`<div>${squareOfACylinder(2,3)}</div>`);
createHr();
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement);
        document.write(`<div>${arrayElement}</div>`);
    }
    return array;
}
let arrOfEl = [1, `F`, 3, 6, `g`, true];
console.log(arr(arrOfEl));
createHr();
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createP = (text) => document.write(`<p>${text}</p>`);
let greeting = `Hello World!`;

createP(greeting);
createHr();
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUl = (text) => {
    return document.write(`<ul>
                            <li>${text}</li>
                            <li>${text}</li>
                            <li>${text}</li>
                           </ul>`);
}
let list = `listItem`;
createUl(list);
createHr();
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createMassUl = (text, numOf) => {
    document.write('<ul>');
    for (let i = 0; i < numOf; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>');

}
createMassUl(list, 5);
createHr();
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createPrimitiveUl(array) {
    if (Array.isArray(array)) {
        document.write('<ul>');
        for (const el of array) {
            if (el !== null && typeof el !== "object") {
                document.write(`<li>${el}</li>`);
            }
        }
        document.write('</ul>');
    } else {
        throw new Error('Argument is not aт array.')
    }
}
createPrimitiveUl(arrOfEl);
createHr();
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let createUsersKeys = (users) => {
    for (const user of users) {
        document.write('<div>');
        document.write(`ID: ${user.id} Name: ${user.name} Age: ${user.age}`);
        document.write('</div>');
        console.log(JSON.stringify(user))
    }
}
let users = [
    {
    id: 1,
    name: `Vasil`,
    age: 18
    },
    {
    id: 2,
    name: `Oleg`,
    age: 23
    },
    {
    id: 3,
    name: `Katia`,
    age: 19
    }
];
createUsersKeys(users);
createHr();
// - створити функцію яка повертає найменьше число з масиву
let smallestNumOfArr = (array) => {
    if (Array.isArray(array)) {
        for (const arrayElement of array) {
            if (typeof arrayElement === "number") {
                let min = array[0];
                for (let i = 0; i < array.length; i++) {
                    if (array[i] < min) {
                        min = array[i];
                    }
                }
                return min;
            }
        }
    } else {
        throw new Error('Argument is not aт array.')
    }
}
let numbers = [1,2,10];
console.log(smallestNumOfArr(numbers));
document.write(smallestNumOfArr(numbers));
createHr();
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let sumNumsOfArr = (array) => {
    if (Array.isArray(array)) {
        for (const arrayElement of array) {
            if (!isNaN(arrayElement)) {
                let sum = 0;
                for (let i = 0; i < array.length; i++) {
                    sum += array[i];
                }
                return sum;
            }
        }
    } else {
        throw new Error('Argument is not aт array.')
    }
}
console.log(sumNumsOfArr(numbers));
document.write(sumNumsOfArr(numbers));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    if (Array.isArray(arr)) {
        for (const arrElement of arr) {
            if (!isNaN(arrElement)) {
                if (arr.length > index1 && arr.length > index2) {
                    let temp = arr[index1];
                    arr[index1] = arr[index2];
                    arr[index2] = temp;
                } else {
                    console.log(`Invalid indices provided.`)
                }
                return arr;
            }
        }
    } else {
        throw new Error('Argument is not aт array.')
    }
}
console.log(swap([11,22,33,44],0,1));
document.write(swap([11,22,33,44],0,1));
createHr();
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    if (!isNaN(sumUAH) && Array.isArray(currencyValues) && typeof exchangeCurrency === 'string') {
        for (const item of currencyValues) {
            if (typeof item === 'object' && item !== null) {
                let currencyValue = 0;
                for (const exCurr of currencyValues) {
                    if (exchangeCurrency === exCurr.currency) {
                        currencyValue = exCurr.value;
                    }
                }
                return sumUAH / currencyValue;
            }
        }
    } else {
        throw new Error('Incorrect arguments.');
    }
}
console.log(exchange(10000,
    [{currency:'USD',value:40},{currency:'EUR',value:42}],
    'USD'));
document.write(exchange(10000,
    [{currency:'USD',value:40},{currency:'EUR',value:42}],
    'USD'))