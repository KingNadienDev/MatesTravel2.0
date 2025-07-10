// popup.js
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los botones que abren popups
    const openPopupButtons = document.querySelectorAll('.open-popup-btn');

    // Selecciona todos los botones que cierran popups
    const closePopupButtons = document.querySelectorAll('.close-popup-btn');

    // Selecciona todos los botones para añadir al carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    // --- Lógica para abrir/cerrar popups ---

   // Dentro de popup.js
openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popupId = button.dataset.target;
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'flex'; // ¡Aquí se hace visible!
        }
    });
});

    closePopupButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.closest('.popup');
            if (popup) {
                popup.style.display = 'none'; // Oculta el popup
            }
        });
    });

    window.addEventListener('click', (event) => {
        // Asegura que el clic fuera del contenido del popup lo cierre
        document.querySelectorAll('.popup').forEach(popup => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    });

    // --- Lógica para añadir al carrito ---

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const packageName = button.dataset.packageName;
            const packagePrice = parseFloat(button.dataset.packagePrice); // Asegúrate de convertir a número

            // Llama a la función global para añadir al carrito (definida en cart.js)
            if (typeof addItemToCart === 'function') {
                addItemToCart(packageName, packagePrice);
                // Opcional: Cerrar el popup después de añadir al carrito
                const popup = button.closest('.popup');
                if (popup) {
                    popup.style.display = 'none';
                }
            } else {
                console.error('La función addItemToCart no está disponible. Asegúrate de que cart.js se cargue primero.');
            }
        });
    });
});