'use strict';
/*-------------------active icons------------------*/
const btnAction = document.querySelector('.btn--action');
const btnFlusher = document.querySelector('.btn--flusher');

btnFlusher.addEventListener('click', function () {
  btnFlusher.style = `border: 2px solid orangered;
  animation: none;`;
  console.log('clicked');
});

/*-------------------Buttons------------------*/
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

//Button 2
const btnMode = document.querySelector('.btn-active');
const modeText = document.querySelector('.mode--text');

btnMode.addEventListener('click', function (e) {
  const clicked = e.target.closest('.btn--inaframe');

  //remove active
  //btnMode.classList.remove('active--one');

  //Active
  clicked.style.border = ` 2px solid #e74804`;
  modeText.innerHTML = 'On';
});

/*-------------------Cards------------------*/

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
  setTimeout(() => {
    cardDescription.classList.remove('hidden');
    cardBtns.classList.remove('hidden');
  }, 100);
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

//scrol cards
/*
const allCards = document.querySelectorAll('.scroler--card');
const parentContainer = document.querySelector('.container--parent');
const cords = parentContainer.getBoundingClientRect();
console.log(cords);

const revealCards = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('scroll-card--hidden');
  observer.unobserve(entry.target);
};

const scrollObserver = new IntersectionObserver(revealCards, {
  root: null,
  threshold: 0.15,
});

allCards.forEach(function (card) {
  scrollObserver.observe(card);
  card.classList.add('scroll-card--hidden');
});
*/

const allCards = document.querySelectorAll('.scroler--card');
const parentContainer = document.querySelector('.container--parent');

window.addEventListener('wheel', checkBoxes);
checkBoxes();

const cords = parentContainer.getBoundingClientRect();
console.log(cords);

function checkBoxes() {
  const triggerRight = window.innerWidth / 2;

  allCards.forEach(card => {
    const cardleft = card.getBoundingClientRect().left;

    if (cardleft > triggerRight) {
      card.classList.add('scroll-card--hidden');
    } else {
      card.classList.remove('scroll-card--hidden');
    }
  });
}

//Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.btn__slider--left');
  const btnRight = document.querySelector('.btn__slider--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.5) translateX(-800px)';
  // slider.style.overflow = 'visible';

  //Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  //Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    console.log(e);

    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide(); //short circuting instead of if statement
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      //const slide = e.target.dataset.slide;
      //destructuring
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
  //-100%, 0%, 100%, 200%
};

slider();
