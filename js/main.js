'use strict';

const container = document.querySelector('.container');
const btnStart = document.querySelector('.btn-start');
const choose = document.querySelector('.choose');
const main = document.querySelector('.main');

btnStart.addEventListener('click', () => {
    container.classList.add('animate__fadeOutUp');
    choose.classList.add('animate__fadeInUp');
    choose.style.optical = '1';
    main.style.filter = 'brightness(40%)';
});
  