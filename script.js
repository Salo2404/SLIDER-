let links = ['img/car1.jpg', 'img/car2.jpg', 'img/car3.png'];

let slider = document.querySelector('#slider');
let img = document.querySelector('#img');
let controlLeft = document.querySelector('#controlLeft');
let controlright = document.querySelector('#controlright');
let indicators = document.querySelector('#indicators');
let indicator;

//Создание индикаторов
links.forEach((link, index) => {
    indicator = document.createElement('li')
    indicator.classList.add('indicator')
    indicators.appendChild(indicator)
})

indicator = document.querySelectorAll('.indicator')

let i = 0;



img.src = links[i];

img.height = 400;

//Функция выделения активного индикатора
function indicatorActivate(i) {
    for (let i = 0; i < links.length; i++) {
        indicator[i].classList.remove('active')
    }
    indicator[i].classList.add('active')
}

controlright.addEventListener('click', (e) => {
    e.preventDefault();
    i++;
    if (i == links.length) {
        i = 0;
    }
    img.src = links[i];
    indicatorActivate(i)
})
controlLeft.addEventListener('click', (e) => {
    e.preventDefault();
    i--;
    if (i < 0) {
        i = links.length - 1;
    }
    img.src = links[i];
    indicatorActivate(i)
})



