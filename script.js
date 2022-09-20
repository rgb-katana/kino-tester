'use strict';

// Getting the elements
const beginBtn = document.querySelector('.begin');
const refuseBtn = document.querySelector('.refuse');
const shareBtn = document.querySelector('.share');

const mainContent = document.querySelector('.content');
const textBlock = document.querySelector('.text-block');
const testWindow = document.querySelector('.test-window');

const backToMenu = document.querySelector('.back-to-menu');
const copyLink = document.querySelector('.copy-link');

const backBtn = document.querySelector('.back');
const frwdBtn = document.querySelector('.forward');

let slide = 0;
let currentSlide = document.querySelector(`.question${slide}`);

// ANSWERS INIT
let answer1 = document.querySelector(`.q${slide}-answer1`);
let answer2 = document.querySelector(`.q${slide}-answer2`);
let answer4 = document.querySelector(`.q${slide}-answer3`);
let answer3 = document.querySelector(`.q${slide}-answer4`);

const resultObj = {
  q1: ``,
  q2: ``,
  q3: ``,
  q4: ``,
  q5: ``,
  q6: ``,
  q7: ``,
  q8: ``,
  q9: ``,
  q10: ``,
};

const movies = {
  1: `Никто (2001)`,
  2: `Ларс и настоящая девушка (2007)`,
  3: `Драйв (2011)`,
  4: `Джокер (2019)`,
  5: `Американский Психопат (2000)`,
  6: `Старикам тут не место (2007)`,
  7: `Нефть (2007)`,
  8: `Таксист (1976)`,
  9: `Под Сильвер-Лейк (2017)`,
  10: `Ты Волк с Уолл-Стрит (2013)`,
};

function hideMenuAndText() {
  textBlock.classList.add('hidden');
  testWindow.classList.add('hidden');
}

function showMenuAndText() {
  textBlock.classList.remove('hidden');
  testWindow.classList.remove('hidden');
}

// BACKWARS
function goBackward() {
  console.log(`backward. current slide is: ${slide}`);
  currentSlide?.classList.add('hidden');
  slide -= 1;
  currentSlide = document.querySelector(`.question${slide}`);
  getNewInfo(slide);
  if (slide == 0) {
    textBlock.classList.remove('hidden');
    testWindow.classList.remove('hidden');
    document.querySelector('.nav-part').classList.add('hidden');
  } else {
    document.querySelector('.finish').classList.add('hidden');
    document.querySelector('.forward').classList.remove('hidden');
    currentSlide.classList.remove('hidden');
  }
}

// FORWARDS
function goForward() {
  slide += 1;
  console.log(slide);
  getNewInfo(slide);
  answer1.addEventListener('click', function () {
    answer1.classList.remove('backgroundAndText');
    answer2.classList.remove('backgroundAndText');
    answer3.classList.remove('backgroundAndText');
    answer4.classList.remove('backgroundAndText');
    console.log(`${slide}1`);
    resultObj[`q${slide}`] = `answer1`;
    answer1.classList.add('backgroundAndText');
    console.log(resultObj);
  });
  answer2.addEventListener('click', function () {
    answer1.classList.remove('backgroundAndText');
    answer2.classList.remove('backgroundAndText');
    answer3.classList.remove('backgroundAndText');
    answer4.classList.remove('backgroundAndText');
    console.log(`${slide}1`);
    resultObj[`q${slide}`] = `answer2`;
    answer2.classList.add('backgroundAndText');
    console.log(resultObj);
  });
  answer3.addEventListener('click', function () {
    answer1.classList.remove('backgroundAndText');
    answer2.classList.remove('backgroundAndText');
    answer3.classList.remove('backgroundAndText');
    answer4.classList.remove('backgroundAndText');
    console.log(`${slide}1`);
    resultObj[`q${slide}`] = `answer3`;
    answer3.classList.add('backgroundAndText');
    console.log(resultObj);
  });
  answer4.addEventListener('click', function () {
    answer1.classList.remove('backgroundAndText');
    answer2.classList.remove('backgroundAndText');
    answer3.classList.remove('backgroundAndText');
    answer4.classList.remove('backgroundAndText');
    console.log(`${slide}1`);
    resultObj[`q${slide}`] = `answer3`;
    answer4.classList.add('backgroundAndText');
    console.log(resultObj);
  });
  if (slide == 10) {
    currentSlide?.classList.add('hidden');
    currentSlide = document.querySelector(`.question${slide}`);
    currentSlide.classList.remove('hidden');
    document.querySelector('.forward').classList.add('hidden');
    document.querySelector('.finish').classList.remove('hidden'); // REDACTIROVAT'
  } else {
    console.log(`forward. current slide is: ${slide}`);
    currentSlide?.classList.add('hidden');
    currentSlide = document.querySelector(`.question${slide}`);
    currentSlide.classList.remove('hidden');
  }
}

shareBtn.addEventListener('click', function () {
  hideMenuAndText();
  document.querySelector('.share-window').classList.remove('hidden');
});

backToMenu.addEventListener('click', function () {
  document.querySelector('.share-window').classList.add('hidden');
  showMenuAndText();
});

copyLink.addEventListener('click', function () {
  navigator.clipboard.writeText('https://rgb-katana.github.io/kino-tester/');
  function hideCopiedMsg() {
    document.querySelector('.link-copied').classList.add('hidden');
  }
  document.querySelector('.link-copied').classList.remove('hidden');
  setTimeout(hideCopiedMsg, 1000);
});

refuseBtn.addEventListener('click', function () {
  textBlock.classList.add('hidden');
  testWindow.classList.add('hidden');
  document.querySelector('.refuse-window').classList.remove('hidden');
});

document
  .querySelector('.back-to-menu-gif')
  .addEventListener('click', function () {
    document.querySelector('.refuse-window').classList.add('hidden');
    showMenuAndText();
  });

beginBtn.addEventListener('click', function () {
  hideMenuAndText();
  goForward();
  document.querySelector('.nav-part').classList.remove('hidden');
});

backBtn.addEventListener('click', goBackward);
frwdBtn.addEventListener('click', goForward);

function getNewInfo(slide) {
  answer1 = document.querySelector(`.q${slide}-answer1`);
  answer2 = document.querySelector(`.q${slide}-answer2`);
  answer3 = document.querySelector(`.q${slide}-answer3`);
  answer4 = document.querySelector(`.q${slide}-answer4`);
  console.log(answer1, answer2, answer3, answer4);
}

document.querySelector('.finish').addEventListener('click', function () {
  let result = 0;
  Object.keys(resultObj).forEach(function (currentValue, index) {
    console.log(resultObj[currentValue]);
    switch (resultObj[currentValue]) {
      case `answer1`:
        console.log(`good`);
        result += 10;
        break;
      case `answer2`:
        console.log(`nice`);
        result += 6;
        break;
      case `answer3`:
        console.log(`cool`);
        result += 3;
        break;
      case `answer4`:
        console.log(`penis`);
        result += 1;
        break;
    }
  });
  console.log(document.querySelector('.result'));
  currentSlide.classList.add('hidden');
  document.querySelector('.nav-part').classList.add('hidden');
  document.querySelector('.result').classList.remove('hidden');
  let imageNumber = result == 100 ? 10 : Math.floor(result / 10);
  imageNumber = imageNumber == 0 ? 1 : imageNumber;
  console.log(imageNumber);
  document.querySelector(
    '.result-image'
  ).src = `images/poster${imageNumber}.png`;
  document.querySelector(
    '.result-text'
  ).textContent = `Ты ${movies[imageNumber]}`;
});
