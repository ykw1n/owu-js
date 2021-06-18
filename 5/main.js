// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
//==========================================================================================
// #classwork
// a)
//    let mainHeader = document.getElementById("main_header");
//    mainHeader.style.color = 'green'
//    mainHeader.innerText = 'apr-2021-tuesday'
// b)
//    let ulElem = document.querySelector('ul')
//    ulElem.style.width = '400px'
// c)
//    let linkList = document.getElementsByClassName("linkList")
//    for(let item of linkList) {
//       item.style.width = '50%'
//    }
// d)
//    let listElement2 = document.getElementsByClassName("listElement2")
//    console.log(listElement2[0].innerHTML)
//    console.log(listElement2[0].innerHTML)
// e) отримує всі елементи li та змінює ім колір фону на сірий
//    let liElem = document.getElementsByTagName("li")
//    for (let item of liElem) {
//       item.style.backgroundColor = 'grey'
//    }
// f) отримує всі елементи 'a' та додає їм клас anchor
//    let elemA = document.getElementsByTagName("a")
//    for (let elem of elemA) {
//       elem.classList.add("anchor")
//    }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//    let elemA = document.getElementsByTagName("a")
//    for (let elem of elemA) {
//       if (elem.innerHTML === "link3" ) {
//          elem.style.fontSize = "40px"
//       }
//    }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//    let elemA = document.getElementsByTagName("a")
//    for (let elem of elemA ) {
//       let innerText = elem.innerText
//       elem.classList.add(`elem_${innerText}`)
//    }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let subHeader = document.getElementsByClassName("sub-header")
// let answer = prompt("input color")
//
//
// for (let elem of subHeader) {
//    if (answer) {
//       elem.style.color = answer
//    }
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//    let subHeader = document.getElementsByClassName("sub-header")
//    let answer = prompt("input color")
//    for (let elem of subHeader) {
//       if (elem.innerHTML === 'content 2 segment' && answer) {
//          elem.style.color = answer
//       }
//    }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let contentClass = document.getElementsByClassName("content_1")
// let ans = prompt("input text")
// if (contentClass) {
//    for (let elem of contentClass) {
//       if (elem && ans) {
//          elem.innerHTML = ans
//       }
//    }
// }
// l) отримати елементи p та змінити їм padding на 20px

// let elem = document.getElementsByTagName("p")
// for (let item of elem) {
//    item.style.padding = "20px"
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
//
//    let text2 = document.getElementsByClassName("text2")
//    if (text2) for (let elem of text2)  elem.innerHTML = "apr-2021-tuesday"


// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

//     let formElem = document.createElement("form")
//     formElem.setAttribute("action", "index2.html")
//     input = document.createElement("input")
//     input.setAttribute("type", "text")
//     input.setAttribute("name", "name")
//     formElem.appendChild(input)
//     let submitButton = document.createElement("input")
//     submitButton.setAttribute("type", "submit")
//     formElem.appendChild(submitButton)
//     document.body.appendChild(formElem)
//
//
//
// formElem.addEventListener("submit", (e) => {
//     let nameInput = formElem.name.value
//     localStorage.setItem('inputName',nameInput)
// } )




// 3. Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
//     створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.



function createElem(tagName, type="", name="") {
    let x =  document.createElement(tagName)
    x.setAttribute("type", type);
    x.setAttribute("name", name);
    return x;
}
//creating form
let shopForm = createElem("form",'get', 'form')
    shopForm.setAttribute("action", "")
let divElem = createElem("div")
    divElem.classList.add("form-group")
    divElem.style.width="10%"
let nameInput = createElem("input","text","title")
    nameInput.classList.add('form-control')
    let label = document.createElement("label")
    label.innerHTML = "Name"
    divElem.insertBefore(label, null)
let countInput = createElem("select","select","select")
    countInput.classList.add('form-control')
    countInput.id = "selectCount"
    let labelCount = document.createElement("label")
    labelCount.innerHTML = "Count"
for ( let i=0; i < 10; i++) {
    let option = createElem("option")
    option.value = i.toString();
    option.text = i.toString();
    countInput.appendChild(option)
}
let button = createElem("input", "submit", "submit")
let priceLabel = document.createElement("label")
    priceLabel.innerHTML = "price"
let price = createElem("input", "text", "price")
    price.classList.add('form-control')
let imageLabel = document.createElement("label")
    imageLabel.innerHTML = "image url"
let image  = createElem("input", "text", "image")
    image.classList.add('form-control')


shopForm.appendChild(divElem)
divElem.appendChild(nameInput)
divElem.appendChild(countInput)
divElem.insertBefore(labelCount, countInput)
divElem.appendChild(price)
divElem.insertBefore(priceLabel, price)
divElem.appendChild(image)
divElem.insertBefore(imageLabel, image)
divElem.appendChild(button)
document.body.appendChild(shopForm)


//save items to carts - localStorage
shopForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let temp = {}
    let carts = [];
    temp.name =  shopForm.title.value;
    temp.count = shopForm.select.value;
    temp.price = shopForm.price.value;
    temp.price = shopForm.image.value;

    // const { temp.name, temp.count, temp.price, temp.price} =
//let parseRes = JSON.parse(cartsCurrent) || []
    let cartsCurrent = localStorage.getItem("carts");

    if (cartsCurrent !== null) {
        let parseRes = JSON.parse(cartsCurrent)
        parseRes.push(temp)
        //parseRes.push({id: Math.random(), name, price, img})
        localStorage.setItem("carts", JSON.stringify(parseRes))
    } else {
        carts.push(temp)
        localStorage.setItem("carts", JSON.stringify(carts))
    }
shopForm.reset()
})
