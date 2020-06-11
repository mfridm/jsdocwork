'use strict';

const box = document.getElementById('box'); // получаем элемент с нужным айди
const btns = document.getElementsByTagName('button'); //[1]; // получение второго значения в массиве
const circle = document.getElementsByClassName('circle'); // получаем массив классов-css
const hearts = document.querySelectorAll('.heart'); // когда ОЛЛ то работает форич. Точка перед поиском, вывод всех элементов
const oneHeart = document.querySelector('.heart'); // первое что попалось на странице по этому слектору
const num = 500;
const wrapper = document.querySelector('.wrapper'); // ищем селектором первый попавщийся вроппер
// box.style.backgroundColor='blue';
// box.style.width='500px';
box.style.cssText=`background-color: blue; width:${num}px`;

btns[1].style.borderRadius='100%';
circle[0].style.backgroundColor='red';

// for (let i=0; i<hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item=>{ //перебираем все в массиве, назначаем переменную айтем и создаем функцию
    item.style.backgroundColor='red'; // каждый элемент в хартс получит бек красный
});

const div = document.createElement('div');
//const text = document.createTextNode('Tut bil ja');

div.classList.add('black'); // создаем черный див
document.body.append(div); // приклеиваем его к боди

wrapper.append(div); // добавляем в него наш див снизу
// wrapper.prepend(div); // добавляем в него наш див сверху
// wrapper.appendChild(div); // аналог добавления снизу
// wrapper.insertBefore(div,hearts[2]); // аналог бефор,с двумя элементами
// hearts[1].before(div); // добавляем наш див в сердички перед вторым элементом массива
// hearts[1].after(div); // добавляем наш див в сердички после второго элемента массива
// circle[0].remove(); // удаление любого элемента массива
// wrapper.removeChild(hearts[1]); //старый вариант ремува
// hearts[0].replaceWith(circle[0]); //замена первого сердца на первый круг

 div.innerHTML="<h1>Hello World</h1>"; // добавление хтмл прямо в див
// div.textContent="Hello World"; // вставляем только ТЕКСТ. метод для безопасности чтобы код не вставили

// div.insertAdjacentHTML('beforebegin','<h2>Hello</h2>'); // вставйа хтмл код перед дивом
// div.insertAdjacentHTML('afterbegin','<h2>Hello</h2>'); // вставка в начало элемента первым делом до всего кода
// div.insertAdjacentHTML('beforeend','<h2>Hello</h2>'); // вставка хтмл перед концом дива
// div.insertAdjacentHTML('afterend','<h2>Hello</h2>'); // вставка хтмл после конца дива