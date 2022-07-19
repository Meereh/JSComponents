;(function(){
    'use strict';

    const onKeyDown = (e) => {
        const keycode = e.keyCode;
        console.log (keycode)
    }

    const init = () => {
        window.addEventListener('keydown', onKeyDown)
    }

    init();
})()