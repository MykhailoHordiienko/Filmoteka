const spinRef = document.querySelector('.js-spinner');

function startSpin() {
  spinRef.classList.add('is-open');
}

function stopSpin() {
  setTimeout(function () {
    spinRef.classList.remove('is-open');
  }, 300);
}

export { startSpin, stopSpin };