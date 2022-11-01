const refs = {
  openModalBtn: document.querySelector('[data-modal-open-team]'),
  closeModalBtn: document.querySelector('[data-modal-close-team]'),
  modal: document.querySelector('[data-modal-team]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal(event) {
  event.preventDefault();
  refs.modal.classList.toggle('is-hidden__footer');
}
