export default function modalMarkup(movie) {
  return `
    <div class="backdrop" data-modal>
      <div class="modal">
        <button type="button" class="modal-close" data-modal-close>
          <img src="./images/close.svg" alt="modal-close" width="30" height="30" />
        </button>
        <div class="modal-poster">
          <img
            class="modal-poster__img"
            src="https://image.tmdb.org/t/p/original/${movie.poster_path}"
            alt="${movie.title}"
          />
        </div>
        <div class="modal-descr">
          <p class="modal-title">${movie.title}</p>
          <table class="modal-info">
            <tr>
              <td class="modal-info__param">Vote / Votes</td>
              <td class="modal-info__data">
                <span class="modal-info__data-vote">${movie.vote_average}</span>
                /
                <span class="modal-info__data-votes">${movie.vote_count}</span>
              </td>
            </tr>
            <tr>
              <td class="modal-info__param">Popularity</td>
              <td class="modal-info__data">${movie.popularity}</td>
            </tr>
            <tr>
              <td class="modal-info__param">Original Title</td>
              <td class="modal-info__data">${movie.original_title}</td>
            </tr>
            <tr>
              <td class="modal-info__param">Genre</td>
              <td class="modal-info__data">${movie.genres[0].name}</td>
            </tr>
          </table>
          <h4 class="modal-about">ABOUT</h4>
          <p class="modal-description">${movie.overview}</p>
          <div class="modal-btns">
            <button class="btn modal-watched">ADD TO WATCHED</button>
            <button class="btn modal-queue">ADD TO QUEUE</button>
          </div>
        </div>
      </div>
    </div>`;
}
