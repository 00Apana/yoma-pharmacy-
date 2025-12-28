/* --- YOMA Pharmacy Robust Script --- */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle - Fixed Logic
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.onclick = function() {
            navLinks.classList.toggle('active');
            // Optional: Changes the hamburger to an 'X' if you add CSS for it
            menuToggle.classList.toggle('open');
        };
    }

    // 2. Prescription Form Handling
    // Your HTML uses <form class="prescription-form">
    const prescriptionForm = document.querySelector('.prescription-form');
    if (prescriptionForm) {
        prescriptionForm.onsubmit = function(e) {
            e.preventDefault();
            const nameInput = document.getElementById('fullName');
            const name = nameInput ? nameInput.value : "Customer";
            alert(`Thank you, ${name}! Your prescription has been uploaded successfully.`);
            prescriptionForm.reset();
        };
    }

    // 3. Contact Form Handling
    // Checks for the form inside the .contact-form container
    const contactForm = document.querySelector('.contact-form form') || document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.onsubmit = function(e) {
            e.preventDefault();
            alert("Message sent! YOMA Pharmacy will contact you shortly.");
            contactForm.reset();
        };
    }

    // 4. Shop Logic (Add to Cart)
    const cartButtons = document.querySelectorAll('.add-to-cart-btn');
    cartButtons.forEach(button => {
        button.onclick = function() {
            // Finding the product name from your <h4> tag in shop.html
            const productCard = this.closest('.product-card');
            const productName = productCard ? productCard.querySelector('h4').innerText : "Item";
            alert(`${productName} added to your cart!`);
        };
    });

    // 5. Search Bar Logic (Home Page)
    const searchBtn = document.getElementById('searchBtn') || document.querySelector('.search-container button');
    if (searchBtn) {
        searchBtn.onclick = function() {
            const searchInput = document.getElementById('searchInput') || document.querySelector('.search-container input');
            if (searchInput && searchInput.value) {
                alert(`Searching for ${searchInput.value}...`);
            } else {
                alert("Please enter a medicine name to search.");
            }
        };
    }
});