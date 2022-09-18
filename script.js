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

function hideMenuAndText() {
  textBlock.classList.add('hidden');
  testWindow.classList.add('hidden');
}

function showMenuAndText() {
  textBlock.classList.remove('hidden');
  testWindow.classList.remove('hidden');
}

function goBackward() {
  console.log(`backward. current slide is: ${slide}`);
  currentSlide?.classList.add('hidden');
  slide -= 1;
  currentSlide = document.querySelector(`.question${slide}`);
  if (slide == 0) {
    textBlock.classList.remove('hidden');
    testWindow.classList.remove('hidden');
    document.querySelector('.nav-part').classList.add('hidden');
  } else {
    currentSlide.classList.remove('hidden');
  }
}

function goForward() {
  slide += 1;
  if (slide >= 11) {
    return 0;
  } else {
    console.log(`backward. current slide is: ${slide}`);
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
