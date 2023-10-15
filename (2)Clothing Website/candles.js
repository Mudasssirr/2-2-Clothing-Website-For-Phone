const candlePrcts = [
    {
        id: 131,
        name: 'CANDLE (SAND & SEA SALT)',
        SKU: 'HM-CN-CN23-04',
        price: 'PKR 2,370.00',
        availability: 'In stock',
        img: "Images/sea-salt-candle.webp",
    },
    {
        id: 132,
        name: 'CANDLE (MOTIA)',
        SKU: 'HM-CN-CN23-03',
        price: 'PKR 2,370.00',
        availability: 'Out of stock',
        img: "Images/motia-candle.webp",
    },
    {
        id: 133,
        name: 'CANDLE (COTTON LINEN)',
        SKU: 'HM-CN-CN23-02',
        price: 'PKR 2,370.00',
        availability: 'In stock',
        img: "Images/cotton-n-linen-candle.webp",
    },
    {
        id: 134,
        name: 'CANDLE (PATCHOULI & MUSK)',
        SKU: 'HM-CN-CN23-01',
        price: 'PKR 2,370.00',
        availability: 'In stock',
        img: "Images/patchouli-n-musk-candle.webp",
    }
]

var candleProducts = document.querySelector('.candle-products');

for (var i = 0; i < candlePrcts.length; i++) {
    var candlePrdcts = candlePrcts[i];

    candleProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${candlePrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${candlePrdcts.name}
                </a>
            </div>
            <div>
            <button class="candleProducts-btn" href='candleprdcts.html?id=${candlePrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.candleProducts-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `candleprdcts.html?id=${productID}`;
        });
    });
}