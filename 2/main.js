//================================================================
//lesson 2

// - Дано 2 масиви з рівною кількістю об'єктів.
//    Масиви:
//     З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

//begin
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

for (let i in usersWithId) {
    for (let elem in citiesWithId) {
        if (usersWithId[i].id === citiesWithId[elem].user_id) {
            usersWithId[i].adress = citiesWithId[elem];
            usersWithCities.push(usersWithId[i])

        }
    }

}
//end
//================================================================
//lesson 3



//begin
str = '    Garrry              Potter';

function normalize(str) {
    let splitArr = str.split(' ');
    let result = []
    for (let i of splitArr) {
        if (i) {
            result.push(i)
        }
    }
    return result.join(' ');

}
let normalString = normalize(str)
console.log(normalString)
//end
