document.addEventListener("DOMContentLoaded" , () => {
    //capturamos elementos 
    let mobile_btn = document.querySelector(".navbar__mobile-btn-container");
    let mobile_menu = document.querySelector(".nav-mobile__list");

    mobile_btn.addEventListener("click", () => {
        //creamis la clase menu_open
        let menu_open = document.querySelector(".menu_open");
     
        if(!menu_open){
            mobile_menu.style.display = "block";
            mobile_menu.classList.add("menu_open")
        }else{
            mobile_menu.style.display = "none";
            mobile_menu.classList.remove("menu_open")
        }

    })

    //redimensionado
    window.addEventListener("resize", () => {
        let win = parseFloat(document.body.clientWidth);

        if(win>832){
            mobile_menu.style.display = "none";
            mobile_menu.classList.remove("menu_open")
        }
    })
});