//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

let baseUrl = 'http://jsonplaceholder.typicode.com';
let getUsers = baseUrl + '/users';
let matchArray = getUsers.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/g);
if (matchArray) {
    let usersUrl = new URL(getUsers);
    fetch(usersUrl)
        .then(response => response.json())
        .then(users => {
            localStorage.setItem('users', JSON.stringify(users));

            const usersList = document.getElementById('users-list');
            users.forEach(user => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `user-info.html?id=${user.id}`;
                link.textContent = `${user.id} - ${user.name}`;
                listItem.appendChild(link);
                usersList.appendChild(listItem);
            });
        })
}