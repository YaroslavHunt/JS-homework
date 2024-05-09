// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    return a * b;
}
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function squareOfACircle(r) {
    const PI = 3.14;
    return PI * (r * r);
}
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareOfACylinder(h, r) {
    const PI = 3.14;
    return 2 * PI * r * (h + r);
}
// - створити функцію яка приймає масив та виводить кожен його елемент
function arr(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
        document.write(arrayElement);
    }
}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP(text) {
    return document.write(`<p>${text}</p>`);
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl(text) {
    return document.write(`<ul>
                            <li>${text}</li>
                            <li>${text}</li>
                            <li>${text}</li>
                           </ul>`);
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createMassUl() {
    document.write('<ul>');
    for (const arg of arguments) {
        document.write(`<li>${arg}</li>`)
    }
    document.write('</ul>');

}
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createPrimitiveUl(...args) {
    document.write('<ul>');
    for (const arg of args) {
        console.log(typeof arg);
        if (arg !== null && typeof arg !== "object") {
            document.write(`<li>${arg}</li>`);
        }
    }
    document.write('</ul>');
}
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function createUsersKeys(users) {
    for (const user of users) {
        document.write('<div>');
        document.write(`ID: ${user.id} Name: ${user.name} Age: ${user.age}`);
        document.write('</div>');
        document.write(`<hr>`)
    }
}
// - створити функцію яка повертає найменьше число з масиву
function smallestNumOfArr(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
// let numbers = [12, 123, 114, 15, 1, 24, 234];
// let min = smallestNumOfArr(numbers);
// console.log(min);
//*****************************************************************************************************
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sumNumsOfArr(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
// let numbers = [1,2,10];
// let sum = sumNumsOfArr(numbers);
// console.log(sum);
//*****************************************************************************************************
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    for (let i = 0; i < arr.length; i++) {
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
// console.log(swap([11,22,33,44],0,1));
//*****************************************************************************************************
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let currencyValue = 0;
    for (const exCurr of currencyValues) {
        if (exchangeCurrency === exCurr.currency) {
            currencyValue = exCurr.value;
        }
        return sumUAH / currencyValue;
    }
}

// console.log(exchange(10000,
//     [{currency:'USD',value:40},{currency:'EUR',value:42}],
//     'USD'));


