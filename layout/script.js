;(function () {
    'use strict'
    let myIndex = 0;

    const get = (className) =>{
        return document.getElementsByClassName(className)
    }

    const getId = (idname) => {
        return document.getElementById(idname);
    }



    const carousel=() => {
        let x = get("shopimg");
        for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 2000); 
    }


 

    const init = () => {
        carousel();

    }

    
    init();


})()