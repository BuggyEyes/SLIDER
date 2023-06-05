// Массив картинок
const entities = [
    {
        text: 'Первый кот',
        img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3463-3139-4630-b563-646166616434__20180225_gaf_uw8_101.jpg'
    },
    {
        text: 'Второй кот',
        img: 'https://avatars.mds.yandex.net/i?id=6bc83af104f35acde0c9bf41fe2b46258b5e15a7-8497474-images-thumbs&n=13'
    },
    {
        text: 'Третий кот',
        img: 'https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }
]

// Добавляем ивенты текста и картинки
const text = document.querySelector('.text')
const img = document.querySelector('.image')

const setEntity = (index) => {
    text.innerText = entities[index].text
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
        currentIndex = entities.length-1;
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

dot_1.addEventListener('click', () =>{
    setEntity(0);
   // currentIndex = 0;
})
dot_2.addEventListener('click', () =>{
setEntity(1);
   // currentIndex = 1;
})
dot_3.addEventListener('click', () =>{
setEntity(2);
   // currentIndex = 2;
})