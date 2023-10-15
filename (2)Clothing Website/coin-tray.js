const coinTrayPrcts = [
    {
        id: 107,
        name: 'COIN TRAY',
        SKU: 'HM-DCR-CT23-01',
        price: 'PKR 2,980.00',
        availability: 'In stock',
        img: "Images/coin-tray-prdcts1.webp",
        colour: 'Brown & Red',
        measures: 'Small: 22 X 22 cm ; Large: 24.5 X 24.5 cm',
        Material: 'Outside - Buffalo Leather ; Inside - Faux Leather',
    },
    {
        id: 108,
        name: 'COIN TRAY',
        SKU: 'HM-DCR-CT23-01',
        price: 'PKR 2,579.00',
        availability: 'In stock',
        img: "Images/coin-tray-prdcts2.webp",
        colour: 'Brown & Blue',
        measures: 'Small: 22 X 22 cm ; Large: 24.5 X 24.5 cm',
        Material: 'Outside - Buffalo Leather ; Inside - Faux Leather',
    }
]

var coinTrayProducts = document.querySelector('.coin-tray-products');

for (var i = 0; i < coinTrayPrcts.length; i++) {
    var coinTrayPrdcts = coinTrayPrcts[i];

    coinTrayProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${coinTrayPrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${coinTrayPrdcts.name}
                </a>
                <a href="#" class="product-price">
                    ${coinTrayPrdcts.price}
                </a>
            </div>
            <div>
            <button class="coinTrayProducts-btn" href='cointrayprdcts.html?id=${coinTrayPrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.coinTrayProducts-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `cointrayprdcts.html?id=${productID}`;
        });
    });
}