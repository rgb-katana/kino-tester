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

shareBtn.addEventListener('click', function () {
  textBlock.classList.add('hidden');
  testWindow.classList.add('hidden');
  document.querySelector('.share-window').classList.remove('hidden');
});

backToMenu.addEventListener('click', function () {
  document.querySelector('.share-window').classList.add('hidden');
  textBlock.classList.remove('hidden');
  testWindow.classList.remove('hidden');
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
    textBlock.classList.remove('hidden');
    testWindow.classList.remove('hidden');
  });
