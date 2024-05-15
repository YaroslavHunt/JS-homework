// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
strings.forEach((item) => console.log(item.length));
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
strings.forEach((item) => console.log(item.toUpperCase()));
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
strings.forEach((item) => console.log(item.toLowerCase()));
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());
// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
let str1 = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
const stringToArray = str => str.split(' ');
console.log(stringToArray(str1));
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
let numToStr = numbers.map((num) => num.toString())
console.log(numToStr);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
function sortNums(numbers, direction) {
    if (direction === 'ascending') {
        numbers.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        numbers.sort((a, b) => a - b).reverse();
    } else {
        console.log('Incorrect direction.')
    }
    return numbers;
}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sorted = coursesAndDurationArray.sort((course1, course2) =>
    course1.monthDuration - course2.monthDuration).reverse();
console.log(sorted);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filtered = coursesAndDurationArray.filter((course) => course.monthDuration > 5);
console.log(filtered);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let map = coursesAndDurationArray.map((course, index, array) =>
    ({id: index + 1, ...course}));
console.log(map);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cardDeck = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },

    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },

    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },

    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' }
];
// let cardSuits = ['spades', 'diamonds', 'hearts', 'clubs'];
// let values = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
//
// let cardDeck = cardSuits.reduce((acc, card) => {
//
//     values.forEach(item => {
//         let color = (card === 'diamonds' || card === 'hearts') ? 'red' : 'black';
//         acc.push({
//             cardSuit: item,
//             value: card,
//             color: color
//         })
//     })
//     return acc;
// }, [])
// console.log(cardDeck);
// - знайти піковий туз
const aceOfSpades = cardDeck.filter(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(aceOfSpades);
// - всі шістки
const sixes = cardDeck.filter(card => card.value === '6');
console.log(sixes);
// - всі червоні карти
const redCards = cardDeck.filter(card => card.color === 'red');
console.log(redCards);
// - всі буби
const diamonds = cardDeck.filter(card => card.cardSuit === 'diamond');
console.log(diamonds);
// - всі трефи від 9 та більше
const highValueClubs = cardDeck.filter(card => card.cardSuit === 'clubs' && (parseInt(card.value) >= 9 ||
    ['ace', 'jack', 'queen', 'king'].includes(card.value)));
console.log(highValueClubs);
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let suits = {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
let reduce = cardDeck.reduce((accum, card) => {
    if (card.cardSuit === 'spade') {
        suits.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        suits.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        suits.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        suits.clubs.push(card);
    }
    return accum;
}, suits);
console.log(reduce);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let sass = coursesArray.filter(course => {
    return course.modules.indexOf('sass') !== -1;
});
console.log(sass);
// --написати пошук всіх об'єктів, в який в modules є docker
let docker = coursesArray.filter(course => {
    return course.modules.indexOf('docker') !== -1;
});
console.log(docker);