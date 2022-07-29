;(function () {
    'use strict'
    let myIndex = 0;

    const get = (className) =>{
        return document.getElementsByClassName(className)
    }

    const getId = (idname) => {
        return document.getElementById(idname);
    }

    const getClass = (element) => {
        return document.querySelector(element);
    }

    const $dropbtn = getClass('.dropbtn');
    const  $dropbtn1 = getClass('.dropbtn1');

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

    const doDropDown = () => {
        //let $dropdownlist = getId("myDropdown");
        //console.log($dropdownlist.classList);
        document.getElementById("myDropdown").classList.toggle("show");
    }
 
    
    const doDropDown1 = () => {
        //let $dropdownlist = getId("myDropdown");
        //console.log($dropdownlist);
        document.getElementById("myDropdown1").classList.toggle("show");
        
    }


    const init = () => {
        carousel();

        window.addEventListener('click',(event) =>{
            if (!(event.target.matches('.dropbtn') ||event.target.matches('.dropbtn1') )) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }

            
          })

       
        $dropbtn.addEventListener('click', doDropDown);
        $dropbtn1.addEventListener('click', doDropDown1);
    }

    
    init();


})()