//FOR PRODUCT"S SEPARATE PAGE
document.addEventListener('DOMContentLoaded', () => {
    const productDetails = document.getElementById('candle-product-details');
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Find the product with the matching ID
    const product = candlePrcts.find(p => p.id.toString() === productId);

    if (product) {
        // Display the product details on the page
        productDetails.innerHTML = `
        <div class='product-image'>
        <img src="${product.img}" alt="${product.name}" class="product-img">
        </div>
        <div class='product-info'>
        <p class='product-name'>${product.name}</p>
        <p class='product-availability'>Availability: <span id='stock-or-not'> ${product.availability} </span></p>
        <p class='SKU-number'>SKU#: ${product.SKU}</p>
        </div>
        <div class='product-price'>
        <p class='product-price-p'>Price: ${product.price}</p>
        </div>
        <div class='product-size'>
        <p class='product-size-p'>Select Size: <span id='s'>Small</span> <span id='m'>Medium</span> <span id='l'>Large</span></p>
        <p class='size-chart'> 
        <span class='size-s' id='small-btn' onclick="defineSize('${product.id}', 'Small')"> <button class='size-btn' id='small-btn'> S </button>
        </span> <span class='size-m' id='medium-btn' onclick="defineSize('${product.id}', 'Medium')"> <button class='size-btn' id='medium-btn'> M </button> </span>
        <span class='size-l' id='large-btn' onclick="defineSize('${product.id}', 'Large')"> <button class='size-btn' id='large-btn'> L </button> </span> </p>
        <p id='size-warning'>Please Select Size</p>
        </div>
        <div id="snackbar"><i class="bi bi-check2-circle check"></i> Product added to cart</div>
        <div class='product-button' id='product-button'>
        <button class='add-to-cart-btn' id='add-to-cart-btn'>ADD TO CART</button>
        </div>
        <div class='product-disclaimer'>
            <h5 class='product-detail'>DETAILS</h5>
            <p class='disclaimer'> <span class='bold'>Disclaimer</span> The actual product & colors may vary from the images shown depending on the device you are using to view the product. Any additional fabric, patches, or embellishments included with the product are mentioned in the product description.</p>  
        </div>
        `;
    } else {
        // Handle the case where the product ID is not found
        productDetails.innerHTML = `
        <div class='product-404-error'>
        <p class="inc-data"><i class="bi bi-x-circle-fill"></i>Error 404: PRODUCT NOT FOUND</p>
        </div>
        `;
    }

    let sizeWarning = document.getElementById('size-warning');

    function showSnackbar() {
        const snackbar = document.getElementById('snackbar');
        snackbar.className = 'show';
        setTimeout(() => {
            snackbar.className = snackbar.className.replace('show', '');
        }, 3000); // Hide after 3 seconds (adjust as needed)
    }

    let size = false
    let obj = { ...product }

    const defineSize = (id, size) => {
        obj.size = size;
        // console.log(obj.size)
    }
    window.defineSize = defineSize

    const addToCartButton = document.getElementById('add-to-cart-btn');

    addToCartButton && addToCartButton.addEventListener('click', () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        // console.log(obj.size)
        if (obj.size) {

            // Find the product in the cart, if it exists
            const productIndex = cart.findIndex(item => item.id === obj.id);

            if (productIndex !== -1) {
                // If the product is already in the cart, increase its quantity
                cart[productIndex].quantity = (cart[productIndex].quantity || 0) + 1;
            } else {
                // If the product is not in the cart, add it with a quantity of 1
                obj.quantity = 1;
                cart.push(obj);
            }
            localStorage.setItem('cart', JSON.stringify(cart));

            showSnackbar();

            // console.log('cart', cart);
            sizeWarning.style.display = 'none';
        } else {
            sizeWarning.style.display = 'block';
        }

        // Save the updated cart back to localStorage
    });


    //FOR CHANGING THE AVAILABILITY COLORS
    let stockOrNot = document.getElementById('stock-or-not');
    let orderBtn = document.getElementById('product-button')
    if(product.availability === 'In stock'){
        stockOrNot.style.color = 'green';
    }
    else{
        stockOrNot.style.color = 'red';
        orderBtn.style.display = 'none'
    }

    //FOR SELECTING THE SIZE
    let smallSize = document.getElementById('small-btn');
    let mediumSize = document.getElementById('medium-btn');
    let largeSize = document.getElementById('large-btn');
    
    
    let s = document.getElementById('s');
    let m = document.getElementById('m');
    let l = document.getElementById('l');

    smallSize && smallSize.addEventListener('click', () => {
        s.style.display = 'inline-block';
        m.style.display = 'none';
        l.style.display = 'none';
    })

    mediumSize && mediumSize.addEventListener('click', () => {
        m.style.display = 'inline-block';
        s.style.display = 'none';
        l.style.display = 'none';
    })

    largeSize && largeSize.addEventListener('click', () => {
        l.style.display = 'inline-block';
        s.style.display = 'none';
        m.style.display = 'none';
    })
});