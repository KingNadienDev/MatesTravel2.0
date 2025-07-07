 // Lógica del Slider
        document.addEventListener('DOMContentLoaded', () => {
            const slideWrapper = document.getElementById('slideWrapper');
            const slides = document.querySelectorAll('.slide-item');
            const prevButton = document.getElementById('prevButton');
            const nextButton = document.getElementById('nextButton');
            let currentIndex = 0;
            const totalSlides = slides.length;

            // Función para mostrar el slide actual
            const showSlide = (index) => {
                // Asegura que el índice esté dentro de los límites
                if (index >= totalSlides) {
                    currentIndex = 0; // Vuelve al primer slide si se supera el límite
                } else if (index < 0) {
                    currentIndex = totalSlides - 1; // Va al último slide si se retrocede desde el primero
                } else {
                    currentIndex = index;
                }
                // Calcula la cantidad de desplazamiento necesaria
                const offset = -currentIndex * 100; // Desplaza el 100% del ancho del slide
                slideWrapper.style.transform = `translateX(${offset}%)`;
            };

            // Función para ir al slide siguiente
            const nextSlide = () => {
                showSlide(currentIndex + 1);
            };

            // Función para ir al slide anterior
            const prevSlide = () => {
                showSlide(currentIndex - 1);
            };

            // Añade los event listeners a los botones
            nextButton.addEventListener('click', nextSlide);
            prevButton.addEventListener('click', prevSlide);

            // Inicializa el slider mostrando el primer slide
            showSlide(currentIndex);
        });