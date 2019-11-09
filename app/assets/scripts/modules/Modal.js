import $ from 'jquery';

class Modal {
    constructor(){
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
    }

    events(){
        //clicking the open modal button
        this.openModalButton.click(this.openModal.bind(this));

        //clicking the x close button
        this.closeModalButton.click(this.closeModal.bind(this));

        //user push any key
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e){
        //27 is keyCode for escape key
        if (e.keyCode == 27){
            this.closeModal();
        }
    }

    openModal(){
        this.modal.addClass("modal--is-visible");
        return false;
    }

    closeModal(){
        this.modal.removeClass("modal--is-visible");
    }
}
export default Modal;