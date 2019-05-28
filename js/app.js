const cartInfo = document
  .getElementById('cart-info')
  .addEventListener('click', () => {
    const cart = document.getElementById('cart');
    cart.classList.toggle('show-cart');
  });
