// FOR NAVBAR
let navtoggle = document.querySelector('.navbar-toggler');

navtoggle && navtoggle.addEventListener('click', function () {
    const navbarToggler = this;
    navbarToggler.classList.toggle('active');

    const icon = navbarToggler.querySelector('.icon');
    const closeIcon = document.querySelector('.close-icon');
    const searchBox = document.querySelector('.search-box');
    const navLinks = document.querySelector('.nav-links');

    if (navbarToggler.classList.contains('active')) {
        closeIcon.style.display = 'block';
        searchBox.classList.remove('active');
        navLinks.style.left = '0';
    } else {
        closeIcon.style.display = 'none';
        searchBox.classList.remove('active');
        navLinks.style.left = '-300px';
    }

    icon.classList.toggle('open');
});

let closeIcn = document.querySelector('.close-icon');

closeIcn && closeIcn.addEventListener('click', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const icon = navbarToggler.querySelector('.icon');
    const closeIcon = this;
    const searchBox = document.querySelector('.search-box');
    const navLinks = document.querySelector('.nav-links');

    navbarToggler.classList.remove('active');
    closeIcon.style.display = 'none';
    searchBox.classList.remove('active');
    navLinks.style.left = '-300px';
    icon.classList.remove('open');
});

let searchBox = document.querySelector('.search-icon')

searchBox && searchBox.addEventListener('click', function () {
    const searchBox = document.querySelector('.search-box');
    searchBox.classList.toggle('active');
});




// FOR PRODUCTS
const products = [
    {
        id: 1,
        popularity: 5,
        name: 'L231-001A-CX',
        price: 'PKR 7,190.00',
        availability: 'In stock',
        img: "Images/product1.webp",
        colour: 'Blueish Green',
    },
    {
        id: 2,
        popularity: 4,
        name: 'L231-002A-CX',
        price: 'PKR 8,475.00',
        availability: 'In stock',
        img: 'Images/product2.webp',
        colour: 'Green',
    },
    {
        id: 3,
        popularity: 5,
        name: 'L231-002B-CX',
        price: 'PKR 8,475.00',
        availability: 'In stock',
        img: 'Images/product3.webp',
        colour: 'Pink',
    },
    {
        id: 4,
        popularity: 7,
        name: 'L231-003A-CX',
        price: 'PKR 8,730.00',
        availability: 'In stock',
        img: 'Images/product4.webp',
        colour: 'Rosey Pink',
    },
    {
        id: 5,
        popularity: 3,
        name: 'DW-EF23-87',
        price: 'PKR 15,490.00',
        availability: 'In stock',
        img: 'Images/product5.webp',
        colour: 'Light Blue',
    },
    {
        id: 6,
        popularity: 8,
        name: 'DW-EN23-87',
        price: 'PKR 15,575.00',
        availability: 'In stock',
        img: 'Images/product6.webp',
        colour: 'Light Peach',
    },
    {
        id: 7,
        popularity: 10,
        name: 'DW-AF23-87',
        price: 'PKR 15,900.00',
        availability: 'In stock',
        img: 'Images/product7.webp',
        colour: 'Pale Brown',
    },
    {
        id: 8,
        popularity: 7,
        name: 'DW-EA23-87',
        price: 'PKR 15,572.00',
        availability: 'In stock',
        img: 'Images/product8.webp',
        colour: 'White',
    },
    {
        id: 9,
        popularity: 9,
        name: 'DW-EA23-04',
        price: 'PKR 17,990.00',
        availability: 'In stock',
        img: 'Images/product9.webp',
        colour: 'Peach',
    },
    {
        id: 10,
        popularity: 5,
        name: 'DW-EA23-92',
        price: 'PKR 17,990.00',
        availability: 'In stock',
        img: 'Images/product10.webp',
        colour: 'Pale Peach',
    },
    {
        id: 11,
        popularity: 6,
        name: 'DW-EF23-89',
        price: 'PKR 17,590.00',
        availability: 'In stock',
        img: 'Images/product11.webp',
        colour: 'Turmeric',
    },
    {
        id: 12,
        popularity: 7,
        name: 'DW-EA23-72',
        price: 'PKR 17,190.00',
        availability: 'In stock',
        img: 'Images/product12.webp',
        colour: 'Dark Red',
    },
    {
        id: 13,
        popularity: 8,
        name: 'DW-EA23-22',
        price: 'PKR 12,440.00',
        availability: 'In stock',
        img: 'Images/product13.webp',
        colour: 'Ferozi',
    },
    {
        id: 14,
        popularity: 4,
        name: 'DW-EA23-33',
        price: 'PKR 15,570.00',
        availability: 'In stock',
        img: 'Images/product14.webp',
        colour: 'Sky Blue',
    },
    {
        id: 15,
        popularity: 3,
        name: 'DW-EA23-93',
        price: 'PKR 12,800.00',
        availability: 'In stock',
        img: 'Images/product15.webp',
        colour: 'White',
    },
    {
        id: 16,
        popularity: 8,
        name: 'DW-EA23-61',
        price: 'PKR 18,590.00',
        availability: 'In stock',
        img: 'Images/product16.webp',
        colour: 'Orange',
    },
    {
        id: 17,
        popularity: 6,
        name: 'DW-EA23-37',
        price: 'PKR 13,270.00',
        availability: 'In stock',
        img: 'Images/product17.webp',
        colour: 'Dark Blue',
    },
    {
        id: 18,
        popularity: 9,
        name: 'DW-EA23-26',
        price: 'PKR 15,750.00',
        availability: 'In stock',
        img: 'Images/product18.webp',
        colour: 'Light Green',
    },
    {
        id: 19,
        popularity: 10,
        name: 'DW-EA23-93',
        price: 'PKR 11,960.00',
        availability: 'In stock',
        img: 'Images/product19.webp',
        colour: 'Yellow',
    },
    {
        id: 20,
        popularity: 7,
        name: 'DW-EA23-27',
        price: 'PKR 11,190.00',
        availability: 'In stock',
        img: 'Images/product20.webp',
        colour: 'Green',
    },
    {
        id: 21,
        popularity: 1,
        name: 'SF-W20-87-AA',
        price: 'PKR 26,990.00',
        availability: 'In stock',
        img: 'Images/product21.webp',
        colour: 'Ferozi',
    },
    {
        id: 22,
        popularity: 3,
        name: 'SF-W20-89-AA',
        price: 'PKR 26,990.00',
        availability: 'In stock',
        img: 'Images/product22.webp',
        colour: 'Orange Yellow',
    },
    {
        id: 23,
        popularity: 9,
        name: 'SF-EA23-06',
        price: 'PKR 32,290.00',
        availability: 'In stock',
        img: 'Images/product23.webp',
        colour: 'Pale White',
    },
    {
        id: 24,
        popularity: 8,
        name: 'SF-EA23-57',
        price: 'PKR 22,490.00',
        availability: 'In stock',
        img: 'Images/product24.webp',
        colour: 'Rose Gold',
    },
    {
        id: 25,
        popularity: 10,
        name: 'SF-EA23-92',
        price: 'PKR 27,140.00',
        availability: 'In stock',
        img: 'Images/product25.webp',
        colour: 'Olive Green',
    },
    {
        id: 26,
        popularity: 4,
        name: 'SF-EF23-35',
        price: 'PKR 23,390.00',
        availability: 'In stock',
        img: 'Images/product26.webp',
        colour: 'Pinkish Blue',
    },
    {
        id: 27,
        popularity: 6,
        name: 'SF-EF23-53',
        price: 'PKR 31,490.00',
        availability: 'In stock',
        img: 'Images/product27.webp',
        colour: 'Light Blue',
    },
    {
        id: 28,
        popularity: 7,
        name: 'SF-EF23-53',
        price: 'PKR 33,190.00',
        availability: 'In stock',
        img: 'Images/product28.webp',
        colour: 'Pinkish Purple',
    },
    {
        id: 29,
        popularity: 10,
        name: 'SF-EF23-31',
        price: 'PKR 17,990.00',
        availability: 'In stock',
        img: 'Images/product29.webp',
        colour: 'Pale Pink',
    },
    {
        id: 30,
        popularity: 8,
        name: 'SF-EF23-45',
        price: 'PKR 24,390.00',
        availability: 'In stock',
        img: 'Images/product30.webp',
        colour: 'White Pink',
    },
    {
        id: 31,
        popularity: 5,
        name: 'MPT-1081-A',
        price: 'PKR 7,450.00',
        availability: 'Out of stock',
        img: 'Images/product31.webp',
        colour: 'White Pink',
    },
    {
        id: 32,
        popularity: 6,
        name: 'MPT-1081-B',
        price: 'PKR 7,450.00',
        availability: 'In stock',
        img: 'Images/product32.webp',
        colour: 'Light Blue',
    },
    {
        id: 33,
        popularity: 9,
        name: 'MPT-1808-B',
        price: 'PKR 7,450.00',
        availability: 'In stock',
        img: 'Images/product33.webp',
        colour: 'Black',
    },
    {
        id: 34,
        popularity: 3,
        name: 'MPT-1809-A',
        price: 'PKR 6,950.00',
        availability: 'Out of stock',
        img: 'Images/product34.webp',
        colour: 'Pale Light Blue',
    },
    {
        id: 35,
        popularity: 10,
        name: 'EL-23-09',
        price: 'PKR 14,950.00',
        availability: 'In stock',
        img: 'Images/product35.webp',
        colour: 'Dark Pink',
    },
    {
        id: 36,
        popularity: 1,
        name: 'EL-23-04',
        price: 'PKR 15,450.00',
        availability: 'In stock',
        img: 'Images/product36.webp',
        colour: 'Black',
    },
    {
        id: 37,
        popularity: 9,
        name: 'EL-23-02',
        price: 'PKR 15,450.00',
        availability: 'In stock',
        img: 'Images/product37.webp',
        colour: 'White',
    },
    {
        id: 38,
        popularity: 6,
        name: 'LF-CC-110-C',
        price: 'PKR 8,250.00',
        availability: 'Out of stock',
        img: 'Images/product38.webp',
        colour: 'Light Pink',
    },
    {
        id: 39,
        popularity: 5,
        name: 'BD-2601',
        price: 'PKR 29,750.00',
        availability: 'In stock',
        img: 'Images/product39.webp',
        colour: 'White',
    },
    {
        id: 40,
        popularity: 10,
        name: 'BD-2608',
        price: 'PKR 28,950.00',
        availability: 'In stock',
        img: 'Images/product40.webp',
        colour: 'White',
    },
    {
        id: 41,
        popularity: 2,
        name: 'BD-2603',
        price: 'PKR 28,950.00',
        availability: 'In stock',
        img: 'Images/product41.webp',
        colour: 'Light Blue',
    },
    {
        id: 42,
        popularity: 7,
        name: 'BD-2606',
        price: 'PKR 29,750.00',
        availability: 'Out of stock',
        img: 'Images/product42.webp',
        colour: 'Dark Turmeric',
    },
    {
        id: 43,
        popularity: 6,
        name: 'BD-2501',
        price: 'PKR 22,350.00',
        availability: 'In stock',
        img: 'Images/product43.webp',
        colour: 'Pale Brown',
    },
    {
        id: 44,
        popularity: 9,
        name: 'BD-2502',
        price: 'PKR 23,750.00',
        availability: 'In stock',
        img: 'Images/product44.webp',
        colour: 'White',
    },
    {
        id: 45,
        popularity: 2,
        name: 'BD-2503',
        price: 'PKR 24,750.00',
        availability: 'In stock',
        img: 'Images/product45.webp',
        colour: 'Gold',
    },
    {
        id: 46,
        popularity: 8,
        name: 'BD-2505',
        price: 'PKR 23,550.00',
        availability: 'In stock',
        img: 'Images/product46.webp',
        colour: 'Rosey Pink',
    },
    {
        id: 47,
        popularity: 10,
        name: 'BD-2507',
        price: 'PKR 23,550.00',
        availability: 'Out of stock',
        img: 'Images/product47.webp',
        colour: 'Dull Gold',
    },
    {
        id: 48,
        popularity: 7,
        name: 'BD-2408',
        price: 'PKR 18,750.00',
        availability: 'In stock',
        img: 'Images/product48.webp',
        colour: 'Bluish Pink',
    },
    {
        id: 49,
        popularity: 6,
        name: 'D-2301-A',
        price: 'PKR 15,250.00',
        availability: 'In stock',
        img: 'Images/product49.webp',
        colour: 'Pale Purple',
    },
    {
        id: 50,
        popularity: 5,
        name: 'D-2301-B',
        price: 'PKR 15,250.00',
        availability: 'Out of stock',
        img: 'Images/product50.webp',
        colour: 'Gray',
    },
    {
        id: 51,
        popularity: 9,
        name: 'D-2302-B',
        price: 'PKR 15,250.00',
        availability: 'Out of stock',
        img: 'Images/product51.webp',
        colour: 'Bright White',
    },
    {
        id: 52,
        popularity: 7,
        name: 'D-2303-B',
        price: 'PKR 15,250.00',
        availability: 'Out of stock',
        img: 'Images/product52.webp',
        colour: 'Light Blue',
    },
    {
        id: 53,
        popularity: 4,
        name: 'D-2304-A',
        price: 'PKR 14,250.00',
        availability: 'In stock',
        img: 'Images/product53.webp',
        colour: 'Pale Brown',
    },
    {
        id: 54,
        popularity: 5,
        name: 'D-2304-B',
        price: 'PKR 14,750.00',
        availability: 'In stock',
        img: 'Images/product54.webp',
        colour: 'Light Pink',
    },
    {
        id: 55,
        popularity: 8,
        name: 'D-2305-A',
        price: 'PKR 15,250.00',
        availability: 'Out of stock',
        img: 'Images/product55.webp',
        colour: 'Yellow',
    },
    {
        id: 56,
        popularity: 10,
        name: 'D-2305-B',
        price: 'PKR 15,250.00',
        availability: 'In stock',
        img: 'Images/product56.webp',
        colour: 'Dark Rosey Pink',
    },
    {
        id: 57,
        popularity: 8,
        name: 'D-2306-A',
        price: 'PKR 15,250.00',
        availability: 'In stock',
        img: 'Images/product57.webp',
        colour: 'Light Pink',
    },
    {
        id: 58,
        popularity: 7,
        name: 'D-2307-A',
        price: 'PKR 13,950.00',
        availability: 'Out of stock',
        img: 'Images/product58.webp',
        colour: 'Light Blue',
    },
    {
        id: 59,
        popularity: 3,
        name: 'D-2307-B',
        price: 'PKR 13,950.00',
        availability: 'In stock',
        img: 'Images/product59.webp',
        colour: 'Light White',
    },
    {
        id: 60,
        popularity: 6,
        name: 'D-2308-A',
        price: 'PKR 15,250.00',
        availability: 'Out of stock',
        img: 'Images/product60.webp',
        colour: 'White',
    },
    {
        id: 61,
        popularity: 7,
        name: 'D-2309-A',
        price: 'PKR 13,950.00',
        availability: 'In stock',
        img: 'Images/product61.webp',
        colour: 'Gray',
    },
    {
        id: 62,
        popularity: 9,
        name: 'D-2309-B',
        price: 'PKR 13,950.00',
        availability: 'In stock',
        img: 'Images/product62.webp',
        colour: 'Light Purple',
    },
    {
        id: 63,
        popularity: 7,
        name: 'D-2310-B',
        price: 'PKR 15,250.00',
        availability: 'In stock',
        img: 'Images/product63.webp',
        colour: 'Dark Green',
    },
    {
        id: 64,
        popularity: 8,
        name: 'D-2311-A',
        price: 'PKR 15,250.00',
        availability: 'In stock',
        img: 'Images/product64.webp',
        colour: 'Pale Gold',
    },
    {
        id: 65,
        popularity: 10,
        name: 'D-2311-B',
        price: 'PKR 15,250.00',
        availability: 'Out of stock',
        img: 'Images/product65.webp',
        colour: 'Dark Red',
    },
    {
        id: 66,
        popularity: 9,
        name: 'D-2312-A',
        price: 'PKR 14,750.00',
        availability: 'In stock',
        img: 'Images/product66.webp',
        colour: 'Pale Yellow',
    },
    {
        id: 67,
        popularity: 10,
        name: 'D-2312-B',
        price: 'PKR 14,750.00',
        availability: 'In stock',
        img: 'Images/product67.webp',
        colour: 'Bluish Black',
    },
    {
        id: 68,
        popularity: 9,
        name: 'D-2313-A',
        price: 'PKR 14,750.00',
        availability: 'In stock',
        img: 'Images/product68.webp',
        colour: 'Pale White',
    },
    {
        id: 69,
        popularity: 7,
        name: 'D-2313-B',
        price: 'PKR 14,750.00',
        availability: 'In stock',
        img: 'Images/product69.webp',
        colour: 'Navy Blue',
    },
    {
        id: 70,
        popularity: 4,
        name: 'D-2314-A',
        price: 'PKR 15,250.00',
        availability: 'Out of stock',
        img: 'Images/product70.webp',
        colour: 'Dull White',
    },
    {
        id: 71,
        popularity: 3,
        name: 'D-2314-B',
        price: 'PKR 15,250.00',
        availability: 'Out of stock',
        img: 'Images/product71.webp',
        colour: 'Ferozi White',
    },
    {
        id: 72,
        popularity: 10,
        name: 'D-2315-B',
        price: 'PKR 15,250.00',
        availability: 'In stock',
        img: 'Images/product72.webp',
        colour: 'White',
    },
    {
        id: 73,
        popularity: 7,
        name: 'EL-23-01',
        price: 'PKR 14,950.00',
        availability: 'Out of stock',
        img: 'Images/product73.webp',
        colour: 'Dark Red',
    },
    {
        id: 74,
        popularity: 2,
        name: 'EL-23-02',
        price: 'PKR 15,450.00',
        availability: 'Out of stock',
        img: 'Images/product74.webp',
        colour: 'Azure',
    },
    {
        id: 75,
        popularity: 6,
        name: 'EL-23-06',
        price: 'PKR 14,950.00',
        availability: 'In stock',
        img: 'Images/product75.webp',
        colour: 'Pale Turmeric',
    },
    {
        id: 76,
        popularity: 10,
        name: 'EL-23-07',
        price: 'PKR 15,450.00',
        availability: 'Out of stock',
        img: 'Images/product76.webp',
        colour: 'Rosey Pink',
    },
    {
        id: 77,
        popularity: 9,
        name: 'EL-23-08',
        price: 'PKR 14,950.00',
        availability: 'In stock',
        img: 'Images/product77.webp',
        colour: 'Blue',
    },
    {
        id: 78,
        popularity: 7,
        name: 'EL-23-10',
        price: 'PKR 15,450.00',
        availability: 'In stock',
        img: 'Images/product78.webp',
        colour: 'Pale Light',
    },
    {
        id: 79,
        popularity: 6,
        name: 'EL-23-01',
        price: 'PKR 14,950.00',
        availability: 'Out of stock',
        img: 'Images/product79.webp',
        colour: 'Black',
    },
    {
        id: 80,
        popularity: 8,
        name: 'D-2306-B',
        price: 'PKR 14,950.00',
        availability: 'In stock',
        img: 'Images/product80.webp',
        colour: 'Rosey Red',
    },
];

// var allProducts = document.querySelector('.all-products');

// for (var i = 0; i < products.length; i++) {
//     var product = products[i];

//     allProducts.innerHTML += `
//         <div class="product-cards">
//             <div class="product-img">
//                 <img src="${product.img}" alt="" class="product-image">
//             </div>
//             <div class="product-txt">
//                 <a href="#" class="product-name">
//                     ${product.name}
//                 </a>
//                 <span class="product-price">
//                     ${product.price}
//                 </span>
//             </div>
//             <div>
//                 <button class="product-btn">VIEW PRODUCT</button>
//             </div>
//         </div>
//     `;
// }

const productsPerPage = 16; // Number of products to display per page
let currentPage = 1;

function displayProducts(page) {
    const allProducts = document.querySelector('.all-products'); // Moved this line inside the function
    if (!allProducts) {
        // If 'all-products' element is not found on the page, simply return without taking any action.
        return; // Exit the function
    }
    allProducts.innerHTML = ''; // Clear previous products

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    for (let i = startIndex; i < endIndex && i < products.length; i++) {
        const product = products[i];

        allProducts.innerHTML += `
            <div class="product-cards">
                <div class="product-img">
                    <img src="${product.img}" alt="" class="product-image">
                </div>
                <div class="product-txt">
                    <a href="#" class="product-name">
                        ${product.name}
                    </a>
                    <span class="product-price">
                        ${product.price}
                    </span>
                </div>
                <div>
                    <button class="product-btn" href='product-details.html?id=${product.id}'>VIEW PRODUCT</button>
                </div>
            </div>
        `;
    }
    const viewProductButtons = document.querySelectorAll('.product-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `product-details.html?id=${productID}`;
        });
    });


    currentPage = page;
    updatePagination();
}



let nextButtonColor = ''; // Global variable to store the color of the "Next" button

function updatePagination() {
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    const currentPageSpan = document.getElementById('currentPage');

    currentPageSpan.textContent = `Page ${currentPage}`;

    prevButton.disabled = currentPage === 1;
    const isLastPage = currentPage === Math.ceil(products.length / productsPerPage);
    if (isLastPage) {
        nextButton.disabled = true; // Disable the "Next" button
        nextButtonColor = nextButton.style.backgroundColor; // Store the current color
        nextButton.style.backgroundColor = 'gray'; // Change color to gray
        // Alternatively, you can hide the "Next" button:
        // nextButton.style.display = 'none';
    } else {
        nextButton.disabled = false;
        nextButton.style.backgroundColor = nextButtonColor; // Reset color
        // Alternatively, show the "Next" button if hidden:
        // nextButton.style.display = '';
    }
}

// Initial display

displayProducts(currentPage);
// Pagination event listeners
let prevPage = document.getElementById('prevPage');

prevPage && prevPage.addEventListener('click', () => {
    if (currentPage > 1) {
        displayProducts(currentPage - 1);
    }
});

let nextPage = document.getElementById('nextPage');

nextPage && nextPage.addEventListener('click', () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
        displayProducts(currentPage + 1);
    }
});

//SORTING PRODUCTS

// Sort products by popularity (default)
function sortProductsByPopularity() {
    products.sort((a, b) => b.popularity - a.popularity);
    displayProducts(currentPage);
}


// Sort products by colour
function sortProductsByColour() {
    products.sort((a, b) => a.colour.localeCompare(b.colour));
    displayProducts(currentPage);
}

// Sort products by low to high price
function sortProductsByLowToHighPrice() {
    products.sort((a, b) => parseFloat(a.price.split(' ')[1]) - parseFloat(b.price.split(' ')[1]));
    displayProducts(currentPage);
}

// Sort products by high to low price
function sortProductsByHighToLowPrice() {
    products.sort((a, b) => parseFloat(b.price.split(' ')[1]) - parseFloat(a.price.split(' ')[1]));
    displayProducts(currentPage);
}

// Event listeners for sorting options
let popularprdcts = document.getElementById('popular')
popularprdcts && popularprdcts.addEventListener('click', sortProductsByPopularity);

let clrprdcts = document.getElementById('colour')
clrprdcts && clrprdcts.addEventListener('click', sortProductsByColour);

let lowtohighprdcts = document.getElementById('low-to-high')
lowtohighprdcts && lowtohighprdcts.addEventListener('click', sortProductsByLowToHighPrice);

let hightolowprdcts = document.getElementById('high-to-low')
hightolowprdcts && hightolowprdcts.addEventListener('click', sortProductsByHighToLowPrice);

// Initialize the default sorting
// sortProductsByPopularity();



// import {auth, onAuthStateChanged } from './firebase.js'

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         const uid = user.uid;
//         let chatFeature = document.getElementById('chat-with-us')
//         chatFeature.style.display = 'block';
//     } else {
//         let chatFeature = document.getElementById('chat-with-us')
//         chatFeature.style.display = 'none';
//     }
//   });

// ERROR ON ORDER TRACKING
function checkOrder() {
    var orderInput = document.getElementById("orderInput").value.trim();
    var errorDiv = document.getElementById("error");

    if (!orderInput || !/^[0-9]+$/.test(orderInput)) {
        errorDiv.style.display = "block";
    } else {
        errorDiv.style.display = "none";
        // Here you can add further logic to process the order or show additional content
    }
}

// NEWSLETTER EMAIL CHECKUP
function validateEmail() {
    const emailInput = document.getElementById("newsletter-email");
    const errorMessage = document.getElementById("error-message-newsletter");
  
    // Regular expression for basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (emailPattern.test(emailInput.value)) {
      // Email is valid; you can redirect to the New Arrivals page here
      window.location.href = "N-Arrivals.html";
      errorMessage.style.display = 'none';
    } else {
      // Email is not valid; display an error message
      errorMessage.style.display = 'block';
    }
}
  


// FOR PROFILE AND TRACK ORDER BACK PAGE ARROW KEY
// document.addEventListener("DOMContentLoaded", function () {
//     let goBackIcn = document.getElementById('goBack');

//     function goBack() {
//         console.log('goBack function called');
//         window.history.back();
//     }

//     goBackIcn && goBackIcn.addEventListener('click', goBack);
// });


// FOOTER

const footerLinks = document.querySelectorAll('.footer-link');

footerLinks.forEach((footerLink) => {
    footerLink.addEventListener('click', function (event) {
        const toggle = event.target.closest('.dropdown-toggle');
        if (toggle) {
            const plusMinus = toggle.querySelector('.plus-minus');
            plusMinus.textContent = (toggle.getAttribute('aria-expanded') === 'true') ? '+' : '-';
        }
    });
});