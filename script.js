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

function hideMenuAndText() {
  textBlock.classList.add('hidden');
  testWindow.classList.add('hidden');
}

function showMenuAndText() {
  textBlock.classList.remove('hidden');
  testWindow.classList.remove('hidden');
}

function testingPhase() {
  let slide = 1;
  const backBtn = document.querySelector('.back');
  const frwdBtn = document.querySelector('.forward');
  while (slide < 10) {
    const currentSlide = document.querySelector(`.question${slide}`);
    currentSlide.classList.remove('hidden');
    backBtn.addEventListener('click', function () {
      if (slide != 1) {
        slide -= 1;
      } else if (slide == 1) {
        currentSlide.classList.add('hidden');
        showMenuAndText();
      }
    });
    frwdBtn.addEventListener('click', function () {
      if (slide != 10) {
        console.log(`we here`);
        slide += 1;
        console.log(slide);
      } else if (slide == 10) {
        // win
      }
    });
    slide += 1;
    break;
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
  testingPhase();
});
