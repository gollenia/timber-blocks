const Modal = {

    modals: false,

    init() {
        let modals = document.querySelectorAll("a[data-modal]");
        this.modals = modals;
        if(modals) {
            for (let index = 0; index < modals.length; index++) {
                Modal.add(modals[index]) 
            }
            return modals;
        }
        return false;
    },

    add: function(modal) {
        modal.addEventListener("click", this.openModal.bind(event, modal))
    },

    openModal: function(modal, event) {
        const modalWindow = document.getElementById(modal.dataset.modal);
        modalWindow.classList.add('modal--open')
        setTimeout(function(){ 
            modalWindow.classList.add('modal--animate-open')
        }, 10);
        modalWindow.addEventListener("click", Modal.closeModal.bind(event, modal))
        modalWindow.querySelector('.modal__close').addEventListener("click", Modal.closeModal.bind(event, modal))

        
    },

    closeModal: function(modal, event) {
        if(event.target !== event.currentTarget) return;
        const modalWindow = document.getElementById(modal.dataset.modal);
        modalWindow.classList.remove('modal--animate-open')
        setTimeout(function(){ 
            modalWindow.classList.remove('modal--open')
        }, 1000);
    }
}

export default Modal