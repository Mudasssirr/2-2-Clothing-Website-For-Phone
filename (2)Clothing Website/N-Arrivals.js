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
const NAproducts = [
    {
        id: 169,
        name: 'MB-W23-60',
        price: 'PKR 9,700.00',
        availability: 'In stock',
        img: "Images/NA-prodcut1.webp",
        colour: 'Dark Green',
        fabric: "Velvet"
    },
    {
        id: 170,
        name: 'MB-W23-169',
        price: 'PKR 8,000.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut2.webp',
        colour: 'Black',
        fabric: 'Khaddar'
    },
    {
        id: 171,
        name: 'MB-W23-24',
        price: 'PKR 5,000.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut3.webp',
        colour: 'Brown',
        fabric: 'Marina'
    },
    {
        id: 172,
        name: 'MB-W23-42',
        price: 'PKR 4,500.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut4.webp',
        colour: 'Black & White (Check)',
        fabric: 'Linen'
    },
    {
        id: 173,
        name: 'MB-W23-202',
        price: 'PKR 4,000.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut5.webp',
        colour: 'Pink',
        fabric: 'Linen'
    },
    {
        id: 174,
        name: 'MB-W23-125',
        price: 'PKR 4,600.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut6.webp',
        colour: 'Teal Blue',
        fabric: 'Dobby Linen'
    },
    {
        id: 175,
        name: 'MB-W23-215',
        price: 'PKR 4,500.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut7.webp',
        colour: 'Rust',
        fabric: 'Linen'
    },
    {
        id: 176,
        name: 'MB-W23-213',
        price: 'PKR 4,000.00',
        availability: 'In stock',
        img: 'Images/NA-product8.webp',
        colour: 'Multi',
        fabric: 'Linen'
    },
    {
        id: 177,
        name: 'MB-W23-212',
        price: 'PKR 4,500.00',
        availability: 'In stock',
        img: 'Images/NA-product9.webp',
        colour: 'Pink',
        fabric: 'Linen'
    },
    {
        id: 178,
        name: 'MB-W23-209',
        price: 'PKR 6,000.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut10.webp',
        colour: 'Mustard',
        fabric: 'Linen'
    },
    {
        id: 179,
        name: 'MB-W23-170',
        price: 'PKR 7,500.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut11.webp',
        colour: 'Teal Blue',
        fabric: 'Cotton Linen'
    },
    {
        id: 180,
        name: 'MB-W23-217',
        price: 'PKR 5,300.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut12.webp',
        colour: 'Light Blue',
        fabric: 'Dobby'
    },
    {
        id: 181,
        name: 'MB-W23-210',
        price: 'PKR 5,000.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut13.webp',
        colour: 'Grafitti',
        fabric: 'Linen'
    },
    {
        id: 182,
        name: 'MB-W23-04',
        price: 'PKR 6,000.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut14.webp',
        colour: 'Black & White',
        fabric: 'Linen'
    },
    {
        id: 183,
        name: 'MB-W23-82',
        price: 'PKR 8,800.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut15.webp',
        colour: 'Black',
        fabric: 'Velvet'
    },
    {
        id: 184,
        name: 'MB-W23-05',
        price: 'PKR 6,000.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut16.webp',
        colour: 'Plum',
        fabric: 'Twill'
    },
    {
        id: 185,
        name: 'MB-W23-81',
        price: 'PKR 9,800.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut17.webp',
        colour: 'Deep Blue',
        fabric: 'Velvet'
    },
    {
        id: 186,
        name: 'MB-W23-27',
        price: 'PKR 6,400.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut18.webp',
        colour: 'Rose Pink',
        fabric: 'Linen'
    },
    {
        id: 187,
        name: 'MB-W23-86',
        price: 'PKR 4,000.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut19.webp',
        colour: 'Black',
        fabric: 'Soft Khaddar'
    },
    {
        id: 188,
        name: 'MB-W23-71',
        price: 'PKR 6,800.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut20.webp',
        colour: 'Blue',
        fabric: 'Khaddar'
    },
    {
        id: 189,
        name: 'MB-W23-27',
        price: 'PKR 6,400.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut21.webp',
        colour: 'Teal Blue',
        fabric: 'Linen'
    },
    {
        id: 190,
        name: 'MB-W23-27',
        price: 'PKR 6,500.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut22.webp',
        colour: 'Black',
        fabric: 'Linen'
    },
    {
        id: 191,
        name: 'MB-W23-117',
        price: 'PKR 4,800.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut23.webp',
        colour: 'Green',
        fabric: 'Twill'
    },
    {
        id: 192,
        name: 'MB-W23-95',
        price: 'PKR 6,800.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut24.webp',
        colour: 'Sandy Grey',
        fabric: 'Khaddar'
    },
    {
        id: 193,
        name: 'MB-W23-94',
        price: 'PKR 5,600.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut25.webp',
        colour: 'Sandy Grey',
        fabric: 'Khaddar'
    },
    {
        id: 194,
        name: 'MB-W23-112',
        price: 'PKR 7,300.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut26.webp',
        colour: 'Brown',
        fabric: 'Herring Bone'
    },
    {
        id: 195,
        name: 'MB-W23-86',
        price: 'PKR 4,000.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut27.webp',
        colour: 'Blue',
        fabric: 'Soft Khaddar'
    },
    {
        id: 196,
        name: 'MB-W23-86',
        price: 'PKR 4,000.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut28.webp',
        colour: 'Red',
        fabric: 'Soft Khaddar'
    },
    {
        id: 197,
        name: 'MB-W23-86',
        price: 'PKR 4,000.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut29.webp',
        colour: 'Beige',
        fabric: 'Soft Khaddar'
    },
    {
        id: 198,
        name: 'MB-W23-73',
        price: 'PKR 6,700.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut30.webp',
        colour: 'Fuchsia Pink',
        fabric: 'Khaddar'
    },
    {
        id: 199,
        name: 'MB-W23-211',
        price: 'PKR 6,700.00',
        availability: 'Out of stock',
        img: 'Images/NA-prodcut31.webp',
        colour: 'Teal Blue',
        fabric: 'Linen'
    },
    {
        id: 200,
        name: 'MB-W23-195',
        price: 'PKR 5,200.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut32.webp',
        colour: 'Green',
        fabric: 'Twill'
    },
    {
        id: 201,
        name: 'MB-W23-03',
        price: 'PKR 6,000.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut33.webp',
        colour: 'Rust',
        fabric: 'Marina'
    },
    {
        id: 202,
        name: 'MB-W23-03',
        price: 'PKR 6,000.00',
        availability: 'Out of stock',
        img: 'Images/NA-prodcut34.webp',
        colour: 'Purple',
        fabric: 'Marina'
    },
    {
        id: 203,
        name: 'MB-W23-03',
        price: 'PKR 6,000.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut35.webp',
        colour: 'Dull Brown',
        fabric: 'Marina'
    },
    {
        id: 204,
        name: 'BUT-W22-S002',
        price: 'PKR 7,500.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut36.webp',
        colour: 'Blue',
        fabric: 'Lawn'
    },
    {
        id: 205,
        name: 'MB-EA23-03',
        price: 'PKR 7,190.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut37.webp',
        colour: 'Black',
        fabric: 'Cambric'
    },
    {
        id: 206,
        name: 'BUT-W22-S014',
        price: 'PKR 7,000.00',
        availability: 'Out of stock',
        img: 'Images/NA-prodcut38.webp',
        colour: 'Teal',
        fabric: 'Bember Chiffon'
    },
    {
        id: 207,
        name: 'BUT-W22-S004',
        price: 'PKR 7,300.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut39.webp',
        colour: 'White Printed',
        fabric: 'Lawn'
    },
    {
        id: 208,
        name: 'MB-EF23-16',
        price: 'PKR 5,690.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut40.webp',
        colour: 'Off White',
        fabric: 'Dobby Lawn'
    },
    {
        id: 209,
        name: 'BUT-W22-S021',
        price: 'PKR 9,000.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut41.webp',
        colour: 'Blue',
        fabric: 'Lawn'
    },
    {
        id: 210,
        name: 'BUT-W22-S016',
        price: 'PKR 8,500.00',
        availability: 'Out of stock',
        img: 'Images/NA-prodcut42.webp',
        colour: 'White Printed',
        fabric: 'Lawn'
    },
    {
        id: 211,
        name: 'MB-W23-147',
        price: 'PKR 5,000.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut43.webp',
        colour: 'Black',
        fabric: 'Cotail'
    },
    {
        id: 212,
        name: 'MB-W23-200',
        price: 'PKR 4,000.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut44.webp',
        colour: 'Grey',
        fabric: 'Twill'
    },
    {
        id: 213,
        name: 'MB-W23-148',
        price: 'PKR 5,500.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut45.webp',
        colour: 'Navy Blue',
        fabric: 'Twill'
    },
    {
        id: 214,
        name: 'BUT-W22-S013',
        price: 'PKR 3,300.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut46.webp',
        colour: 'White Printed',
        fabric: 'Lawn'
    },
    {
        id: 215,
        name: 'MB-EF23-182',
        price: 'PKR 3,400.00',
        availability: 'Out of stock',
        img: 'Images/NA-prodcut47.webp',
        colour: 'Green Printed',
        fabric: 'Arabic Lawn'
    },
    {
        id: 216,
        name: 'MB-W22-335',
        price: 'PKR 3,000.00',
        availability: 'In stock',
        img: 'Images/NA-prodcut48.webp',
        colour: 'Dark Grey',
        fabric: 'Linen'
    }
];

const productsPerPage = 16; // Number of products to display per page
let currentPage = 1;

function displayProducts(page) {
    const allProducts = document.querySelector('.newArrivals-products'); // Moved this line inside the function
    if (!allProducts) {
        // If 'all-products' element is not found on the page, simply return without taking any action.
        return; // Exit the function
    }
    allProducts.innerHTML = ''; // Clear previous products

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    for (let i = startIndex; i < endIndex && i < NAproducts.length; i++) {
        const product = NAproducts[i];

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
                    <button class="NAproduct-btn" href='N-Arrivalsprdcts.html?id=${product.id}'>VIEW PRODUCT</button>
                </div>
            </div>
        `;
    }
    const viewProductButtons = document.querySelectorAll('.NAproduct-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `N-Arrivalsprdcts.html?id=${productID}`;
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
    const isLastPage = currentPage === Math.ceil(NAproducts.length / productsPerPage);
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
    if (currentPage < Math.ceil(NAproducts.length / productsPerPage)) {
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