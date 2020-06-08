'use strict';

const box = document.getElementById('box'); // получаем элемент с нужным айди

console.log(box);

const btns = document.getElementsByTagName('button'); //[1]; // получение второго значения в массиве

console.log(btns[1]);

const circle = document.getElementsByClassName('circle'); // получаем массив классов
console.log(circle);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item=>{ //выводим все элементы селектора (стрелочная функция)
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); // первое что по палось на странице по этому слектору
console.log(oneHeart);