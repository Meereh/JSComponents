;(function(){

    const get = (element) =>{
        return document.querySelector(element);
    }

    const $button = get('.modal_open_button')
    const $modal = get('.modal')
    const $modalConfirmButton = get('.modal_button.confirm')
    const $modalCancelButton = get('.modal_button.cancel')
    const $body = get('body')

    const toggleModal = () => {
        $modal.classList.toggle('show')
        $body.classList.toggle('scroll_lock')
    }

    const init = () => {
        $button.addEventListener('click', toggleModal);

        $modalConfirmButton.addEventListener('click', toggleModal);

        $modalCancelButton.addEventListener('click', toggleModal);

        window.addEventListener('click', (e)=>{
            //console.log(e.target);
            if(e.target===$modal){
                toggleModal();
            }
        })
    };

    init();

})();