document.addEventListener('DOMContentLoaded', () => {
    const slideWrapper = document.getElementById('slideWrapper');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const slides = document.querySelectorAll('.slide-item');

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Función para actualizar la posición del carrusel
    function updateSlider() {
        // Obtenemos el ancho actual de una sola diapositiva visible.
        // Usamos slides[0].clientWidth para obtener el ancho real en píxeles.
        // Esto es más robusto que solo usar porcentajes fijos si hay renderizados sub-píxel.
        const slideWidth = slides[0].clientWidth; // Obtiene el ancho calculado de la primera slide
        const offset = -currentIndex * slideWidth; // Calcula el desplazamiento en píxeles

        slideWrapper.style.transform = `translateX(${offset}px)`; // Aplica la transformación en píxeles
    }

    // Asegurarse de que el slider se ajuste si el tamaño de la ventana cambia
    window.addEventListener('resize', updateSlider);

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Vuelve a la primera slide
        }
        updateSlider();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1; // Va a la última slide
        }
        updateSlider();
    });

    // Inicializa el carrusel
    updateSlider();

    // Opcional: Deslizamiento automático
    
    const autoSlideInterval = 5000;
    let slideTimer = setInterval(() => {
        nextButton.click();
    }, autoSlideInterval);

    slideWrapper.addEventListener('mouseenter', () => {
        clearInterval(slideTimer);
    });

    slideWrapper.addEventListener('mouseleave', () => {
        slideTimer = setInterval(() => {
            nextButton.click();
        }, autoSlideInterval);
    });
    
});