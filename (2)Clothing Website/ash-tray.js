const ashTrayPrcts = [
    {
        id: 109,
        name: 'CIRCUS TIGER TRINKET TRAY',
        SKU: 'HM-DO-AT23-04',
        price: 'PKR 3,090.00',
        availability: 'In stock',
        img: "Images/circus-tiger-ashtray.webp",
        colour: 'Collage of Colours',
        dimensions: '17.5 cm',
        Material: 'Ceramic',
    },
    {
        id: 110,
        name: 'SCARLET STALLION ASH TRAY',
        SKU: 'HM-DO-AT23-01',
        price: 'PKR 3,600.00',
        availability: 'Out of stock',
        img: "Images/scarlet-stallion-ashtray.webp",
        colour: 'Maroon & Dark Red',
        dimensions: 'L: 21.5 X W: 17.5 cm',
        Material: 'Ceramic',
    },
    {
        id: 111,
        name: 'PANTHERA TRINKET TRAY',
        SKU: 'HM-DO-AT23-03',
        price: 'PKR 4,630.00',
        availability: 'In stock',
        img: "Images/panthera-trinket-ashtray.webp",
        colour: 'Green & Yellow',
        dimensions: '17.5 cm',
        Material: 'Ceramic',
    },
    {
        id: 112,
        name: 'FLORAL FUSION ASHTRAY',
        SKU: 'HM-DO-AT23-02',
        price: 'PKR 3,600.00',
        availability: 'In stock',
        img: "Images/floral-fusion-ashtray.webp",
        colour: 'Peach & Brown',
        dimensions: 'L: 21.5 X W: 17.5 cm',
        Material: 'Ceramic',
    }
]

var ashTrayProducts = document.querySelector('.ash-tray-products');

for (var i = 0; i < ashTrayPrcts.length; i++) {
    var ashTrayPrdcts = ashTrayPrcts[i];

    ashTrayProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${ashTrayPrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${ashTrayPrdcts.name}
                </a>
            </div>
            <div>
            <button class="ashTrayProducts-btn" href='ashtrayprdcts.html?id=${ashTrayPrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.ashTrayProducts-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `ashtrayprdcts.html?id=${productID}`;
        });
    });
}