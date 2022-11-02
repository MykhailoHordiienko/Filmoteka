const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '1f93214cb1bbadcc143eeb01d552ab8c';

export default class CountriesApiService {
  constructor() {
    this.id = '';
  }

  fetchMovie() {
    const url = `${BASE_URL}${this.id}?api_key=${API_KEY}`;

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          error => console.log(error);
        }
        return response.json();
      })
      .catch(error => console.log(error));
  }

  get query() {
    return this.id;
  }

  set query(newQuery) {
    this.id = newQuery;
  }
}
