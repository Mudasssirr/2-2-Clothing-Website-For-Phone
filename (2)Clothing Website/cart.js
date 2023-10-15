const cartData = JSON.parse(localStorage.getItem('cart')) || [];
const cartProducts = document.getElementById('cart-products');
const cartPriceBox = document.getElementById('cart');

let noPrdcts = document.getElementById('no-products')

if (cartData.length === 0) {
  noPrdcts.style.display = 'block';
} else {

// Initialize total to 0
let total = 0;

// Calculate the total price of all products in the cart
cartData.forEach(product => {
  const strPrice = product.price.slice(3); // Remove 'PKR ' from the price string
  const numPrice = parseFloat(strPrice.replace(/,/g, '')); // Convert to numeric value
  const price = numPrice * product.quantity;
  total += price; // Add to the total
});

// Calculate tax (5% of the total)
const tax = total * 0.05;

// Calculate the final order total (total + tax)
const orderTotal = total + tax;

// Convert total, tax, and orderTotal back to the 'PKR' format for display
const formattedTotal = `PKR ${total.toLocaleString('en-PK')}`;
const formattedTax = `PKR ${tax.toLocaleString('en-PK')}`;
const formattedOrderTotal = `PKR ${orderTotal.toLocaleString('en-PK')}`;

// Check for NaN and display error if needed
if (isNaN(total) || isNaN(tax) || isNaN(orderTotal)) {
  cartPriceBox.innerHTML = '<p>Error: Invalid data in the cart.</p>';
} else {
  // Generate HTML for the shopping cart with formatted prices
  cartPriceBox.innerHTML = `
    <h5 class="shopping-cart-heading">SHOPPING CART</h5>
    <div class="shopping-cart-total">
      <p class="estimate-tax">Estimate Shipping Tax</p>
      <div class="shopping-items">
        <div class="row">
          <p class="col subtotal">Subtotal</p>
          <p class="col subtotal-price" id="subtotal-value">${formattedTotal}</p>
        </div>
        <div class="row row2">
          <p class="col tax">Tax</p>
          <p class="col tax-price" id="tax-value">${formattedTax}</p>
        </div>
        <div class="order-line">
        </div>
        <div class="row row3">
          <p class="col order-total">Order Total</p>
          <p class="col order-total-price" id="order-total-value">${formattedOrderTotal}</p>
        </div>
        <div class="checkout-btn-div">
        <button class="checkout-btn">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
    `;
}
}

const checkoutButton = document.querySelector(".checkout-btn");

checkoutButton && checkoutButton.addEventListener("click", () => {
  window.location.href = 'checkout.html';
});

// Loop through cartData and generate HTML for each product
const getCartData = () => {
  const cartData = JSON.parse(localStorage.getItem('cart'))
  cartProducts.innerHTML = "";
  // console.log(cartData)
  cartData.forEach(product => {
    const strPrice = product.price.slice(3)
    let numPrice = parseFloat(strPrice.replace(/,/g, ''));
    let price = numPrice * product.quantity
    // console.log(strPrice)
    cartProducts.innerHTML += `
      <div class="productno">
          <div class="row row4">
              <div class="item-image col">
                  <img src="${product.img}" alt="" class="item-img">
              </div>
              <div class="col">
                  <p class="item-name">${product.name}</p>
                  <p class="item-color">Color: <span class="light">${product.colour}</span></p>
                  <p class="item-size">Size: <span class="light size-clr">${product.size}</span></p>
                  <div class="border"></div>
                  <p class="item-price">PKR ${price.toLocaleString('en-PK')}</p>
              </div>
          </div>
          <div class="row row5">
              <div class="quantity col">
                  <button class="minus" id='minus'  onclick="addQuantity('${product.id}','-')"><i class="bi bi-dash-lg"></i></button>
                  <h5 class="prdcts-quantity">${product.quantity}</h5>
                  <button class="plus" id='plus' onclick="addQuantity('${product.id}','+')"><i class="bi bi-plus"></i></button>
              </div>
              <div class="delete col">
                  <i id='deleteCart' class="bi bi-trash-fill" onclick="delProduct('${product.id}')"></i>
              </div>
          </div>
      </div>
      `;
  });
}

getCartData()


// cartData.forEach(product => {
//   let productQuantity = product.quantity
//   let plus = document.getElementById('plus');
//   let minus = document.getElementById('minus');

//   plus && plus.addEventListener('click', () => {
//     productQuantity = productQuantity + 1;
//     console.log(productQuantity)
//   })

//   minus && minus.addEventListener('click', () => {
//     productQuantity = productQuantity - 1;
//     console.log(productQuantity)
//   })
// });


const addQuantity = (id, type) => {
  const product = cartData.findIndex(v => v.id == id);
  if (type == "+") {
    cartData.splice(product, 1, { ...cartData[product], quantity: cartData[product].quantity + 1 })
  } else {
    if (cartData[product].quantity > 1) {
      cartData.splice(product, 1, { ...cartData[product], quantity: cartData[product].quantity - 1 })
    }
    // cartData.splice(product, 1, { ...cartData[product], quantity: cartData[product].quantity - 1 })
  }
  // console.log(id, product)

  localStorage.setItem('cart', JSON.stringify(cartData));
  getCartData()
  location.reload()

  //FOR TOTAL PRICE
  const strPrice = cartData[product].price.slice(3);
  const numPrice = parseFloat(strPrice.replace(/,/g, ''));
  const price = numPrice * cartData[product].quantity;

  // Find the HTML element that displays the price for this product and update it
  const priceElement = document.getElementById(`price-${id}`);
  if (priceElement) {
    priceElement.textContent = `PKR ${price.toLocaleString('en-PK')}`;
  } 
}

const delProduct = (id) => {
  const product = cartData.findIndex(v => v.id == id);
  cartData.splice(product, 1)
  localStorage.setItem('cart', JSON.stringify(cartData));
  getCartData()
  location.reload()
}


window.addQuantity = addQuantity
window.delProduct = delProduct 