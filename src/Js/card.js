import {filmsTemps} from './buttons';
export  function cardTpl(movies) {
  filmsTemps.setFilms(movies);
  return movies.map(movi => 
  `<li class="card">
  <div class="films__img-wrapper">
    <img class="card-img"   
    src="${movi.poster_path}" alt="" loading="lazy" datafilmid="${movi.id}" />
    <div class="film">
      <p  class="film-title ">${movi.original_title
      }</p>
      <span class="film-release">${movi.genres}</span>
      <span class="film-release">${movi.release_date}</span>
    </div>
  </div>
</li>`
).join(" ");
  }
