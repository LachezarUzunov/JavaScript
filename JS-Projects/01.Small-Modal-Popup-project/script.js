'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = Array.from(document.querySelectorAll('.show-modal'));
btnsOpenModal.map(b => b.addEventListener('click', onClick));
btnCloseModal.addEventListener('click', onClose);
overlay.addEventListener('click', onClose);

function onClick(event) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function onClose(event) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

document.addEventListener('keydown', closeOnKeyDown);

function closeOnKeyDown(event) {
  if (event.key == 'Escape' && modal.classList.contains('hidden') == false) {
    onClose();
  }
}
