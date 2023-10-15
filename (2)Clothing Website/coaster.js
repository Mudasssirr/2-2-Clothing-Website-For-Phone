const coasterPrcts = [
    {
        id: 104,
        name: 'Coaster',
        SKU: 'HM-TW-CO23-05',
        price: 'PKR 439.00',
        availability: 'In stock',
        img: "Images/coaster-prdct-1.webp",
        colour: 'Off White & Navy Blue (2-side Stripe)',
        dimensions: 'H: 3.8" and  W: 3.8"',
        Material: 'Ceramic',
    },
    {
        id: 105,
        name: 'Coaster',
        SKU: 'HM-TW-CO23-04',
        price: 'PKR 439.00',
        availability: 'Out of stock',
        img: "Images/coaster-prdct-2.webp",
        colour: 'Off White & Navy Blue Stripes',
        dimensions: 'H: 3.8" and  W: 3.8"',
        Material: 'Ceramic',
    },
    {
        id: 106,
        name: 'Coaster',
        SKU: 'HM-TW-CO23-02',
        price: 'PKR 439.00',
        availability: 'In stock',
        img: "Images/coaster-prdct-3.webp",
        colour: 'Off White & Navy Blue (1-side Stripe)',
        dimensions: 'H: 3.8" and  W: 3.8"',
        Material: 'Ceramic',
    }
]

var coasterProducts = document.querySelector('.coaster-products');

for (var i = 0; i < coasterPrcts.length; i++) {
    var coasterPrdcts = coasterPrcts[i];

    coasterProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${coasterPrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${coasterPrdcts.name}
                </a>
                <a href="#" class="product-price">
                    ${coasterPrdcts.price}
                </a>
            </div>
            <div>
            <button class="coasterProducts-btn" href='coasterprdcts.html?id=${coasterPrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.coasterProducts-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `coasterprdcts.html?id=${productID}`;
        });
    });
}