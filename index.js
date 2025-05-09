'use strict';

const startButton = document.querySelector('.preloader__button');

startButton.addEventListener('click', function () {
    let preloader = document.getElementById('preloader');
    let omicronHeadingTitle = document.querySelector(".omicron-heading__title");
    let omicronHeadingDescription = document.querySelector(".omicron-heading__description");
    preloader.style.animation = 'fadeinout 0.5s  linear';
    preloader.addEventListener('animationend', function() {
        this.remove();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const notificationContainer = document.querySelector('.notification-container');
    const closeButton = document.querySelector('.closebtn');


    setTimeout(function() {
        notificationContainer.classList.remove('hidden');
    }, 1000);

    closeButton.addEventListener('click', function() {
        notificationContainer.classList.add('hidden');
    });
});


