export default class Modal {
  constructor(openButton, closeButton, modalContainer) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.modalContainer = document.querySelector(modalContainer);
    this.activeClass = "ativo";
    // bind this ao callback para fazer refencia a classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutModal = this.clickOutModal.bind(this);
  }

  // abre/fecha modal
  toggleModal() {
    this.modalContainer.classList.toggle(this.activeClass);
  }

  // adiciona evento toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha modal ao clicar fora do modal
  clickOutModal(event) {
    if (event.target === this.modalContainer) this.toggleModal();
  }

  // adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.openButton.addEventListener("click", this.eventToggleModal);
    this.closeButton.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.clickOutModal);
  }

  init() {
    if (this.openButton && this.closeButton && this.modalContainer) {
      this.addModalEvents();
    }
    return this;
  }
}
