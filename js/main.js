'use strict';
import { musicPlayerInit } from './musicPlayer.js';

const container = document.querySelector('.container');
const btnStart = document.querySelector('.btn-start');
const choose = document.querySelector('.choose');
const main = document.querySelector('.main');
const burger = document.querySelector('.burger');
const chooseContainer = document.querySelector('.choose-container');
const playListMusic = document.querySelector('.play-list-music');




btnStart.addEventListener('click', () => {
    container.classList.add('animate__fadeOutUp');
    choose.classList.add('animate__fadeInUp');
    choose.style.optical = '1';
    main.style.filter = 'brightness(40%)';
});

burger.addEventListener('click', () => {
    if (main.style.filter == 'brightness(40%)') {
        burger.src = 'img/burger-white.svg';
        chooseContainer.classList.remove('animate__fadeInDown');
        chooseContainer.classList.add('animate__fadeOutUp');
        playListMusic.classList.remove('animate__fadeOutUp');
        playListMusic.classList.add('animate__fadeInUp');
        playListMusic.style.optical = '1';
        main.style.filter = 'brightness(20%)';
    } else {
        burger.src = 'img/burger.svg';
        chooseContainer.classList.remove('animate__fadeOutUp');
        chooseContainer.classList.add('animate__fadeInDown');
        playListMusic.classList.remove('animate__fadeInUp');
        playListMusic.classList.add('animate__fadeOutUp');
        playListMusic.style.optical = '0';
        main.style.filter = 'brightness(40%)';
    }
});

musicPlayerInit();
  