let cartItems = [];

function addToCart(id, name, price, imageUrl) {
  const item = { id, name, price, imageUrl };
  cartItems.push(item);
  updateCart();
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cart = document.getElementById('cart');
  const totalValueElement = document.getElementById('totalValue');
  
  cart.innerHTML = '<h2>Carrinho</h2>';
  let totalPrice = 0;

  cartItems.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}">
      <p>${item.name} - R$ ${item.price.toFixed(2)}</p>
      <button class="delete-button" onclick="removeFromCart(${index})">Excluir</button>
    `;
    cart.appendChild(itemDiv);
    totalPrice += item.price;
  });

  totalValueElement.textContent = totalPrice.toFixed(2);
}
