const cushionPrcts = [
    {
        id: 117,
        name: 'GEOMETRIC HARMONY CUSHION',
        SKU: 'HM-CH-CH23-01',
        price: 'PKR 3,600.00',
        availability: 'In stock',
        img: "Images/geometric-harmony-cushion.webp",
        colour: 'Navy Blue & White',
        dimensions: '24 X 24',
        Material: 'Canvas',
    },
    {
        id: 118,
        name: 'ARTISTIC MELODY CUSHIONS',
        SKU: 'HM-CH-CH23-02',
        price: 'PKR 3,600.00',
        availability: 'In stock',
        img: "Images/artistic-melody-cushions.webp",
        colour: 'Maroon & Brown',
        dimensions: '24 X 24"',
        Material: 'Canvas',
    },
    {
        id: 119,
        name: 'ELEGANT MONO CUSHIONS',
        SKU: 'HM-CH-CH23-03',
        price: 'PKR 3,600.00',
        availability: 'Out of stock',
        img: "Images/monochrome-cushion.webp",
        colour: 'Black & White',
        dimensions: '24 X 24',
        Material: 'Canvas',
    },
    {
        id: 120,
        name: 'GEOMETRIC HARMONY CUSHION',
        SKU: 'HM-CH-CH23-04',
        price: 'PKR 3,390.00',
        availability: 'In stock',
        img: "Images/geometric-harmony-cushion2.webp",
        colour: 'Navy Blue & White',
        dimensions: '22 X 22',
        Material: 'Canvas',
    },
    {
        id: 121,
        name: 'ELEGANT MONO CUSHIONS',
        SKU: 'HM-CH-CH23-03',
        price: 'PKR 3,600.00',
        availability: 'In stock',
        img: "Images/monochrome-cushion2.webp",
        colour: 'Black & White',
        dimensions: '24 X 24',
        Material: 'Canvas',
    },
    {
        id: 122,
        name: 'MANDARIN CUSHION',
        SKU: 'HM-CH-CH23-07',
        price: 'PKR 3,390.00',
        availability: 'In stock',
        img: "Images/mandarin-cushion.webp",
        colour: 'Red & Blue',
        dimensions: '22 X 22',
        Material: 'Canvas',
    },
    {
        id: 123,
        name: 'CLASSIC CONTRAST CUSHION',
        SKU: 'HM-CH-CH23-15',
        price: 'PKR 3,190.00',
        availability: 'In stock',
        img: "Images/classic-contrast-cushion.webp",
        colour: 'Biege & Brown',
        dimensions: '20 X 20',
        Material: 'Canvas',
    },
    {
        id: 124,
        name: 'SAVANNAH COUTURE CUSHION',
        SKU: 'HM-CH-CH23-10',
        price: 'PKR 3,190.00',
        availability: 'In stock',
        img: "Images/savannah-couture-cushion.webp",
        colour: 'Black & White',
        dimensions: '20 X 20',
        Material: 'Canvas',
    },
    {
        id: 125,
        name: 'PALM SPRINGS CUSHION',
        SKU: 'HM-CH-CH23-11',
        price: 'PKR 3,190.00',
        availability: 'In stock',
        img: "Images/palm-springs-cushion.webp",
        colour: 'White',
        dimensions: '20 X 20',
        Material: 'Canvas',
    },
    {
        id: 126,
        name: 'INDE MELANGE CUSHION',
        SKU: 'HM-CH-CH23-12',
        price: 'PKR 3,190.00',
        availability: 'In stock',
        img: "Images/inde-melange-cushion.webp",
        colour: 'Dark Blue & Red',
        dimensions: '20 X 20',
        Material: 'Canvas',
    },
    {
        id: 127,
        name: 'ELEGANT MONO CUSHIONS',
        SKU: 'HM-CH-CH23-13',
        price: 'PKR 3,190.00',
        availability: 'In stock',
        img: "Images/monochrome-cushion3.webp",
        colour: 'Black & White',
        dimensions: '20 X 20',
        Material: 'Ceramic',
    },
    {
        id: 128,
        name: 'GEOMETRIC HARMONY CUSHION',
        SKU: 'HM-CH-CH23-16',
        price: 'PKR 3,190.00',
        availability: 'In stock',
        img: "Images/geometric-harmony-cushion3.webp",
        colour: 'Navy Blue & White ',
        dimensions: '20 X 20',
        Material: 'Canvas',
    },
    {
        id: 129,
        name: 'PAISLEY PANACHE CUSHION',
        SKU: 'HM-CH-CH23-19',
        price: 'PKR 3,080.00',
        availability: 'In stock',
        img: "Images/paisley-panache-cushion.webp",
        colour: 'Blend',
        dimensions: '18 X 18',
        Material: 'Canvas',
    },
    {
        id: 130,
        name: 'VICTORIAN CHEETAH CUSHION',
        SKU: 'HM-CH-CH23-22',
        price: 'PKR 3,080.00',
        availability: 'In stock',
        img: "Images/victorian-cheetah-cushion.webp",
        colour: 'Blend',
        dimensions: '18 X 18',
        Material: 'Canvas',
    }
]

var cushionProducts = document.querySelector('.cushions-products');

for (var i = 0; i < cushionPrcts.length; i++) {
    var cushionPrdcts = cushionPrcts[i];

    cushionProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${cushionPrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${cushionPrdcts.name}
                </a>
            </div>
            <div>
            <button class="cushionsProducts-btn" href='cushionprdcts.html?id=${cushionPrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.cushionsProducts-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `cushionprdcts.html?id=${productID}`;
        });
    });
}