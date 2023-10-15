const nightSuitPrcts = [
    {
        id: 140,
        name: 'CARLA',
        SKU: 'HM-BM-NS23-03',
        price: 'PKR 4,400.00',
        availability: 'In stock',
        img: "Images/night-suit1.webp",
        material: "Linen",
        colour: "Dark Peach",
    },
    {
        id: 141,
        name: 'STELLA',
        SKU: 'HM-BM-NS23-02',
        price: 'PKR 4,400.00',
        availability: 'In stock',
        img: "Images/night-suit2.webp",
        material: "Linen",
        colour: "Black",
    },
    {
        id: 142,
        name: 'MIA',
        SKU: 'HM-BM-NS23-01',
        price: 'PKR 4,400.00',
        availability: 'In stock',
        img: "Images/night-suit3.webp",
        material: "Linen",
        colour: "Blue",
    }
]

var nightSuitProducts = document.querySelector('.night-suit-products');

for (var i = 0; i < nightSuitPrcts.length; i++) {
    var nightSuitPrdcts = nightSuitPrcts[i];

    nightSuitProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${nightSuitPrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${nightSuitPrdcts.name}
                </a>
                <a href="#" class="product-price">
                    ${nightSuitPrdcts.price}
                </a>
            </div>
            <div>
            <button class="nightSuitProducts-btn" href='nightsuitprdcts.html?id=${nightSuitPrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.nightSuitProducts-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `nightsuitprdcts.html?id=${productID}`;
        });
    });
}