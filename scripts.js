// Массив картинок
const entities = [
    {
        city: 'Rostov-on-Don\nLCD admiral',
        apart_area: '81 m2',
        repair_time: '3.5 months',
        repair_cost: 'Upon request',
        img: 'SVG/image1.svg',
    },
    {
        city: 'Sochi Thieves',
        apart_area: '105 m2',
        repair_time: '4 months',
        repair_cost: 'Upon request',
        img: 'SVG/image2.svg',

    },
    {
        city: 'Rostov-on-Don Patriotic',
        apart_area: '93 m2',
        repair_time: '3 months',
        repair_cost: 'Upon request',
        img: 'SVG/image3.svg',

    }
]

// Добавляем ивенты текста и картинки
const city = document.querySelector('.city')
const apart_area = document.querySelector('.apart_area')
const repair_time = document.querySelector('.repair_time')
const repair_cost = document.querySelector('.repair_cost')
const img = document.querySelector('.image')
// const rostov_adm = document.querySelector('rostov_adm')
// const rostov_pat = document.querySelector('rostov_pat')
// const sochi = document.querySelector('sochi')
const setEntity = (index) => {
    city.innerText = entities[index].city
    apart_area.innerText = entities[index].apart_area
    repair_time.innerText = entities[index].repair_time
    repair_cost.innerText = entities[index].repair_cost
    img.style.backgroundImage = `url(${entities[index].img})`

}

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let currentIndex = 0
// Добавляем ивенты кнопок next pic и previous pic

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        setEntity(currentIndex - 1);
        currentIndex--
    } else {
        currentIndex = entities.length - 1;
        setEntity(entities.length - 1);
    }


})
next.addEventListener('click', () => {
    if (currentIndex < entities.length - 1) {
        setEntity(currentIndex + 1);
        currentIndex++
    } else {
        setEntity(0);
        currentIndex = 0;
    }


})

const dot_1 = document.querySelector('.dot_1');
const dot_2 = document.querySelector('.dot_2');
const dot_3 = document.querySelector('.dot_3');

dot_1.addEventListener('click', () => {
    setEntity(0);
    // currentIndex = 0;
})
dot_2.addEventListener('click', () => {
    setEntity(1);
    // currentIndex = 1;
})
dot_3.addEventListener('click', () => {
    setEntity(2);
    // currentIndex = 2;
})
// Навигация над изображением
const rostov_adm = document.querySelector('.rostov_adm');
const sochi = document.querySelector('.sochi');
const rostov_pat = document.querySelector('.rostov_pat');

rostov_adm.addEventListener('click', () => {
    setEntity(0);
    rostov_adm.style.cssText = 'color: #E3B873; text-decoration: underline; opasity: 0%';
    rostov_pat.style.cssText = 'color: white; text-decoration: none';
    sochi.style.cssText = 'color: white; text-decoration: none';
    // currentIndex = 0;
})
sochi.addEventListener('click', () => {
    setEntity(1);
    rostov_adm.style.cssText = 'color: white; text-decoration: none';
    rostov_pat.style.cssText = 'color: white; text-decoration: none';
    sochi.style.cssText = 'color: #E3B873; text-decoration: underline; opasity: 0%';
    // currentIndex = 1;
})
rostov_pat.addEventListener('click', () => {
    setEntity(2);
    rostov_pat.style.cssText = 'color: #E3B873; text-decoration: underline; opasity: 0%';
    rostov_adm.style.cssText = 'color: white; text-decoration: none';
    sochi.style.cssText = 'color: white; text-decoration: none';
    // currentIndex = 2;
})