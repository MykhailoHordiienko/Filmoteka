import { filmsTemps } from './buttons';

import { createPopularMoviesGallery } from './gallery';

export const refsHed = {
  home: document.querySelector('#home'),
  searchBox: document.querySelector('#search'),
  buttonBox: document.querySelector('#buttons-box'),
  homeL: document.querySelector('#homeL'),
  libraryL: document.querySelector('#libraryL'),
  pagList: document.querySelector('#list'),
  smBox: document.querySelector('.header__error'),
};

refsHed.homeL.addEventListener('click', openHome);
refsHed.libraryL.addEventListener('click', openlibrary);

function openHome(event) {
  event.preventDefault();
  refsHed.home.classList.remove('my-library');
  refsHed.libraryL.classList.remove('current');
  refsHed.homeL.classList.add('current');
  refsHed.searchBox.classList.remove('is-hidden');
  refsHed.pagList.classList.remove('is-hidden');
  refsHed.smBox.classList.remove('is-hidden');
  refsHed.buttonBox.classList.add('is-hidden');
  filmsTemps.changeOnLibrary();
  createPopularMoviesGallery();
}
function openlibrary(event) {
  event.preventDefault();
  refsHed.home.classList.add('my-library');
  refsHed.libraryL.classList.add('current');
  refsHed.homeL.classList.remove('current');
  refsHed.searchBox.classList.add('is-hidden');
  refsHed.pagList.classList.add('is-hidden');
  refsHed.smBox.classList.add('is-hidden');
  refsHed.buttonBox.classList.remove('is-hidden');
  filmsTemps.changeOnLibrary();
  filmsTemps.watchedBtn.click();
}

filmsTemps.initL();
