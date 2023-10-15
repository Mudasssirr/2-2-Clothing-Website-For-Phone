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


const couturePrcts = [
    {
        id: 329,
        name: 'MC-801-A',
        price: 'PKR 139,000.00',
        availability: 'In stock',
        img: "Images/Coutureproduct1.webp",
        colour: 'Yellow',
        fabric: 'Net'
    },
    {
        id: 330,
        name: 'MC-801-B',
        price: 'PKR 139,000.00',
        availability: 'In stock',
        img: "Images/Coutureproduct2.webp",
        colour: 'Pearl White',
        fabric: 'Net'
    },
    {
        id: 331,
        name: 'MC-802',
        price: 'PKR 189,000.00',
        availability: 'In stock',
        img: "Images/Coutureproduct3.webp",
        colour: 'Red',
        fabric: 'Organza'
    },
    {
        id: 332,
        name: 'MC-803',
        price: 'PKR 85,000.00',
        availability: 'In stock',
        img: "Images/Coutureproduct4.webp",
        colour: 'Red',
        fabric: 'Net'
    },
    {
        id: 333,
        name: 'MC-804',
        price: 'PKR 139,000.00',
        availability: 'In stock',
        img: "Images/Coutureproduct5.webp",
        colour: 'Red',
        fabric: 'Organza'
    },
    {
        id: 334,
        name: 'MC-805',
        price: 'PKR 195,000.00',
        availability: 'In stock',
        img: "Images/Coutureproduct6.webp",
        colour: 'Sea Green',
        fabric: 'Net'
    },
    {
        id: 335,
        name: 'MC-806',
        price: 'PKR 89,000.00',
        availability: 'In stock',
        img: "Images/Coutureproduct7.webp",
        colour: 'Lilac',
        fabric: 'Net'
    },
    {
        id: 336,
        name: 'MC-807',
        price: 'PKR 89,000.00',
        availability: 'In stock',
        img: "Images/Coutureproduct8.webp",
        colour: 'Sea Green',
        fabric: 'Net'
    },
    {
        id: 337,
        name: 'MC-808',
        price: 'PKR 209,000.00',
        availability: 'In stock',
        img: "Images/Coutureproduct9.webp",
        colour: 'Queen Pink',
        fabric: 'Net'
    },
    {
        id: 338,
        name: 'MC-809',
        price: 'PKR 85,000.00',
        availability: 'In stock',
        img: "Images/Coutureproduct10.webp",
        colour: 'Queen Pink',
        fabric: 'Net'
    },
    {
        id: 339,
        name: 'MC-901',
        price: 'PKR 179,000.00',
        availability: 'In stock',
        img: "Images/Coutureproduct11.webp",
        colour: 'Mint Green',
        fabric: 'Net'
    },
    {
        id: 340,
        name: 'MC-903',
        price: 'PKR 164,000.00',
        availability: 'In stock',
        img: "Images/Coutureproduct12.webp",
        colour: 'Pale Pink',
        fabric: 'Pure Organza'
    },
    {
        id: 341,
        name: 'MC-701',
        price: 'PKR 100,000.00',
        availability: 'In stock',
        img: "Images/Coutureproduct13.webp",
        colour: 'Carrot Pink',
        fabric: 'Pure Organza with Lining'
    },
    {
        id: 342,
        name: 'MC-904',
        price: 'PKR 155,000.00',
        availability: 'In stock',
        img: "Images/Coutureproduct14.webp",
        colour: 'Ice Blue',
        fabric: 'Pure Organza'
    },
    {
        id: 343,
        name: 'MC-907',
        price: 'PKR 200,000.00',
        availability: 'In stock',
        img: "Images/Coutureproduct15.webp",
        colour: 'Deep Red',
        fabric: 'Pure Raw Silk'
    },
    {
        id: 344,
        name: 'MC-908',
        price: 'PKR 84,000.00',
        availability: 'In stock',
        img: "Images/Coutureproduct16.webp",
        colour: 'Ice Blue',
        fabric: 'Pure Organza'
    }
]

var coutureProducts = document.querySelector('.Couture-products');

for (var i = 0; i < couturePrcts.length; i++) {
    var couturePrdcts = couturePrcts[i];

    coutureProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${couturePrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${couturePrdcts.name}
                </a>
                <span class='product-price'>
                    ${couturePrdcts.price}
                </span>
            </div>
            <div>
            <button class="Coutureproduct-btn" href='coutureprdcts.html?id=${couturePrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.Coutureproduct-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `coutureprdcts.html?id=${productID}`;
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