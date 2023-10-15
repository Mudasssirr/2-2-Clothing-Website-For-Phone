const balsaTrayPrcts = [
    {
        id: 113,
        name: 'ANTIQUE VICTORIAL TRAY',
        SKU: 'HM-DO-BT23-03',
        price: 'PKR 6,680.00',
        availability: 'In stock',
        img: "Images/antique-victorian-tray.webp",
        colour: 'Black & White',
        measures: 'H: 11.6" ; W: 11.6"',
        Material: 'Wooden',
    },
    {
        id: 114,
        name: 'WHIMSEY KALEIDOSCOPE TRAY',
        SKU: 'HM-DO-BT23-02',
        price: 'PKR 6,680.00',
        availability: 'In stock',
        img: "Images/whimsey-kaleidosope-tray.webp",
        colour: 'Blue & Red',
        measures: 'H: 11.6" ; W: 11.6"',
        Material: 'Wooden',
    },
    {
        id: 115,
        name: 'MYSTIC MAROON TRAY',
        SKU: 'HM-DO-BT23-01',
        price: 'PKR 6,680.00',
        availability: 'In stock',
        img: "Images/mystic-maroon-tray.webp",
        colour: 'Maroon',
        measures: 'H: 11.6" ; W: 11.6"',
        Material: 'Wooden',
    }
]

var balsaTrayProducts = document.querySelector('.balsa-tray-products');

for (var i = 0; i < balsaTrayPrcts.length; i++) {
    var balsaTrayPrdcts = balsaTrayPrcts[i];

    balsaTrayProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${balsaTrayPrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${balsaTrayPrdcts.name}
                </a>
            </div>
            <div>
            <button class="balsaTrayProducts-btn" href='balsatrayprdcts.html?id=${balsaTrayPrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.balsaTrayProducts-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `balsatrayprdcts.html?id=${productID}`;
        });
    });
}