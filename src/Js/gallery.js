
// import cardTpl from './card';
import debounce from 'lodash.debounce';
import fetchApiFilms from './apiService';
import { startSpin, stopSpin } from './spinner';
import { renderInfoMsg, hideInfoImg, renderEmptyGalleryMsg } from './informing';
import { getMaxPages, resetPagination } from './pagination';
import  { cardTpl } from './card';


const fetchFilms = new fetchApiFilms();

const refs = {
  gallery: document.querySelector('.js-gallery'),
  search: document.querySelector('.header__form-input'),
  pagination: document.querySelector('.pagination'),
};

createPopularMoviesGallery();
refs.search.addEventListener('input', debounce(onInputChange, 1000));
refs.search.addEventListener('keydown', preventOnEnterSubmit);

// ----- home ввод фільму в input
function onInputChange(evt) {
  fetchFilms.query = evt.target.value;
  clearGalleryMarkup();
  resetPagination();
  fetchFilms.resetPageNum();
  refs.pagination.classList.remove('is-hidden');

  if (fetchFilms.query) {
    getMaxPages();
    createSearchMoviesGallery();
  } else {
    createPopularMoviesGallery();
  }
}

// ----- home рендер популярних фільмів
function createPopularMoviesGallery() {
  clearGalleryMarkup();
  hideInfoImg();
  getMaxPages();
  startSpin();

  fetchFilms.fetchPopularMovies().then(makeGalleryMarkup).catch(console.log).finally(stopSpin);
}

// ----- home рендер по результату пошуку
function createSearchMoviesGallery() {
  hideInfoImg();
  startSpin();
  fetchFilms
    .fetchSearchMovies()
    .then(movies => {
      if (movies.length === 0) {
        renderInfoMsg();
        renderEmptyGalleryMsg('Film not found');
        removeHiddenfromCardEl();
      } else {
        makeGalleryMarkup(movies);
      }
    })
    .catch(console.log)
    .finally(stopSpin);
}

// ----- library запрос збережених фільмів по id
function makeLibraryGallery(id) {
  clearGalleryMarkup();
  hideInfoImg();
  startSpin();

  let filmsList = [];
  fetchFilms
    .fetchFilmByID(id)
    .then(result => {
      filmsList.push(result);
      return filmsList;
    })
    .then(films => {
      makeGalleryMarkup(films);
      removeHiddenfromCardEl();
    })
    .catch(console.log)
    .finally(stopSpin);
}

// ----- library рендер збережених фільмів
function renderLibraryGallery(ids) {
  clearGalleryMarkup();
  hideInfoImg();

  if (ids.length === 0) {
    renderEmptyGalleryMsg('You have no saved movies yet');
    removeHiddenfromCardEl(); //для скриття пагинації розкоментувати
  }
  ids.forEach(id => makeLibraryGallery(id));
}

// -----  home library розмітка створення і очищення
function makeGalleryMarkup(movies) {
  refs.gallery.insertAdjacentHTML('beforeend', cardTpl(movies));
}

function clearGalleryMarkup() {
  refs.gallery.innerHTML = '';
}

// -----  input
function preventOnEnterSubmit(event) {
  if (event.code === 'Enter' || event.keyCode === 13) {
    event.preventDefault();
    return;
  }
}

function removeHiddenfromCardEl() {
  document.querySelectorAll('.film-average').forEach(el => el.classList.remove('is-hidden'));
  document.querySelectorAll('.card-delete-btn').forEach(el => el.classList.remove('is-hidden'));
  refs.pagination.classList.add('is-hidden'); //для скриття пагинації розкоментувати
}

// ----- home рендер по локалу
function createlibraryGallery(movies) {
  hideInfoImg();
  startSpin();
  clearGalleryMarkup();
  getMaxPages();
      if (movies.length === 0) {
        renderInfoMsg();
        renderEmptyGalleryMsg('Film not found');
        removeHiddenfromCardEl();
      } else {
        makeGalleryMarkup(movies);
      }
   stopSpin()
}

export {
  fetchFilms,
  clearGalleryMarkup,
  createPopularMoviesGallery,
  renderLibraryGallery,
  createSearchMoviesGallery,
  createlibraryGallery,
  refs,
};

