import moviedbApiService from './moviedb-api-service';
import modalMarkup from './modalMarkup';
import { filmsTemps } from './buttons';
import { startSpin, stopSpin } from './spinner';
const body = document.querySelector('body');
const gallery = document.querySelector('.js-gallery');
const backdropModal = document.querySelector('.backdrop-modal');

const selectedMovie = new moviedbApiService();

gallery.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  selectedMovie.query = e.target.attributes.datafilmid.value;
  filmsTemps.setFilmId(selectedMovie.query);
  selectedMovie.fetchMovie().then(createModal);
}

function createModal(movie) {
  backdropModal.insertAdjacentHTML('beforeend', modalMarkup(movie));
  const modalCloseBtn = document.querySelector('.modal-close');

  body.classList.add('body-no-scroll');
  backdropModal.classList.remove('is-hidden');

  filmsTemps.statusBtn();

  document.addEventListener('keydown', escCheck);
  modalCloseBtn.addEventListener('click', closeBtn);
  backdropModal.addEventListener('click', onBackdropClick);
}

function removeModal() {
  const modalCloseBtn = document.querySelector('.modal-close');
  const modal = document.querySelector('.modal-movie');

  body.classList.remove('body-no-scroll');
  backdropModal.classList.add('is-hidden');

  filmsTemps.removlisten();

  function removeMarkup() {
    modal.remove();
  }

  setTimeout(removeMarkup, 400);

  document.removeEventListener('keydown', escCheck);
  modalCloseBtn.removeEventListener('click', closeBtn);
  backdropModal.removeEventListener('click', onBackdropClick);
}

function escCheck(e) {
  if (e.code !== 'Escape') {
    return;
  }
  removeModal();
}

function closeBtn(e) {
  if (e.target.nodeName !== 'SPAN') {
    return;
  }
  removeModal();
}

function onBackdropClick(e) {
  if (e.currentTarget !== e.target) {
    return;
  }
  removeModal();
}
