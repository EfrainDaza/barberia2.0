document.addEventListener("DOMContentLoaded", () => {

    let marquee = (selector_list , speed) => {

        const list = document.querySelector(selector_list);
         //console.log(list)
        let desplazamiento = 0

            setInterval(()=>{
                /* ponemos un margen negativo a la lista */
                list.style.transform = `translateX(${-desplazamiento}px)`;

                // si es mayor al ancohe de la ventana
                if(desplazamiento > list.clientWidht){
                    //se resetea la variable asi se genera el buvle infito
                    desplazamiento = 0;
                }

                // al desplazamineto le sumamos la velocidad
                desplazamiento = desplazamiento + speed;

            });

        
    }
    marquee(".marquee__list", 0.2);
})