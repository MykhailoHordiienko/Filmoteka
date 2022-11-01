import {
  fetchFilms,
  createPopularMoviesGallery,
  clearGalleryMarkup,
  createSearchMoviesGallery,
} from './gallery.js';

const API_KEY = '2f8d6050c74d5f454a522d74a8cedbb8';
const BASE_URL = 'https://api.themoviedb.org/3';
const total_results = (page = 1) => {
  const urlTrending = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${page}`;
  const urlTrendingSearch = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${fetchFilms.searchQuery}`;
  let url = fetchFilms.searchQuery ? urlTrendingSearch : urlTrending;

  return fetch(url)
    .then(response => response.json())
    .then(res => {
      return res.total_pages;
    });
};

const refs = {
  dec: document.querySelector('#dec'),
  inc: document.querySelector('#inc'),
  page_numbers: document.querySelectorAll('.pag_text'),
  page_items: document.querySelectorAll('.pag_item'),
  pageMax: document.querySelector('.last_page'),
  dotsLeft: document.querySelector('[data-dots="left"]'),
  dotsRigth: document.querySelector('[data-dots="rigth"]'),
  middleBtn: document.querySelector('#l3'),
  btn4: document.querySelector('#l4'),
  btn2: document.querySelector('#l2'),
  pageFirst: document.querySelector('.first_page'),
};
// ===========btnarrow======
refs.inc.addEventListener('click', () => {
  total_results().then(data => {
    if (+refs.page_numbers[4].textContent === data) {
      refs.inc.disabled = true;
      return;
    }

    if (refs.dec.disabled == true) {
      refs.dec.disabled = false;
    }

    refs.page_items.forEach(el => {
      if (
        +el.firstChild.textContent === 1 ||
        el.firstChild.textContent === '...' ||
        el.firstChild.textContent === refs.pageMax.firstChild.textContent
      ) {
        return;
      }
      el.firstChild.textContent++;
     

    });


  });
});

refs.dec.addEventListener('click', () => {
  if (refs.page_numbers[0].textContent === '1') {
    refs.dec.disabled = true;
    return;
  }

  if (refs.inc.disabled == true) {
    refs.inc.disabled = false;
  }

  refs.page_numbers.forEach(el => {
    el.textContent = +el.textContent - 1;
  });
});
// ===========btnpag======
refs.page_items.forEach(el => {
  el.addEventListener('click', evt => {
    fetchFilms.pageNum = el.firstChild.textContent;
    removeActivClassBtn();

    if (el.firstChild.textContent === '...') {
      return;
    }

    setTimeout(() => {
      addActiveClassBtn(el.firstChild.textContent);
    }, 300);

    if (evt.currentTarget === refs.btn4) {
      refs.page_items.forEach(el => {
        if (
          +el.firstChild.textContent === 1 ||
          el.firstChild.textContent === '...' ||
          el.firstChild.textContent === refs.pageMax.firstChild.textContent
        ) {
          return;
        }
        el.firstChild.textContent++;
      });
      hiddePagElremove(refs.dotsLeft);
    }

    if (evt.currentTarget === refs.btn2 && +el.firstChild.textContent === 3) {
      refs.page_items.forEach(el => {
        if (
          +el.firstChild.textContent === 1 ||
          el.firstChild.textContent === '...' ||
          el.firstChild.textContent === refs.pageMax.firstChild.textContent
        ) {
          return;
        }
        el.firstChild.textContent--;
      });
      hiddePagEladd(refs.dotsLeft);
    }

    if (evt.currentTarget === refs.btn2 && +el.firstChild.textContent > 3) {
      refs.page_items.forEach(el => {
        if (
          +el.firstChild.textContent === 1 ||
          el.firstChild.textContent === '...' ||
          el.firstChild.textContent === refs.pageMax.firstChild.textContent
        ) {
          return;
        }
        el.firstChild.textContent--;
      });
    }

    if (+el.firstChild.textContent === 1) {
      hiddePagElremove(refs.dotsRigth);
      refs.btn2.firstChild.textContent = '2';
      refs.middleBtn.firstChild.textContent = '3';
      refs.btn4.firstChild.textContent = '4';
      hiddePagEladd(refs.dotsLeft);
    }

    if (el.firstChild.textContent === refs.pageMax.firstChild.textContent) {
      hiddePagElremove(refs.dotsLeft);
      refs.btn2.firstChild.textContent = +refs.pageMax.firstChild.textContent - 3;
      refs.middleBtn.firstChild.textContent = +refs.pageMax.firstChild.textContent - 2;
      refs.btn4.firstChild.textContent = +refs.pageMax.firstChild.textContent - 1;
      hiddePagEladd(refs.dotsRigth);
    }

    if (evt.currentTarget === refs.btn2 && +refs.pageMax.firstChild.textContent - 3) {
      hiddePagElremove(refs.dotsRigth);
    }

    if (
      evt.currentTarget === refs.btn4 &&
      +evt.currentTarget.firstChild.textContent === +refs.pageMax.firstChild.textContent - 1
    ) {
      hiddePagEladd(refs.dotsRigth);
    }

    clearGalleryMarkup();

    if (!fetchFilms.searchQuery) {
      createPopularMoviesGallery();
    } else {
      createSearchMoviesGallery();
    }
  });
});

function removeActivClassBtn() {
  refs.page_items.forEach(el => el.classList.remove('pag_item__current'));
}

function addActiveClassBtn(fetchFilmspageNum) {
  refs.page_items.forEach(el => {
    if (+fetchFilms.pageNum === +el.firstChild.textContent) {
      el.classList.add('pag_item__current');
    }
  });
}

function hiddePagEladd(elem) {
  elem.classList.add('is-hidden');
}

function hiddePagElremove(elem) {
  elem.classList.remove('is-hidden');
}

function getMaxPages() {
  total_results().then(pages => (refs.pageMax.firstChild.textContent = pages));
}

function resetPagination() {
  hiddePagElremove(refs.dotsRigth);
  refs.btn2.firstChild.textContent = '2';
  refs.middleBtn.firstChild.textContent = '3';
  refs.btn4.firstChild.textContent = '4';
  hiddePagEladd(refs.dotsLeft);
  removeActivClassBtn();
  refs.pageFirst.classList.add('pag_item__current');
}

export { getMaxPages, resetPagination };