//******************************* SHOW THE CART *************************************
const cartInfo = document.getElementById('cart-info');

cartInfo.addEventListener('click', () => {
  const cart = document.getElementById('cart');
  cart.classList.toggle('show-cart');
});

//**************************** ADD ITEMS TO THE CART *****************************
// Normally this would be done using an attribute id to store each icons unique
// identification.  Then we would look this up in a database and use this information
// to populate the shopping cart.  (See 'Comfy House' project for an example using local storage)
const cartBtn = document.querySelectorAll('.store-item-icon');

cartBtn.forEach(btn => {
  btn.addEventListener('click', event => {
    // console.log(event.target);

    // Traversing the DOM
    if (event.target.parentElement.classList.contains('store-item-icon')) {
      let fullPath = event.target.parentElement.previousElementSibling.src;

      // Removing all the 6 characters of the word 'images' from the fullPath.
      // Going to replace it with 'images-cart' in full path.
      let position = fullPath.indexOf('images') + 6;
      let partialPath = fullPath.slice(position);

      const item = {};

      item.img = `images-cart${partialPath}`;

      let name =
        event.target.parentElement.parentElement.nextElementSibling.children[0]
          .children[0].textContent;

      item.name = name;

      let price =
        event.target.parentElement.parentElement.nextElementSibling.children[0]
          .children[1].textContent;

      let finalPrice = price
        .trim()
        .slice(1)
        .trim();

      item.price = finalPrice;

      // console.log(finalPrice);

      // console.log(item);

      const cartItem = document.createElement('div');
      cartItem.classList.add(
        'cart-item',
        'd-flex',
        'justify-content-between',
        'text-capitalize',
        'my-3'
      );

      cartItem.innerHTML = ` 
              <img
                src="${item.img}"
                class="img-fluid rounded-circle"
                id="item-img"
                alt=""
              >
              <div class="item-text">
                <p id="cart-item-title" class="font-weight-bold mb-0">
                  ${item.name}
                </p>
                <span>$</span>
                <span id="cart-item-price" class="cart-item-price mb-0"
                  >${item.price}</span>
              </div>
              <a href="#" id="cart-item-remove" class="cart-item-remove">
                <i class="fas fa-trash"></i>
              </a>
              </div>
              `;

      // Select Cart
      const cart = document.getElementById('cart');
      const total = document.querySelector('.cart-total-container');
      cart.insertBefore(cartItem, total);
      alert('item added to the cart');

      showTotals();
    }
  });
});

// Show Totals
function showTotals() {
  const total = [];
  const items = document.querySelectorAll('.cart-item-price');

  items.forEach(item => {
    total.push(parseFloat(item.textContent));
  });

  // console.log(total);

  const totalMoney = total.reduce((total, item) => {
    total += item;
    return total;
  }, 0);

  const finalMoney = totalMoney.toFixed(2);

  document.getElementById('cart-total').textContent = finalMoney;
  document.querySelector('.item-total').textContent = finalMoney;
  document.getElementById('item-count').textContent = total.length;
}
