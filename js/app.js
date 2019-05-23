const cartInfo = document.getElementById('cart-info');

cartInfo.addEventListener('click', () => {
  const cart = document.getElementById('show-cart');
  cart.classList.toggle('show-cart');
  console.log(cart);
});
