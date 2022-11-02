import moviedbApiService from './moviedb-api-service';
import modalMarkup from './modalMarkup';

const body = document.querySelector('body');
const modal = document.querySelector('.backdrop');
const gallery = document.querySelector('.js-gallery');

const selectedMovie = new moviedbApiService();

gallery.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  selectedMovie.query = e.target.attributes.datafilmid.value;
  selectedMovie.fetchMovie().then(createModal);
}

function createModal(movie) {
  body.insertAdjacentHTML('beforeend', modalMarkup(movie));

  const modalCloseBtn = document.querySelector('.modal-close');
  const modalCloseBackdrop = document.querySelector('.backdrop-modal');

  document.addEventListener('keydown', escCheck);
  modalCloseBackdrop.addEventListener('click', removeModal);
  modalCloseBtn.addEventListener('click', removeModal);
}

function removeModal() {
  const modalCloseBtn = document.querySelector('.modal-close');
  const modalCloseBackdrop = document.querySelector('.backdrop-modal');
  const modalConainer = document.querySelector('.modal-container');

  modalConainer.remove();

  modalCloseBtn.removeEventListener('click', removeModal);
  modalCloseBackdrop.removeEventListener('click', removeModal);
  document.removeEventListener('keydown', escCheck);
}

function escCheck(e) {
  if (e.code !== 'Escape') {
    return;
  }
  removeModal();
}
