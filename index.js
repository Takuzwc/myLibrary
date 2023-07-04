'use strict';

const duration = document.querySelector('.btn-duration');
const shifter = document.querySelector('.shifter');

const mod = {
  on: function () {
    duration.classList.add('btnDay');
    duration.classList.remove('btnNight');
    shifter.classList.remove('nightShift');
    shifter.classList.add('dayShift');
  },
  off: function () {
    duration.classList.remove('btnDay');
    duration.classList.add('btnNight');
    shifter.classList.remove('dayShift');
    shifter.classList.add('nightShift');
  },
};

duration.addEventListener('click', function () {
  //duration.mod.on();
  duration.classList.toggle(mod.off());
});

//Cards

//card1
const card1 = document.querySelector('.card-1');
const cardDescription = document.querySelector('.card--discription');
const cardBtns = document.querySelector('.card-btns');
const imageSection = document.querySelector('.image--section');

//card2
const card2 = document.querySelector('.card-2');
const card2Description = document.querySelector('.card2--discription');
const card2Btn = document.querySelector('.card2-btn');
const image2Section = document.querySelector('.image--section2');

card1.addEventListener('click', function (e) {
  e.preventDefault();
  card1.style = `height: 340px`;
  cardDescription.classList.toggle('hidden');
  cardBtns.classList.toggle('hidden');
  imageSection.style = `  transform: translateY(-35px);
  transition: transform 1s ease 0.34s;`;
});

card2.addEventListener('click', function (e) {
  e.preventDefault();
  card2Btn.classList.toggle('hidden');
  image2Section.style = `  transform: translateY(-35px);
  transition: transform 1s ease 0.34s;`;
  card2.style = `height: 300px;`;
});
