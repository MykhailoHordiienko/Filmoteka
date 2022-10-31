const refs = {
  searchError: document.querySelector('.header__error-text'),
  emptyGalleryText: document.querySelector('.info-notify-text'),
  emptyGalleryImg: document.querySelector('.info-notify'),
};

// -----  notifications
function renderInfoMsg() {
  refs.searchError.classList.remove('is-hidden');
  setTimeout(() => refs.searchError.classList.add('is-hidden'), 2500);
}

function renderEmptyGalleryMsg(text) {
  refs.emptyGalleryText.textContent = `${text}`;
  refs.emptyGalleryImg.classList.remove('is-hidden');
}

function hideInfoImg() {
  refs.emptyGalleryImg.classList.add('is-hidden');
}

export { renderInfoMsg, hideInfoImg, renderEmptyGalleryMsg };