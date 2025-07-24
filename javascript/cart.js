document.addEventListener('DOMContentLoaded', () => {
  const defaultItems = [];
  let cart = [...defaultItems];

  const modal = document.getElementById('cart-modal');
  const openBtn = document.getElementById('open-cart-btn');
  const closeBtn = document.getElementById('close-cart');
  const cartItemsContainer = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  const payBtn = document.getElementById('pay-btn');
  const paymentSection = document.getElementById('payment-section');
  const submitPayment = document.getElementById('submit-payment');

  const statusOverlay = document.getElementById('status-overlay');
  const statusIcon = document.getElementById('status-icon');
  const statusText = document.getElementById('status-text');

  if (openBtn) {
    openBtn.addEventListener('click', e => {
      e.preventDefault();
      modal.classList.add('show');
      renderCart();
    });
  }

  closeBtn.addEventListener('click', () => modal.classList.remove('show'));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      modal.classList.remove('show');
    }
  });

  function renderCart() {
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
      const div = document.createElement('div');
      div.className = 'd-flex justify-content-between align-items-center mb-2';
      div.innerHTML = `
        <span>${item.name} ($${item.price.toFixed(2)})</span>
        <div>
          <button onclick="updateQuantity(${item.id}, -1)" class="btn btn-sm btn-outline-secondary">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity(${item.id}, 1)" class="btn btn-sm btn-outline-secondary">+</button>
          <button onclick="removeItem(${item.id})" class="btn btn-sm btn-danger">x</button>
        </div>
      `;
      cartItemsContainer.appendChild(div);
    });
    totalEl.textContent = cart.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2);
  }

  window.updateQuantity = (id, change) => {
    cart = cart.map(item => item.id === id ? { ...item, quantity: Math.max(item.quantity + change, 1) } : item);
    renderCart();
  };

  window.removeItem = id => {
    cart = cart.filter(item => item.id !== id);
    renderCart();
  };

  window.addToCart = product => {
    const exists = cart.find(i => i.id === product.id);
    if (exists) window.updateQuantity(product.id, 1);
    else { cart.push({ ...product, quantity: 1 }); renderCart(); }
  };

  payBtn.addEventListener('click', () => {
    paymentSection.classList.add('show');
    payBtn.style.display = 'none';
    document.getElementById('card-number').value = '';
    document.getElementById('expiry').value = '';
    document.getElementById('cvv').value = '';
  });

  submitPayment.addEventListener('click', () => {
    const cn = document.getElementById('card-number').value;
    const exp = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    const success = cn === '4111111111111111' && exp === '12/34' && cvv === '123';

    statusIcon.src = success ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1200px-Yes_Check_Circle.svg.png' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Cross_red_circle.svg/1024px-Cross_red_circle.svg.png';
    statusText.textContent = success ? 'Compra Exitosa' : 'Error en el Pago';
    statusOverlay.classList.remove('hidden');

    setTimeout(() => {
      statusOverlay.classList.add('hidden');
      modal.classList.remove('show');
      paymentSection.classList.remove('show');
      payBtn.style.display = 'block';
    }, 3000);
  });
});