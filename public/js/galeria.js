//Este evento se dispara cuando el DOM (la estructura HTML de la página) ha sido completamente cargado

document.addEventListener('DOMContentLoaded', function() {
    //CAPTURAMOS ELEMTOS
    const images = document.querySelectorAll('.gallery__img');
    //indice/img actual visible en la galeria
    let currentIndex = 0;
    //recorre las img o el total de las img
    const totalImages = images.length;

    // FUNCION PARA MOSTRAR IMG ACTUAL
    function showImage(index) {
        //itera sobre las img
        images.forEach((image, i) => {
            //si el indice coincide los muestra, sino lo oculta
            if (i === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
        // ACTUALIZA LA IMG ACTUAL
        currentIndex = index;
    }

    // CAPTURAMOS BOTONES
    const nextButton = document.querySelector('.next-button');
    // eventos cuando hacemos click
    nextButton.addEventListener('click', nextImage);

    // Función para cambiar a la siguiente imagen
    function nextImage() {
        //calcula el indice de la next img
        currentIndex = (currentIndex + 1) % totalImages;
        //resultado de next img
        showImage(currentIndex);
    }

      // CAPTURAMOS BOTONES
      const prevButton = document.querySelector('.prev-button');
      // eventos cuando hacemos click
      prevButton.addEventListener('click', prevImage);

    // Función para cambiar a la imagen anterior
    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    // MUESTRA LA PIRMERI IMG AL CARGAR LA PAGINA
    showImage(currentIndex);

    // AUTOSLIDER CON SEGUNDOS
    setInterval(nextImage, 3000);

  
});