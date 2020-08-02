'use strict';

const container = document.querySelector('.container');
const btnStart = document.querySelector('.btn-start');
const choose = document.querySelector('.choose');

btnStart.addEventListener('click', () => {
    container.classList.add('animate__fadeOutUp');
    choose.classList.add('animate__fadeInUp');
    choose.style.display = 'block';
});
  