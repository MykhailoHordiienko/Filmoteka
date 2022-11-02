import moviedbApiService from './moviedb-api-service';
import modalMarkup from './modalMarkup';
import {filmsTemps} from './buttons';
const body = document.querySelector('body');
const modal = document.querySelector('.backdrop');
const gallery = document.querySelector('js-gallery');

const selectedMovie = new moviedbApiService();

gallery.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  selectedMovie.query = e.target.datafilmid;
  
  selectedMovie.fetchMovie().then(createModal);
}

function createModal(movie) {
  console.log(movie);

  body.insertAdjacentHTML('beforeend', modalMarkup(movie));
}

function removeModal() {
  modal.innerHTML = '';

  // пока не сделал !!!!
  // remove EventListener
}

// закрытие модалки пока не сделал !!!!

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

// selectedMovie.query = 3;
// selectedMovie.fetchMovie().then(createModal);
