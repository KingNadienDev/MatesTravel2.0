// cart.js
const CART_STORAGE_KEY = 'matestravel_cart';

// Función para obtener el carrito del localStorage
function getCart() {
    const cartString = localStorage.getItem(CART_STORAGE_KEY);
    return cartString ? JSON.parse(cartString) : [];
}

// Función para guardar el carrito en el localStorage
function saveCart(cart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

// Función para añadir un ítem al carrito
function addItemToCart(name, price) {
    let cart = getCart();
    // Busca si el ítem ya existe para actualizar la cantidad o añadirlo
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: name, price: price, quantity: 1 });
    }
    saveCart(cart);
    console.log('Item añadido al carrito:', name, 'Cantidad:', existingItem ? existingItem.quantity : 1);
    alert(`"${name}" ha sido añadido a tu carrito.`); // Opcional: mostrar un mensaje
}

// Función para eliminar un ítem del carrito (útil en la página del carrito)
function removeItemFromCart(name) {
    let cart = getCart();
    cart = cart.filter(item => item.name !== name);
    saveCart(cart);
    console.log('Item eliminado del carrito:', name);
}

// Función para vaciar el carrito
function clearCart() {
    localStorage.removeItem(CART_STORAGE_KEY);
    console.log('Carrito vaciado.');
}

// Exportar funciones si se necesita (para módulos, aquí no es estrictamente necesario ya que son globales)
// window.getCart = getCart;
// window.addItemToCart = addItemToCart;
// etc.