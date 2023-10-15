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
const LuxuryPretproducts = [
    {
        id: 281,
        name: 'DW-W23-75',
        price: 'PKR 19,000.00',
        availability: 'In stock',
        img: "Images/LPproduct1.webp",
        colour: 'Ferozi',
        fabric: "Cotton Net"
    },
    {
        id: 282,
        name: 'DW-W23-28',
        price: 'PKR 14,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct2.webp',
        colour: 'Teal',
        fabric: 'Pashmina'
    },
    {
        id: 283,
        name: 'DW-W23-28',
        price: 'PKR 14,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct3.webp',
        colour: 'Grey',
        fabric: 'Pashmina'
    },
    {
        id: 284,
        name: 'DW-W23-13',
        price: 'PKR 19,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct4.webp',
        colour: 'Blue',
        fabric: 'Khaddar'
    },
    {
        id: 285,
        name: 'DW-W23-21',
        price: 'PKR 22,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct5.webp',
        colour: 'Maroon',
        fabric: 'Pashmina'
    },
    {
        id: 286,
        name: 'DW-W23-44',
        price: 'PKR 17,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct6.webp',
        colour: 'Orange',
        fabric: 'Slub Khaddar'
    },
    {
        id: 287,
        name: 'DW-W23-13',
        price: 'PKR 19,000.00',
        availability: 'Out of stock',
        img: 'Images/LPproduct7.webp',
        colour: 'Green',
        fabric: 'Khaddar'
    },
    {
        id: 288,
        name: 'DW-W23-46',
        price: 'PKR 20,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct9.webp',
        colour: 'Mustard',
        fabric: 'Self Jacquard'
    },
    {
        id: 289,
        name: 'DW-W23-46',
        price: 'PKR 20,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct8.webp',
        colour: 'Red',
        fabric: 'Self Jacquard'
    },
    {
        id: 290,
        name: 'DW-W23-38',
        price: 'PKR 18,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct10.webp',
        colour: 'Yellow',
        fabric: 'Khaddar'
    },
    {
        id: 291,
        name: 'DW-W23-38',
        price: 'PKR 18,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct11.webp',
        colour: 'Off White',
        fabric: 'Khaddar'
    },
    {
        id: 292,
        name: 'DW-W23-29',
        price: 'PKR 20,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct12.webp',
        colour: 'Maroon',
        fabric: 'Khaddar'
    },
    {
        id: 293,
        name: 'DW-W23-105',
        price: 'PKR 20,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct13.webp',
        colour: 'Black',
        fabric: 'Jacquard'
    },
    {
        id: 294,
        name: 'DW-W23-13',
        price: 'PKR 18,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct14.webp',
        colour: 'Orange',
        fabric: 'Khaddar'
    },
    {
        id: 295,
        name: 'DW-W23-29',
        price: 'PKR 20,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct15.webp',
        colour: 'Black',
        fabric: 'Khaddar'
    },
    {
        id: 296,
        name: 'DW-W23-105',
        price: 'PKR 20,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct16.webp',
        colour: 'Pink',
        fabric: 'Jacquard'
    },
    {
        id: 297,
        name: 'DW-W23-110',
        price: 'PKR 21,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct17.webp',
        colour: 'Orange',
        fabric: 'Khaddi Jacquard'
    },
    {
        id: 298,
        name: 'DW-W23-87',
        price: 'PKR 15,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct18.webp',
        colour: 'Red',
        fabric: 'Slub Khaddar'
    },
    {
        id: 299,
        name: 'DW-EA23-95',
        price: 'PKR 17,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct19.webp',
        colour: 'Light Green',
        fabric: 'Zari Dobby'
    },
    {
        id: 300,
        name: 'DW-EA23-95',
        price: 'PKR 17,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct20.webp',
        colour: 'Light Blue',
        fabric: 'Zari Dobby'
    },
    {
        id: 301,
        name: 'DW-W23-32',
        price: 'PKR 17,500.00',
        availability: 'In stock',
        img: 'Images/LPproduct21.webp',
        colour: 'Light Pink',
        fabric: 'Dobby Lawn'
    },
    {
        id: 302,
        name: 'DW-EA23-32',
        price: 'PKR 17,500.00',
        availability: 'In stock',
        img: 'Images/LPproduct22.webp',
        colour: 'Off White',
        fabric: 'Dobby Lawn'
    },
    {
        id: 303,
        name: 'DW-EA23-12',
        price: 'PKR 17,500.00',
        availability: 'In stock',
        img: 'Images/LPproduct23.webp',
        colour: 'Lilac',
        fabric: 'Doriya'
    },
    {
        id: 304,
        name: 'DW-EA23-12',
        price: 'PKR 17,500.00',
        availability: 'In stock',
        img: 'Images/LPproduct24.webp',
        colour: 'Light Green',
        fabric: 'Doriya'
    },
    {
        id: 305,
        name: 'DW-EA23-29',
        price: 'PKR 18,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct25.webp',
        colour: 'Off White',
        fabric: 'Jacquard'
    },
    {
        id: 306,
        name: 'DW-EA23-84',
        price: 'PKR 15,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct26.webp',
        colour: 'Skin',
        fabric: 'Doriya Print'
    },
    {
        id: 307,
        name: 'DW-EA23-18',
        price: 'PKR 18,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct27.jpg',
        colour: 'White',
        fabric: 'Dobby Lawn'
    },
    {
        id: 308,
        name: 'DW-EA23-18',
        price: 'PKR 18,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct28.jpg',
        colour: 'Sky Blue',
        fabric: 'Dobby Lawn'
    },
    {
        id: 309,
        name: 'DW-EA23-18',
        price: 'PKR 18,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct29.jpg',
        colour: 'Pink',
        fabric: 'Dobby Lawn'
    },
    {
        id: 310,
        name: 'DW-EA23-35',
        price: 'PKR 22,500.00',
        availability: 'In stock',
        img: 'Images/LPproduct30.jpg',
        colour: 'Ice Blue',
        fabric: 'Cotton Net'
    },
    {
        id: 311,
        name: 'DW-EA23-35',
        price: 'PKR 22,500.00',
        availability: 'In stock',
        img: 'Images/LPproduct31.jpg',
        colour: 'Grey',
        fabric: 'Cotton Net'
    },
    {
        id: 312,
        name: 'DW-EA23-04',
        price: 'PKR 17,990.00',
        availability: 'In stock',
        img: 'Images/LPproduct32.jpg',
        colour: 'Green',
        fabric: 'Dobby Lawn'
    },
    {
        id: 313,
        name: 'DW-EF23-92',
        price: 'PKR 15,990.00',
        availability: 'In stock',
        img: 'Images/LPproduct33.jpg',
        colour: 'Pink',
        fabric: 'Lawn'
    },
    {
        id: 314,
        name: 'DW-EA23-32',
        price: 'PKR 12,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct34.webp',
        colour: 'Blue',
        fabric: 'Lawn'
    },
    {
        id: 315,
        name: 'DW-EF23-10',
        price: 'PKR 16,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct35.webp',
        colour: 'Pink',
        fabric: 'Lawn'
    },
    {
        id: 316,
        name: 'DW-EF23-10',
        price: 'PKR 16,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct36.webp',
        colour: 'Green',
        fabric: 'Lawn'
    },
    {
        id: 317,
        name: 'DW-EF23-66',
        price: 'PKR 10,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct37.webp',
        colour: 'White',
        fabric: 'Organza'
    },
    {
        id: 318,
        name: 'DW-EF23-64',
        price: 'PKR 11,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct38.webp',
        colour: 'Green',
        fabric: 'Dobby Lawn'
    },
    {
        id: 319,
        name: 'DW-EF23-53',
        price: 'PKR 14,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct39.webp',
        colour: 'Green',
        fabric: 'Lawn'
    },
    {
        id: 320,
        name: 'DW-EF23-04',
        price: 'PKR 16,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct40.webp',
        colour: 'Off White',
        fabric: 'Jacquard'
    },
    {
        id: 321,
        name: 'DW-EF23-03',
        price: 'PKR 13,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct41.webp',
        colour: 'Green',
        fabric: 'Dobby Lawn'
    },
    {
        id: 322,
        name: 'DW-EF23-100',
        price: 'PKR 12,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct42.webp',
        colour: 'Sea Green',
        fabric: 'Dobby Lawn'
    },
    {
        id: 323,
        name: 'DW-EF23-18',
        price: 'PKR 12,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct43.webp',
        colour: 'Pink',
        fabric: 'Dobby Lawn'
    },
    {
        id: 324,
        name: 'DW-EF23-28',
        price: 'PKR 14,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct44.webp',
        colour: 'Off White',
        fabric: 'Lawn'
    },
    {
        id: 325,
        name: 'DW-EF23-28',
        price: 'PKR 14,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct45.webp',
        colour: 'Pink',
        fabric: 'Lawn'
    },
    {
        id: 326,
        name: 'DW-EF23-30',
        price: 'PKR 14,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct46.webp',
        colour: 'Blue',
        fabric: 'Organza'
    },
    {
        id: 327,
        name: 'DW-EF23-07',
        price: 'PKR 13,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct47.webp',
        colour: 'Blue',
        fabric: 'Lawn'
    },
    {
        id: 328,
        name: 'DW-W22-76',
        price: 'PKR 8,000.00',
        availability: 'In stock',
        img: 'Images/LPproduct48.webp',
        colour: 'Red',
        fabric: 'Woven'
    },
];

const productsPerPage = 16; // Number of products to display per page
let currentPage = 1;

function displayProducts(page) {
    const allProducts = document.querySelector('.LuxuryPret-products'); // Moved this line inside the function
    if (!allProducts) {
        // If 'all-products' element is not found on the page, simply return without taking any action.
        return; // Exit the function
    }
    allProducts.innerHTML = ''; // Clear previous products

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    for (let i = startIndex; i < endIndex && i < LuxuryPretproducts.length; i++) {
        const product = LuxuryPretproducts[i];

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
                    <button class="LPproduct-btn" href='LuxuryPretPrdcts.html?id=${product.id}'>VIEW PRODUCT</button>
                </div>
            </div>
        `;
    }
    const viewProductButtons = document.querySelectorAll('.LPproduct-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `LuxuryPretPrdcts.html?id=${productID}`;
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
    const isLastPage = currentPage === Math.ceil(LuxuryPretproducts.length / productsPerPage);
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
    if (currentPage < Math.ceil(LuxuryPretproducts.length / productsPerPage)) {
        displayProducts(currentPage + 1);
    }
});

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