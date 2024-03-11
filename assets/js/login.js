document.addEventListener("DOMContentLoaded",() => {

    // Función para abrir la ventana modal
    document.getElementById("openModal").onclick = function(){

    document.getElementById('myModal').style.display = "block";
    };

    // Función para cerrar la ventana modal
    document.getElementById("closeModal").onclick = function (){

        document.getElementById('myModal').style.display = "none";
    };
    
});


// se puede capturar los elementos de la manera que se realiazo anteriormente 
//pero tambien en el archivo HTML podemos colocar un la propiedad onClick="openModal()"
// de esa manera es mucho mas sencillo de escribir lineas y cumple la misma funcion
// sin colocar la linea N1.

// Función para abrir la ventana modal
/*function openModal(){
    let modal = document.getElementById("myModal")
    //cambiamos propierdas 
    modal.style.display = "block";
 }*/
    

// Función para cerrar la ventana modal

    /*document.getElementById('myModal').style.display = "none";*/


