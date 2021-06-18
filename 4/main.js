// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Popelyushka {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// let pop1 = new Popelyushka('Ann1', 16, 33);
// let pop2 = new Popelyushka('Ann2', 17, 34);
// let pop3 = new Popelyushka('Ann3', 18, 35);
// let pop4 = new Popelyushka('Ann4', 19, 36);
// let pop5 = new Popelyushka('Ann5', 20, 37);
// let pop6 = new Popelyushka('Ann6', 21, 38);
// let pop7 = new Popelyushka('Ann7', 22, 39);
// let pop8 = new Popelyushka('Ann8', 23, 40);
// let pop9 = new Popelyushka('Ann9', 24, 41);
// let pop10 = new Popelyushka('Ann10', 25, 42);
//
// popelyushky = [
//     pop1,
//     pop2,
//     pop3,
//     pop4,
//     pop5,
//     pop6,
//     pop7,
//     pop8,
//     pop9,
//     pop10
// ];
//
// class Prync {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// prync = new Prync('Sirozha', 25, 41);
//
// let ans = ''
// for (let i in popelyushky) {
//     if (popelyushky[i].size === prync.size) ans = popelyushky[i].name;
// }
//
// console.log(ans)

//============================================================================
// #2
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Popelyushka(name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
//
// let pop1 = new Popelyushka('Ann1', 16, 33);
// let pop2 = new Popelyushka('Ann2', 17, 34);
// let pop3 = new Popelyushka('Ann3', 18, 35);
// let pop4 = new Popelyushka('Ann4', 19, 36);
// let pop5 = new Popelyushka('Ann5', 20, 37);
// let pop6 = new Popelyushka('Ann6', 21, 38);
// let pop7 = new Popelyushka('Ann7', 22, 39);
// let pop8 = new Popelyushka('Ann8', 23, 40);
// let pop9 = new Popelyushka('Ann9', 24, 41);
// let pop10 = new Popelyushka('Ann10', 25, 42);
//
// function Prync(name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
//
//
// popelyushky = [
//     pop1,
//     pop2,
//     pop3,
//     pop4,
//     pop5,
//     pop6,
//     pop7,
//     pop8,
//     pop9,
//     pop10
// ];
// prync = new Prync('Sirozha', 25, 41);
//
// function popelyshSearch(popelyushky, prync) {
//     let ans = ''
//     for (let i in popelyushky) {
//         if (popelyushky[i].size === prync.size) ans = popelyushky[i].name;
//     }
//     return ans;
// }
//
// console.log(popelyshSearch(popelyushky, prync))

//============================================================================

// ### homework
// # 1

// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User

// function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// arr = [];
// for (let i = 0 ; i < 10; i++) {
//     let id =  i;
//     let name = 'user' + i;
//     let surname = 'surname' + i;
//     let email = 'test' + i + '@ukr.net';
//     let phone = '38099123121' + i;
//   arr[i] = new User(id, name, surname , email, phone)
// }
// console.log(arr)


//============================================================================
// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// arr = [];
// for (let i = 0; i < 10; i++) {
//     let id = i;
//     let name = 'user' + i;
//     let surname = 'surname' + i;
//     let email = 'test' + i + '@ukr.net';
//     let phone = '38099123121' + i;
//     let n = Math.floor(Math.random() * 10);
//     let order = [];
//     for (let j = 0; j < n ; j++) {
//        order.push('goods #' + j)
//    }
//     arr[i] = new Client(id, name, surname, email, phone, order)
// }
// console.log(arr)


//============================================================================
// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function Car(model, dev, year, maxSpeed, engine) {
//     this.maxSpeed = maxSpeed;
//     this.model = model;
//     this.year = year;
//     this.dev = dev;
//     this.engine = engine;
//
//     this.drive = function () {
//         alert(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function () {
//         alert(`модель : ${this.model},\n виробник:  ${this.dev},\n об'єм двигуна: ${this.engine},\n рік: ${this.year}`);
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear =  function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver =  function (driver) {
//         this.driver = driver;
//     }
// }
//
// const car = new Car('a180', 'mers', '2006', 210,'2')
// driver = {
//     name: 'Koly',
//     age: 25
// }
// car.addDriver(driver)
// car.changeYear(2020)
// console.log(car)

//============================================================================
// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Cars{
//     constructor(model, dev, year, maxSpeed, engine) {
//     this.maxSpeed = maxSpeed;
//     this.model = model;
//     this.year = year;
//     this.dev = dev;
//     this.engine = engine;
//     }
//     drive() {
//         alert(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info() {
//         alert(`модель : ${this.model},\n виробник:  ${this.dev},\n об'єм двигуна: ${this.engine},\n рік: ${this.year}`);
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
// let car1 = new Cars('a180', 'mers', '2006', 210,'2')
// car1.drive()

//============================================================================
// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню


// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// arr = [];
// for (let i = 0; i < 10; i++) {
//     let id = i;
//     let name = 'user' + i;
//     let surname = 'surname' + i;
//     let email = 'test' + i + '@ukr.net';
//     let phone = '38099123121' + i;
//     arr[i] = new User(id, name, surname, email, phone)
// }
//
// // let res = arr.filter( el => el.id % 2 === 0).sort((a, b) => (a.id < b.id) ? 1: -1)
// let rev = res.sort((a, b) => (a.id < b.id) ? -1: 1)
//arrLen = arr.length;
// for (let i = 0; i < arrLen -1; i++) {
//   let min = arr[i].id;
//   for(let j=i+1; j<arrLen; j++) {
//       if (arr[j].id < arr[min].id) {
//           min = arr[j].id;
//       }
//       let temp = arr[min]
//       arr[min] = arr[i];
//       arr[i] = temp
//   }
//
// }

//============================================================================

// 6. Взяти масив з завдання 2.
// Відсортувати його по кількості товарів в полі order. по спаданню

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// arr = [];
// for (let i = 0; i < 10; i++) {
//     let id = i;
//     let name = 'user' + i;
//     let surname = 'surname' + i;
//     let email = 'test' + i + '@ukr.net';
//     let phone = '38099123121' + i;
//     let n = Math.floor(Math.random() * 10);
//     let order = [];
//     for (let j = 1; j < n ; j++) {
//        order.push('goods #' + j)
//    }
//     arr[i] = new Client(id, name, surname, email, phone, order)
// }
// // console.log(arr)
//
//
// let res = arr.sort((a, b) => (a.order.length < b.order.length) ? 1: -1)
//
// console.log(res)

//============================================================================
// draft !!!!
//!!!!!!!!!!!!
//приклад дестукторізації js
// let user = {name: 'Ivan', age: 37,status: true, skills: ['js', 'html']}
//
// // let {name, age} = user
// let {name: testName, age} = user    // : testName псевдонім, переіменування властивостей деструктурованих
// console.log(testName)
//
// function foo({param1,param}) {}//get only needed params
//
//
// //create object without references
// let person = {name: "An"}
// let person3 = {...person}  //another object - клон не ссылка


let nums = [11,22,33];
console.log(nums[0],nums[1],nums[2])
console.log(...nums)
let nums3 = [...nums]  //клон массива не ссылка на массив