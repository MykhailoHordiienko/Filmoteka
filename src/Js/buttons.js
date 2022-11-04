import { createlibraryGallery } from './gallery.js';
export const filmsTemps = {
  filmArray: [],
  filmId: 0,
  FilmById: null,
  deletePosition: -1,
  deletePositionQ: -1,
  LOCAL_STORAGE_KEY: 'films',
  LOCAL_STORAGE_KEY_QUEUE: 'queue',
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
  WATCHED: [],
  QUEUE: [],
  onLibrary: false,
  adwBtn: null,
  atqBtn: null,
  arrayFilms: [],
  arrayF: [],
  resultSearch: -1,
  saveFilm: null,
  saveFilm1: null,
  tekstT: '',
  teksTq: '',
  onLocMas: 'WATCHED',
  changeOnLocMasW() {
    this.onLocMas = 'WATCHED';
  },
  changeOnLocMasq() {
    this.onLocMas = 'QUEUE';
  },
  changeOnLibrary() {
    this.onLibrary ? (this.onLibrary = false) : (this.onLibrary = true);
  },
  resetFilms() {
    this.init();
    this.filmArray = [];
  },
  setFilms(arrayA) {
    this.resetFilms();
    this.filmArray = arrayA;
  },
  setFilmId(id) {
    this.filmId = Number(id);
  },
  setDw(pos) {
    this.deletePosition = pos;
  },
  setDq(pos) {
    this.deletePositionQ = pos;
  },
  searchFilm() {
    this.FilmById = this.filmArray.find(movi => movi.id === this.filmId);
  },

  renameBtnW() {
    this.teksT = this.adwBtn.innerText;
    this.teksT === 'ADD TO WATCHED'
      ? this.addFilm(
          this.FilmById,
          this.LOCAL_STORAGE_KEY,
          this.adwBtn,
          'WATCHED'
        )
      : this.removeFilm(
          this.deletePosition,
          this.LOCAL_STORAGE_KEY,
          this.adwBtn,
          'WATCHED'
        );
  },
  renameBtnQ() {
    this.teksTq = this.atqBtn.innerText;
    this.teksTq === 'ADD TO QUEUE'
      ? this.addFilm(
          this.FilmById,
          this.LOCAL_STORAGE_KEY_QUEUE,
          this.atqBtn,
          'QUEUE'
        )
      : this.removeFilm(
          this.deletePositionQ,
          this.LOCAL_STORAGE_KEY_QUEUE,
          this.atqBtn,
          'QUEUE'
        );
  },

  refresh() {
    if (this.onLocMas === 'QUEUE') {
      this.queueBtn.click();
      return;
    }
    if (this.onLocMas === 'WATCHED') {
      this.watchedBtn.click();
      return;
    }
  },
  addlisten() {
    this.adwBtn = document.querySelector('.modal-watched');
    this.atqBtn = document.querySelector('.modal-queue');
    this.adwBtn.addEventListener('click', this.renameBtnW.bind(this));
    this.atqBtn.addEventListener('click', this.renameBtnQ.bind(this));
  },
  removlisten() {
    this.adwBtn.removeEventListener('click', this.renameBtnW.bind(this));
    this.atqBtn.removeEventListener('click', this.renameBtnQ.bind(this));
  },
  addFilm(object, locstorkey, refsBtn, tekst) {
    // --- Додавання фільму до localStorage
    try {
      this.arrayF = [];
      this.arrayF = JSON.parse(localStorage.getItem(locstorkey));
      this.arrayF.push(object);
      localStorage.setItem(locstorkey, JSON.stringify(this.arrayF));
      refsBtn.innerText = 'REMOVE FROM ' + tekst;
      if (this.onLibrary) {
        this.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  },
  removeFilm(deleteP, locstorkey, refsBtn, tekst) {
    // --- Видалення фільму з localStorage
    try {
      this.arrayF = [];
      this.arrayF = JSON.parse(localStorage.getItem(locstorkey));
      this.arrayF.splice(deleteP, 1);
      localStorage.setItem(locstorkey, JSON.stringify(this.arrayF));
      refsBtn.innerText = 'ADD TO ' + tekst;
      if (this.onLibrary) {
        this.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  },
  statusBtn() {
    this.searchFilm();
    this.addlisten();
    this.setDw(
      this.checkВutton(
        this.FilmById,
        this.LOCAL_STORAGE_KEY,
        this.adwBtn,
        'WATCHED'
      )
    );
    this.setDq(
      this.checkВutton(
        this.FilmById,
        this.LOCAL_STORAGE_KEY_QUEUE,
        this.atqBtn,
        'QUEUE'
      )
    );
  },
  checkВutton(object, locstorkey, refsBtn, tekst) {
    this.arrayFilms = [];
    try {
      this.arrayFilms = JSON.parse(localStorage.getItem(locstorkey));
    } catch (error) {
      console.log(error);
    }
    if (!this.arrayFilms.length) {
      // --- Список фільмів збережених у памяті пустий кнопка add to watch"
      refsBtn.innerText = 'ADD TO ' + tekst;
      return 0;
    } else {
      this.resultSearch = this.arrayFilms.findIndex(
        option => option.id === object.id
      );
      if (this.resultSearch > -1) {
        // --- Фільм знаходиться в збережених у памяті кнопка remove під номером - ", resultSearch
        refsBtn.innerText = 'REMOVE FROM ' + tekst;
        return this.resultSearch;
      } else {
        // --- Фільма немає в збережених у памяті кнопка add to watch
        refsBtn.innerText = 'ADD TO ' + tekst;
        return -1;
      }
    }
  },

  massivout(locstorkey) {
    try {
      return JSON.parse(localStorage.getItem(locstorkey));
    } catch (error) {
      console.log(error);
    }
  },

  init() {
    try {
      this.saveFilm = localStorage.getItem(this.LOCAL_STORAGE_KEY);
      if (!this.saveFilm) {
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify([]));
      }
      this.saveFilm1 = localStorage.getItem(this.LOCAL_STORAGE_KEY_QUEUE);
      if (!this.saveFilm1) {
        localStorage.setItem(this.LOCAL_STORAGE_KEY_QUEUE, JSON.stringify([]));
      }
    } catch (error) {
      console.log(error);
    }
  },

  inWatched() {
    this.watchedBtn.classList.add('orng');
    this.queueBtn.classList.remove('orng');
    createlibraryGallery(this.massivout(this.LOCAL_STORAGE_KEY));
    this.changeOnLocMasW();
  },
  inQueue() {
    this.queueBtn.classList.add('orng');
    this.watchedBtn.classList.remove('orng');
    createlibraryGallery(this.massivout(this.LOCAL_STORAGE_KEY_QUEUE));
    this.changeOnLocMasq();
  },

  initL() {
    this.watchedBtn.addEventListener('click', this.inWatched.bind(this));
    this.queueBtn.addEventListener('click', this.inQueue.bind(this));
  },
};
