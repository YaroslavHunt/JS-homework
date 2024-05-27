// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form = document.getElementsByClassName('addUser');
let name = document.getElementById('name');
let surname = document.getElementById('surname');
let age = document.getElementById('age');
let btn = document.getElementById('btn')
btn.onclick = function (ev) {
    ev.preventDefault();

    let user = {
        name: name.value,
        surname: surname.value,
        age: age.value
    };

    let display = document.createElement('div');
    display.textContent = JSON.stringify(user);

    if (name && surname && age) {
        document.body.appendChild(display);
        console.log(JSON.stringify(user));
    }
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
    let message = document.createElement('p');
        let ageNum = parseInt(age.value);
        message.style.fontSize = '12px';
        message.style.marginTop = '0';
        if (isNaN(ageNum)) {
            message.textContent = 'Please enter a valid age.';
            message.style.color = 'red';
        } else if (ageNum < 18) {
            message.textContent = 'You are under 18 years old.';
            message.style.color = 'red';
        } else {
            message.textContent = 'Show content.';
            message.style.color = 'green';
        }
        display.appendChild(message);
}
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
window.onload = function () {
    let number = document.getElementById('number');
    let newValue = parseInt(localStorage.getItem('number')) || 0;
    newValue++;
    localStorage.setItem('number', newValue)
    number.textContent = newValue;
}
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
function recordVisit() {
    let dataTime = new Date().toLocaleString();
    let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
    sessions.push(dataTime);
    localStorage.setItem('sessions', JSON.stringify(sessions));
    if (sessions.length >= 100) {
        localStorage.clear();
    }
}
// ---> sessions.html
recordVisit();
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
let users = [];
for (let i = 0; i < 100; i++) {
    let user = new User(
    i + 1, // id
    "Name" + (i + 1),
    "Surname" + (i + 1),
    "email" + (i + 1) + "@example.com",
    "123456789" + (i + 1)
    );
    users.push(user);
}
let usersBox = document.getElementsByClassName('usersBox');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let usersList = document.getElementById('usersList');
let currentPage = 0;
const usersPerPage = 10;

function displayUsers(page) {
    usersList.innerHTML = '';
    let start = page * usersPerPage;
    let end = start + usersPerPage;
    let paginatedUsers = users.slice(start, end);

    for (let user of paginatedUsers) {
        let li = document.createElement('li');
        li.textContent = JSON.stringify(user);
        usersList.appendChild(li);
    }
}

prev.addEventListener('click', function () {
    if (currentPage > 0) {
        currentPage--;
        displayUsers(currentPage);
    }
});

next.addEventListener('click', function () {
    if ((currentPage + 1) * usersPerPage < users.length) {
        currentPage++;
        displayUsers(currentPage);
    }
});

displayUsers(currentPage);
//
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let hiddenDiv = document.getElementById('text');
let hiddenBtn = document.getElementById('hidden');
hiddenBtn.addEventListener('click', function () {
    hiddenDiv.style.display = 'none';
});
//
//

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається