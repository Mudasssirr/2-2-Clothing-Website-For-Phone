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


const bridalPrcts = [
    {
        id: 345,
        name: 'EX-148 ',
        price: 'PKR 685,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct1.webp",
        colour: 'Red'
    },
    {
        id: 346,
        name: 'EX-144',
        price: 'PKR 600,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct2.webp",
        colour: 'Rose Gold'
    },
    {
        id: 347,
        name: 'EX-145',
        price: 'PKR 650,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct3.webp",
        colour: 'Rose Gold'
    },
    {
        id: 348,
        name: 'EX-149-A',
        price: 'PKR 450,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct4.webp",
        colour: 'Pink'
    },
    {
        id: 349,
        name: 'EX-143',
        price: 'PKR 785,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct5.webp",
        colour: 'Dark Red'
    },
    {
        id: 350,
        name: 'EX-146',
        price: 'PKR 575,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct6.webp",
        colour: 'Pink & Yellow'
    },
    {
        id: 351,
        name: 'EX-147',
        price: 'PKR 485,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct7.webp",
        colour: 'Orange & Red'
    },
    {
        id: 352,
        name: 'EX-138',
        price: 'PKR 750,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct8.webp",
        colour: 'Silver'
    },
    {
        id: 353,
        name: 'EX-142',
        price: 'PKR 675,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct9.webp",
        colour: 'Ice Blue'
    },
    {
        id: 354,
        name: 'EX-141',
        price: 'PKR 680,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct10.webp",
        colour: 'Peach'
    },
    {
        id: 355,
        name: 'EX-140',
        price: 'PKR 630,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct11.webp",
        colour: 'Pink'
    },
    {
        id: 356,
        name: 'EX-139',
        price: 'PKR 585,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct12.webp",
        colour: 'Dull Silver'
    },
    {
        id: 357,
        name: 'EX-135',
        price: 'PKR 650,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct13.webp",
        colour: 'Red'
    },
    {
        id: 358,
        name: 'EX-134',
        price: 'PKR 585,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct14.webp",
        colour: 'Red'
    },
    {
        id: 359,
        name: 'EX-132',
        price: 'PKR 850,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct15.webp",
        colour: 'Deep Red'
    },
    {
        id: 360,
        name: 'EX-130',
        price: 'PKR 795,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct16.webp",
        colour: 'Pink'
    },
    {
        id: 361,
        name: 'FX-832',
        price: 'PKR 375,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct17.webp",
        colour: 'Red'
    },
    {
        id: 362,
        name: 'EX-129',
        price: 'PKR 750,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct18.webp",
        colour: 'Silver'
    },
    {
        id: 363,
        name: 'EX-126',
        price: 'PKR 565,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct19.webp",
        colour: 'Rose Gold'
    },
    {
        id: 364,
        name: 'EX-107',
        price: 'PKR 550,000.00',
        availability: 'In stock',
        img: "Images/bridalproduct20.webp",
        colour: 'White'
    }
]

var bridalProducts = document.querySelector('.Bridal-products');

for (var i = 0; i < bridalPrcts.length; i++) {
    var bridalPrdcts = bridalPrcts[i];

    bridalProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${bridalPrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${bridalPrdcts.name}
                </a>
                <span class='product-price'>
                    ${bridalPrdcts.price}
                </span>
            </div>
            <div>
            <button class="Bridalproduct-btn" href='bridalprdcts.html?id=${bridalPrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.Bridalproduct-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `bridalprdcts.html?id=${productID}`;
        });
    });
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