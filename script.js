
// 1) Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами).Внизу каждого списка выводится итоговая сумма товара. А так же в самом конце выводится итоговая сумма и количество всех товаров.

const body = document.querySelector('body');
let carList = document.createElement('ol');
const header = document.createElement('h1');
header.innerText = 'Product list';
body.append(header);

let totalPrice = 0;
let totalCount = 0;


const cars = [
    {
        title: "BMW",        
        price: "40000",        
        count: "15"        
        },        
        {        
        title: "Toyota",        
        price: "20000",        
        count: "13"        
        },        
        {        
        title: "Ford",        
        price: "30000",        
        count: "20"        
        },        
        {        
        title: "Chevrolet",        
        price: "60000",        
        count: "9"        
        },        
        {        
        title: "Volkswagen",        
        price: "30000",        
        count: "13"        
        },        
]

for(let i = 0; i < cars.length; i++){

    let carTitle = document.createElement('li');
    carTitle.innerText = cars[i].title;

    let carPrice = document.createElement('ul');
    carPrice.innerText = "Price: " + cars[i].price;

    let carCount = document.createElement('ul');
    carCount.innerText = "In stock: " + cars[i].count;

    let sumPrice = document.createElement('p');
    sumPrice.innerText = "Total price: " + Number(cars[i].price) * Number(cars[i].count);
    
    carList.append(carTitle, carPrice, carCount, sumPrice);
    body.append(carList);

    totalPrice += Number(cars[i].price) * Number(cars[i].count);
    totalCount += Number(cars[i].count);

}

let sumCars = document.createElement('p');
sumCars.innerText = "Total cars: " + totalCount;
body.append(sumCars);

let sumPrice = document.createElement('p');
sumPrice.innerText = "Total price: " + totalPrice;
body.append(sumPrice);










