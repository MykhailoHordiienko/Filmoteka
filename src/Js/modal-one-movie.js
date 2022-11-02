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

  const modalCloseBtn = document.querySelector('.modal-close-img');
  const modalCloseBackdrop = document.querySelector('.backdrop-modal');

  document.addEventListener('keydown', escCheck);
  modalCloseBtn.addEventListener('click', closeBtn);
  modalCloseBackdrop.addEventListener('click', onBackdropClick);
}

function removeModal() {
  const modalCloseBtn = document.querySelector('.modal-close');
  const modalCloseBackdrop = document.querySelector('.backdrop-modal');
  const modalConainer = document.querySelector('.modal-container');

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
  // console.log(e.target);
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  removeModal();
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    removeModal();
  }
}
