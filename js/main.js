'use strict';
import { musicPlayerInit } from './musicPlayer.js';

const container = document.querySelector('.container');
const btnStart = document.querySelector('.btn-start');
const choose = document.querySelector('.choose');
const main = document.querySelector('.main');
const burger = document.querySelector('.burger');
const chooseContainer = document.querySelector('.choose-container');
const playListMusic = document.querySelector('.play-list-music');
const favorite = document.querySelector('.favorite');
const listFav = document.querySelector('.list-fav');
const list = document.querySelector('.list');
const nowPlaying = document.querySelector('.now-playing');

btnStart.addEventListener('click', () => {
    container.classList.add('animate__fadeOutUp');
    choose.classList.add('animate__fadeInUp');
    choose.style.optical = '1';
    main.style.filter = 'brightness(40%)';
});

nowPlaying.addEventListener('click', () => {
    favorite.classList.add('not-choosen');
    nowPlaying.classList.remove('not-choosen');
    listFav.classList.remove('animate__fadeInRight');
    listFav.classList.add('animate__fadeOutRight');
    list.classList.remove('animate__fadeOutRight');
    list.classList.add('animate__fadeInRight');
    list.style.display = 'block';
    listFav.style.marginTop = '1000px';
    listFav.style.optical = '0';
});

favorite.addEventListener('click', () => {
    favorite.classList.remove('not-choosen');
    nowPlaying.classList.add('not-choosen');
    listFav.classList.remove('animate__fadeOutRight');
    listFav.classList.add('animate__fadeInRight');
    list.classList.remove('animate__fadeInRight');
    list.classList.add('animate__fadeOutRight');
    list.style.display = 'none';
    listFav.style.marginTop = '0';
    listFav.style.optical = '1';
});

burger.addEventListener('click', () => {
    if (main.style.filter == 'brightness(40%)') {
        burger.src = 'img/burger-white.svg';
        chooseContainer.classList.remove('animate__fadeInDown');
        chooseContainer.classList.add('animate__fadeOutUp');
        playListMusic.classList.remove('animate__fadeOutUp');
        playListMusic.classList.add('animate__fadeInUp');
        playListMusic.style.marginTop = '0';
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
  