export default function cardTpl(movies) {
  return (
    <li class="films__item">
      <a href="" class="films__wrapper">
        <div class="films__img-wrapper">
          <img class="films__img" src="" alt="" loading="lazy" />
        </div>

        <div class="img__row">
          <p></p>
          <p></p>
        </div>

        <div class="films__info">
          <p class="films__name"></p>

          <p class="films__description"></p>
        </div>
      </a>
    </li>
  );
}
