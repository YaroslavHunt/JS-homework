// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(elements[0])
console.log(elements[1])
console.log(elements[2])
console.log(elements[3])
console.log(elements[4])
console.log(elements[5])
console.log(elements[6])
console.log(elements[7])
console.log(elements[8])
console.log(elements[9])
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Mein Kampf',
    pageCount: 206,
    genre: 'autobiography'
}
let book2 = {
    title: 'Le Comtede Monte Cristo',
    pageCount: 912,
    genre: 'classic'
}
let book3 = {
    title: 'A Farewell to Arms',
    pageCount: 576,
    genre: 'a war novel'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let firstBook = {
    title: 'Mein Kampf',
    pageCount: 206,
    genre: 'autobiography',
    authors: {
        name: 'Adolf Hitler',
        age: 56
    }
}
let secondBook = {
    title: 'Le Comtede Monte Cristo',
    pageCount: 912,
    genre: 'classic',
    authors: {
        name: 'Alexandre Dumas',
        age: 68
    }
}
let thirdBook = {
    title: 'A Farewell to Arms',
    pageCount: 576,
    genre: 'a war novel',
    authors: {
        name: 'Ernest Hemingway',
        age: 61
    }
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
    name: 'Andriy',
    username: 'Apple',
    password: 1111
    },
    {
    name: 'Oleg',
    username: 'Pineapple',
    password: 2222
    },
    {
    name: 'Sergiy',
    username: 'Cocos',
    password: 3333
    },
    {
    name: 'Olga',
    username: 'Pear',
    password: 4444
    },
    user5 = {
    name: 'Mikola',
    username: 'Peach',
    password: 5555
    },
    {
    name: 'Tanya',
    username: 'Banana',
    password: 6666
    },
    {
    name: 'Oleksiy',
    username: 'Cucumber',
    password: 7777
    },
    {
    name: 'Vasil',
    username: 'Lemon',
    password: 8888
    },
    {
    name: 'Ivan',
    username: 'Potato',
    password: 9999
    },
    {
    name: 'Andriy',
    username: 'Tomato',
    password: 1010
    }
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let weathers = [
    {
        day: 'monday',
        morningTemp: '+13°',
        afternoonTemp: '+20°',
        eveningTemp: '+11°'
    },
    {
        day: 'tuesday',
        morningTemp: '+12°',
        afternoonTemp: '+18°',
        eveningTemp: '+9°'
    },
    {
        day: 'wednesday',
        morningTemp: '+10°',
        afternoonTemp: '+16°',
        eveningTemp: '+7°'
    },
    {
        day: 'thursday',
        morningTemp: '+12°',
        afternoonTemp: '+17°',
        eveningTemp: '+5°'
    },
    {
        day: 'friday',
        morningTemp: '+9°',
        afternoonTemp: '+13°',
        eveningTemp: '+6°'
    },
    {
        day: 'saturday',
        morningTemp: '+8°',
        afternoonTemp: '+11°',
        eveningTemp: '+5°'
    },
    {
        day: 'sunday',
        morningTemp: '+7°',
        afternoonTemp: '+13°',
        eveningTemp: '+8°'
    }

]

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a;

a = 1;
if (a!==0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

a = 0;
if (a!==0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

a = -3;
if (a!==0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time;
let quarter;
if (time > 0 && time < 15) {
    quarter = 1;
    console.log('quarter = ' + quarter);
} else if (time >= 15 && time < 30) {
    quarter = 2;
    console.log('quarter = ' + quarter);
} else if (time >= 30 && time < 45) {
    quarter = 3;
    console.log('quarter = ' + quarter);
} else if (time >= 45 && time < 59) {
    quarter = 4;
    console.log('quarter = ' + quarter);
} else {
    console.log('The condition is not met "- Дано змінну time яка рівна числу від 0 до 59."')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day;
let decade;
if (day >= 1 && day <= 10) {
    decade = 1;
    console.log('decade = ' + decade);
} else if (day > 10 && day <= 20) {
    decade = 2;
    console.log('decade = ' + decade);
} else if (day > 20 && day <= 31) {
    decade = 3;
    console.log('decade = ' + decade);
} else {
    console.log('The condition is not met "- У змінній day дано якесь число від 1 до 31."')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let value1 = prompt('Enter the value of the day of the week: ');
let value2 = prompt('Enter the value of the day of the week: ');
let value = (value1 >= value2) ? value1 : value2;
if (value >= 1 && value <= 7) {
    switch (+value) {
        case 1:
            console.log('monday');
            break;
        case 2:
            console.log('tuesday');
            break;
        case 3:
            console.log('wednesday');
            break;
        case 4:
            console.log('thursday');
            break;
        case 5:
            console.log('friday');
            break;
        case 6:
            console.log('saturday');
            break;
        case 7:
            console.log('sunday');
            break;
    }
    } else {
        console.log('Incorrect value.')
    }
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x;
if (x === null || x === undefined || x === NaN || !x || x === 0) {
    x = 'default';
}
console.log(x);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер')
}
