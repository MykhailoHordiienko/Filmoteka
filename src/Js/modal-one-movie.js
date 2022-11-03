import moviedbApiService from './moviedb-api-service';
import modalMarkup from './modalMarkup';
import { filmsTemps } from './buttons';
import { startSpin, stopSpin } from './spinner';
const body = document.querySelector('body');
const gallery = document.querySelector('.js-gallery');
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
  body.insertAdjacentHTML('beforeend', modalMarkup(movie));
  body.classList.add('body-no-scroll');

  filmsTemps.statusBtn();

  const modalCloseBtn = document.querySelector('.modal-close');
  const modalCloseBackdrop = document.querySelector('.backdrop-modal');

  document.addEventListener('keydown', escCheck);
  modalCloseBtn.addEventListener('click', closeBtn);
  modalCloseBackdrop.addEventListener('click', onBackdropClick);
}

function removeModal() {

  const modalCloseBtn = document.querySelector('.modal-close');
  const modalCloseBackdrop = document.querySelector('.backdrop-modal');
  const modalConainer = document.querySelector('.modal-container');

  body.classList.remove('body-no-scroll');
  filmsTemps.removlisten();
  modalConainer.remove();

  document.removeEventListener('keydown', escCheck);
  modalCloseBtn.removeEventListener('click', closeBtn);
  modalCloseBackdrop.removeEventListener('click', onBackdropClick);

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
  if (e.currentTarget === e.target) {
    removeModal();
  }
}
