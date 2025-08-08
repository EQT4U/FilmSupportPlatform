// Mobile Navigation Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn.querySelector('.close-icon');

    mobileMenuBtn.addEventListener('click', function() {
        const isOpen = mobileMenu.classList.contains('active');

        if (isOpen) {
            mobileMenu.classList.remove('active');
            menuIcon.style.display = 'inline';
            closeIcon.style.display = 'none';
        } else {
            mobileMenu.classList.add('active');
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'inline';
        }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('.nav-link-mobile');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            menuIcon.style.display = 'inline';
            closeIcon.style.display = 'none';
        });
    });
}

// Scroll to Films Section
function scrollToFilms() {
    document.getElementById('films').scrollIntoView({
        behavior: 'smooth'
    });
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just '#' or if it's meant for external handling
            if (href === '#' || href.includes('film-')) return;

            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize scroll animations for film cards
function initScrollAnimations() {
    const filmCards = document.querySelectorAll('.film-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    filmCards.forEach(card => {
        observer.observe(card);
    });
}

// FAQ Popup Functions
function openFAQPopup(faqId) {
    const popup = document.getElementById(faqId);
    if (popup) {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeFAQPopup(faqId) {
    const popup = document.getElementById(faqId);
    if (popup) {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close popup when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('popup-overlay')) {
        event.target.parentNode.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close popup with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const popups = document.querySelectorAll('.faq-popup');
        popups.forEach(popup => {
            popup.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
    }
});


// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
});

// Make scrollToFilms available globally for inline onclick
window.scrollToFilms = scrollToFilms;