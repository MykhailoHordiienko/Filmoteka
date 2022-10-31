const API_KEY = '2f8d6050c74d5f454a522d74a8cedbb8';
const BASE_URL = 'https://api.themoviedb.org/3';

const YouTube_KEY = 'AIzaSyBsjU_AyffyMHxyv2KNKiEnDPB3n0dY8XE';
const YouTube_URL = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet';
import noimage from '../images/noimage.jpg';

export default class fetchApiFilms {
  constructor() {
    this.searchQuery = ''; //Ключевое слово для поиска фильма
    this.page = 1; //Текущая страница запроса на пагинаторе
    this.maxPage = 1; // Shu
  }

  fetchPopularMoviesMaxPage() {
    return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`).then(r =>
      r.json(),
    );
  } // Shu

  fetchPopularMovies() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${this.page}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        return this.fetchFilmGenre().then(genres => {
          return results.map(result => ({
            ...result,
            release_date: result.release_date // Shu
              ? result.release_date.split('-')[0]
              : result.release_date,
            genres: this.filterGenres(genres, result),
            poster_path: result.poster_path ? `https://image.tmdb.org/t/p/w500/${result.poster_path}` : noimage,
          }));
        });
      });
  }

  filterGenres(genres, result) {
    let genreList = result.genre_ids
      .map(id => genres.filter(genre => genre.id === id).map(genre => genre.name))
      .flat();
    if (genreList.length === 2) genreList = [`${genreList[0]}, ${genreList[1]}`];
    if (genreList.length > 2) genreList = `${genreList[0]}, ${genreList[1]}, Other`;
    return genreList;
  }

  filterGenresLib(result) {
    let genreList = result.genres.map(genre => genre.name).flat();
    if (genreList.length === 2) genreList = [`${genreList[0]}, ${genreList[1]}`];
    if (genreList.length > 2) genreList = `${genreList[0]}, ${genreList[1]}, Other`;
    return genreList;
  }

  fetchSearchMovies() {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        return this.fetchFilmGenre().then(genres => {
          return results.map(result => ({
            ...result,
            release_date: result.release_date
              ? result.release_date.split('-')[0]
              : result.release_date,
            genres: this.filterGenres(genres, result),
            poster_path: result.poster_path ? `https://image.tmdb.org/t/p/w500/${result.poster_path}` : noimage,
          }));
        });
      });
  }

  fetchFilmByID(filmId) {
    const url = `${BASE_URL}/movie/${filmId}?api_key=${API_KEY}&language=en-US`;
    return fetch(url)
      .then(response => response.json())
      .then(result => ({
        ...result,
        release_date: result.release_date // Shu
          ? result.release_date.split('-')[0]
          : result.release_date,
        genres: this.filterGenresLib(result),
        poster_path: result.poster_path ? `https://image.tmdb.org/t/p/w500/${result.poster_path}` : noimage,
      }));
  }

  fetchFilmGenre() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    return fetch(url)
      .then(response => response.json())
      .then(({ genres }) => {
        return genres;
      });
  }

  fetchPopularMoviesPages() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${this.page}`;
    return fetch(url).then(response => response.json());
  }

  fetchSearchMoviesPages() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`;
    return fetch(url).then(response => response.json());
  }

  fetchTrailers(filmName) {
    const url = `${YouTube_URL}&q=${filmName} + "trailer"&key=${YouTube_KEY}`;
    return fetch(url)
      .then(data => data.json())
      .then(data => {
        return data.items[0].id.videoId;
      });
  }

  get pageNum() {
    return this.page;
  }

  set pageNum(newPage) {
    this.page = newPage;
  }

  resetPageNum() {
    return (this.page = 1);
  }
  // ------------- 4 paginat. Shu-----------
  get maxPageNum() {
    return this.maxPage;
  }

  set maxPageNum(newPageNum) {
    this.maxPage = newPageNum;
  }
  // ------------- 4 paginat. end-----------
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}