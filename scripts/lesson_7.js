// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [];
for (let i = 0; i < 10; i++) {
    let user = new User(
        i + 1, // id
        "Name" + (i + 1),
        "Surname" + (i + 1),
        "email" + (i + 1) + "@example.com",
        "123456789" + (i + 1)
    );
    users.push(user);
}

console.log(users);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
let filterUsers = users.filter(value => !(value.id % 2))
console.log(filterUsers);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
let sortUsers = users.sort((User1, User2) => User1.id - User2.id);
console.log(sortUsers);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];
for (let i = 0; i < 10; i++) {
    let numItems = Math.floor(Math.random() * 5) + 1;
    let order = [];
    for (let j = 0; j < numItems; j++) {
        order.push("item" + (j + 1));
    }
    let client = new Client(
        i + 1, // id
        "Name" + (i + 1),
        "Surname" + (i + 1),
        "email" + (i + 1) + "@example.com",
        "123456789" + (i + 1),
        order
    );
    clients.push(client);
}

console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients.sort((Client1, Client2) => Client1.order.length - Client2.order.length);
console.log(clients);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, manufacturer, graduationYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.graduationYear = graduationYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    this.info = function () {
        console.log(`*************************************INFO********************************************`)
        for (let key in this) {
            let carKey = this[key];
            if (typeof carKey !== 'function') {
                console.log(`${key} - ${typeof carKey === 'object' && carKey !== null ? JSON.stringify(carKey) : carKey}`);
            }
        }
        console.log(`*************************************************************************************`)
    };
    this.increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed;
    this.changeYear = (newValue) => this.graduationYear = newValue;
    this.addDriver = (driver) => this.driver = driver;

}
let car = new Car('Toyota Camry','Toyota', 2017,216 ,3.5);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.info();
car.changeYear(2020);
car.info();
let driver = {
    name: 'Vasil',
    age: 30,
    license: true
}
car.addDriver(driver);
car.info();
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class createCar {
    constructor(model, manufacturer, graduationYear, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.graduationYear = graduationYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive = () => `їдемо зі швидкістю ${this.maxSpeed} на годину`;
    info =  () => {
        console.log(`*************************************INFO********************************************`)
        for (let key in this) {
            let carKey = this[key];
            if (typeof carKey !== 'function') {
                console.log(`${key} - ${typeof carKey === 'object' && carKey !== null ? JSON.stringify(carKey) : carKey}`);
            }
        }
        console.log(`*************************************************************************************`)
    };
    increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed;
    changeYear = (newValue) => this.graduationYear = newValue;
    addDriver = (driver) => this.driver = driver;
}
let toyota = new createCar('Toyota Camry','Toyota', 2017,216 ,3.5);
toyota.drive();
toyota.info();
toyota.increaseMaxSpeed(20);
toyota.info();
toyota.changeYear(2020);
toyota.info();
let toyotaDriver = {
    name: 'Vasil',
    age: 30,
    license: true
}
toyota.addDriver(toyotaDriver);
toyota.info();
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellas = [
    new Cinderella('Aurora',21,40),
    new Cinderella('Ariel',18,0),
    new Cinderella('Cinderella',18,34),
    new Cinderella('Belle',19,36),
    new Cinderella('Jasmine',18,37),
    new Cinderella('Pocahontas',20,37),
    new Cinderella('Mulan',23,41),
    new Cinderella('Tiana',20,38),
    new Cinderella('Rapunzel',16,35),
    new Cinderella('Merida',18,36),
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince(`Charming`, 20,34);
for (const cinderella of cinderellas) {
    console.log(cinderella.footSize === prince.shoe ? 'Wedding!' : 'Fake!')
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let cinderellaFind = cinderellas.find(cinderella => cinderella.footSize === prince.shoe);
console.log(cinderellaFind ? 'Wedding!' : 'Fake!')
//
//
//
// Через Array.prototype. створити власний foreach, filter, map
Array.prototype.ForEach = function(callback) {
    for (const item of this) {
        callback(item, this);
    }
};

let greeting = [`hello`, `java`, `script`];
greeting.ForEach(item => console.log(item.toUpperCase()));

Array.prototype.Filter = function(callback) {
    let arr = [];
    for (const item of this) {
        if (callback(item, this)) {
            arr.push(item);
        }
    }
    return arr;
};

const numbers = [10, 3, 24, 7, 51, 32, 12, 9];
const evenNumbers = numbers.Filter(num => num % 2 === 0);
console.log(evenNumbers);

Array.prototype.Map = function(callback) {
    let arr = [];
    for (const item of this) {
        arr.push(callback(item, this));
    }
    return arr;
};

greeting.Map(item => console.log(item.length + ` symbols`));