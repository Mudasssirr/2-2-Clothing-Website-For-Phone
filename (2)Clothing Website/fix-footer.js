const footerContent = document.querySelectorAll('.footer-content');

footerContent.forEach((footerContent) => {
  footerContent.addEventListener('click', function(event) {
    const toggle = event.target.closest('.dropdown-toggle');
    if (toggle) {
      const plusMinus = toggle.querySelector('.plus-minus');
      plusMinus.textContent = (toggle.getAttribute('aria-expanded') === 'true') ? '+' : '-';
    }
  });
});