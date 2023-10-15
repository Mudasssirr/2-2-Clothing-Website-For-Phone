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
const kidsproducts = [
    {
        id: 365,
        name: 'MKS-W23-28',
        price: 'PKR 10,000.00',
        availability: 'In stock',
        img: "Images/kidsproduct1.webp",
        colour: 'Green',
        fabric: "Bamber Silk"
    },
    {
        id: 366,
        name: 'MKS-W23-25',
        price: 'PKR 13,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct2.webp',
        colour: 'Pink',
        fabric: 'Zari Net'
    },
    {
        id: 367,
        name: 'MKD-W23-14',
        price: 'PKR 9,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct3.webp',
        colour: 'Maroon',
        fabric: 'Linen'
    },
    {
        id: 368,
        name: 'MKD-W23-19',
        price: 'PKR 9,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct4.webp',
        colour: 'Yellow',
        fabric: 'Linen'
    },
    {
        id: 369,
        name: 'MKS-W23-08',
        price: 'PKR 14,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct5.webp',
        colour: 'Green',
        fabric: 'Velvet'
    },
    {
        id: 370,
        name: 'MKS-W23-08',
        price: 'PKR 14,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct6.webp',
        colour: 'Red',
        fabric: 'Velvet'
    },
    {
        id: 371,
        name: 'MKS-W23-23',
        price: 'PKR 13,000.00',
        availability: 'Out of stock',
        img: 'Images/kidsproduct7.webp',
        colour: 'Pink',
        fabric: 'Organza'
    },
    {
        id: 372,
        name: 'MKS-W23-31',
        price: 'PKR 13,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct8.webp',
        colour: 'Orange',
        fabric: 'Organza'
    },
    {
        id: 373,
        name: 'MKS-W23-31',
        price: 'PKR 13,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct9.webp',
        colour: 'Pink',
        fabric: 'Organza'
    },
    {
        id: 374,
        name: 'MKS-PFW23-02',
        price: 'PKR 12,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct10.webp',
        colour: 'Mustard',
        fabric: 'Organza'
    },
    {
        id: 375,
        name: 'MKS-PFW23-02',
        price: 'PKR 12,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct11.webp',
        colour: 'Ice Blue',
        fabric: 'Organza'
    },
    {
        id: 376,
        name: 'MKD-W23-01',
        price: 'PKR 9,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct12.webp',
        colour: 'Maroon',
        fabric: 'Pashmina'
    },
    {
        id: 377,
        name: 'MKD-W23-09',
        price: 'PKR 9,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct13.webp',
        colour: 'Teal Blue',
        fabric: 'Khaddar'
    },
    {
        id: 378,
        name: 'MKS-W23-07',
        price: 'PKR 11,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct14.webp',
        colour: 'Peach',
        fabric: 'Zari Cotton Net'
    },
    {
        id: 379,
        name: 'MKD-W23-09',
        price: 'PKR 9,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct15.webp',
        colour: 'Pink',
        fabric: 'Khaddar'
    },
    {
        id: 380,
        name: 'MKD-W23-06',
        price: 'PKR 9,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct16.webp',
        colour: 'Green',
        fabric: 'Linen'
    },
    {
        id: 381,
        name: 'MKS-W23-29',
        price: 'PKR 12,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct17.webp',
        colour: 'Pink',
        fabric: 'Jacquard'
    },
    {
        id: 382,
        name: 'MKS-W21-19/A',
        price: 'PKR 11,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct18.webp',
        colour: 'Green',
        fabric: 'Lorex Organza'
    },
    {
        id: 383,
        name: 'MKS-W23-04',
        price: 'PKR 12,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct19.webp',
        colour: 'Black',
        fabric: 'Velvet'
    },
    {
        id: 384,
        name: 'MKD-EA23-09',
        price: 'PKR 9,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct20.webp',
        colour: 'Sky Blue',
        fabric: 'Jacquard'
    },
    {
        id: 385,
        name: 'MKD-EA23-09',
        price: 'PKR 9,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct21.webp',
        colour: 'Mint Green',
        fabric: 'Jacquard'
    },
    {
        id: 386,
        name: 'MKS-W23-07',
        price: 'PKR 11,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct22.webp',
        colour: 'Yellow',
        fabric: 'Zari Cotton Net'
    },
    {
        id: 387,
        name: 'MKS-EA20-08/AA',
        price: 'PKR 10,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct23.webp',
        colour: 'Red',
        fabric: 'Cotton Silk'
    },
    {
        id: 388,
        name: 'MKS-EA23-28',
        price: 'PKR 13,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct24.webp',
        colour: 'Red',
        fabric: 'Paper Cotton'
    },
    {
        id: 389,
        name: 'MKS-EA23-28',
        price: 'PKR 13,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct25.webp',
        colour: 'Black',
        fabric: 'Paper Cotton'
    },
    {
        id: 390,
        name: 'MKD-EA23-07',
        price: 'PKR 6,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct26.webp',
        colour: 'Pink',
        fabric: 'Dobby Lawn'
    },
    {
        id: 391,
        name: 'MKD-EA23-22',
        price: 'PKR 5,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct27.webp',
        colour: 'Green',
        fabric: 'Lawn'
    },
    {
        id: 392,
        name: 'MKD-EA23-07',
        price: 'PKR 6,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct28.webp',
        colour: 'Blue',
        fabric: 'Dobby Lawn'
    },
    {
        id: 393,
        name: 'MKD-EA23-08',
        price: 'PKR 7,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct29.webp',
        colour: 'Yellow',
        fabric: 'Lawn'
    },
    {
        id: 394,
        name: 'MKS-EA23-08',
        price: 'PKR 9,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct30.webp',
        colour: 'Pink',
        fabric: 'Organza'
    },
    {
        id: 395,
        name: 'MKS-EA23-08',
        price: 'PKR 9,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct31.webp',
        colour: 'Ice Blue',
        fabric: 'Organza'
    },
    {
        id: 396,
        name: 'MKD-EA23-01',
        price: 'PKR 6,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct32.webp',
        colour: 'Light Yellow',
        fabric: 'Dobby Lawn'
    },
    {
        id: 397,
        name: 'MKD-EA23-01',
        price: 'PKR 6,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct33.webp',
        colour: 'Ice Blue',
        fabric: 'Dobby Lawn'
    },
    {
        id: 398,
        name: 'MKD-EA23-13',
        price: 'PKR 7,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct34.webp',
        colour: 'Yellow',
        fabric: 'Dobby Lawn'
    },
    {
        id: 399,
        name: 'MKD-EA23-13',
        price: 'PKR 7,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct35.webp',
        colour: 'Dark Pink',
        fabric: 'Dobby Lawn'
    },
    {
        id: 400,
        name: 'MKS-EA23-17',
        price: 'PKR 9,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct36.webp',
        colour: 'Pink',
        fabric: 'Organza'
    },
    {
        id: 401,
        name: 'MKS-EA23-17',
        price: 'PKR 9,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct37.webp',
        colour: 'Green',
        fabric: 'Organza'
    },
    {
        id: 402,
        name: 'MKD-EF23-19',
        price: 'PKR 5,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct38.webp',
        colour: 'Yellow Pink',
        fabric: 'Lawn Digital'
    },
    {
        id: 403,
        name: 'MKD-EA23-21',
        price: 'PKR 6,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct39.webp',
        colour: 'Green',
        fabric: 'Dobby'
    },
    {
        id: 404,
        name: 'MKS-EA23-16',
        price: 'PKR 7,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct40.webp',
        colour: 'Off White & Pink',
        fabric: 'Organza'
    },
    {
        id: 405,
        name: 'MKS-EA23-16',
        price: 'PKR 7,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct41.webp',
        colour: 'Off White & Green',
        fabric: 'Organza'
    },
    {
        id: 406,
        name: 'MKD-EF23-12',
        price: 'PKR 7,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct42.webp',
        colour: 'Green',
        fabric: 'Lawn'
    },
    {
        id: 407,
        name: 'MKD-EF23-12',
        price: 'PKR 7,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct43.webp',
        colour: 'Blue',
        fabric: 'Lawn'
    },
    {
        id: 408,
        name: 'MKD-EA23-25',
        price: 'PKR 7,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct44.webp',
        colour: 'Yellow',
        fabric: 'Dobby Lawn'
    },
    {
        id: 409,
        name: 'MKD-EA23-25',
        price: 'PKR 7,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct45.webp',
        colour: 'Peach',
        fabric: 'Dobby Lawn'
    },
    {
        id: 410,
        name: 'MKD-EF23-17',
        price: 'PKR 5,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct46.webp',
        colour: 'Dark Orange',
        fabric: 'Dobby Lawn'
    },
    {
        id: 411,
        name: 'MKS-EF23-09',
        price: 'PKR 9,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct47.webp',
        colour: 'Mint Green',
        fabric: 'Messori Zari'
    },
    {
        id: 412,
        name: 'MKD-EF23-27',
        price: 'PKR 5,000.00',
        availability: 'In stock',
        img: 'Images/kidsproduct48.webp',
        colour: 'Purple',
        fabric: 'Lawn'
    },
];

const productsPerPage = 16; // Number of products to display per page
let currentPage = 1;

function displayProducts(page) {
    const allProducts = document.querySelector('.Kids-products'); // Moved this line inside the function
    if (!allProducts) {
        // If 'all-products' element is not found on the page, simply return without taking any action.
        return; // Exit the function
    }
    allProducts.innerHTML = ''; // Clear previous products

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    for (let i = startIndex; i < endIndex && i < kidsproducts.length; i++) {
        const product = kidsproducts[i];

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
                    <button class="kidsproduct-btn" href='kidsprdcts.html?id=${product.id}'>VIEW PRODUCT</button>
                </div>
            </div>
        `;
    }
    const viewProductButtons = document.querySelectorAll('.kidsproduct-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `kidsprdcts.html?id=${productID}`;
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
    const isLastPage = currentPage === Math.ceil(kidsproducts.length / productsPerPage);
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
    if (currentPage < Math.ceil(kidsproducts.length / productsPerPage)) {
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