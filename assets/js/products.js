document.addEventListener("DOMContentLoaded", () => {
    
    //capturamos elementos
    let category_item = document.getElementsByClassName("product__link")
    //console.log(category_item)
        //recorre todos los item de lista
    for (let i = 0 ; i < category_item.length ; i++){
        
        category_item[i].addEventListener("click", function(){
            //obtnemos todos los elementos con la misma clase
            let category__items = document.getElementsByClassName("product__link")
            //iteramos los elementos y quitamos clicked 
            for (let j = 0; j < category__items.length; j++){
                category__items[j].classList.remove("product__clicked-link");
            }
            this.classList.add("product__clicked-link");
        })
    }
});