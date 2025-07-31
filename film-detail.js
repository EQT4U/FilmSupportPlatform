// Film Detail Page JavaScript

// Gallery images for different films
const filmGalleries = {
    'shes-dating-the-gangster': [
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080'
    ],
    'seven-sundays': [
        'https://images.unsplash.com/photo-1577003833619-76bbd7f82948?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
        'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080'
    ],
    '100-tula-para-kay-stella': [
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080'
    ]
};

// Change hero image based on gallery selection
function changeHeroImage(index) {
    const heroImage = document.getElementById('heroImage');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Get current film ID from page URL or title
    const filmId = getCurrentFilmId();
    
    if (filmId && filmGalleries[filmId] && filmGalleries[filmId][index]) {
        heroImage.src = filmGalleries[filmId][index];
        
        // Update active gallery item
        galleryItems.forEach(item => item.classList.remove('active'));
        galleryItems[index].classList.add('active');
    }
}

// Get current film ID from the page
function getCurrentFilmId() {
    const path = window.location.pathname;
    if (path.includes('shes-dating-the-gangster')) return 'shes-dating-the-gangster';
    if (path.includes('seven-sundays')) return 'seven-sundays';
    if (path.includes('100-tula-para-kay-stella')) return '100-tula-para-kay-stella';
    return null;
}

// Initialize film detail page
function initFilmDetail() {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Add click handlers for support and share buttons
    const supportBtn = document.querySelector('.support-btn');
    const shareBtn = document.querySelector('.share-btn');
    
    if (supportBtn) {
        supportBtn.addEventListener('click', openDonationPopup);
    }
    
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    text: document.querySelector('meta[name="description"]').content,
                    url: window.location.href
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                navigator.clipboard.writeText(window.location.href).then(function() {
                    alert('Link copied to clipboard!');
                });
            }
        });
    }
}

// Donation Popup functionality
function openDonationPopup() {
    const popup = document.getElementById('donationPopup');
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeDonationPopup() {
    const popup = document.getElementById('donationPopup');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
    
    // Reset form
    resetDonationForm();
}

function selectAmount(amount) {
    // Clear custom amount input
    document.getElementById('customAmount').value = '';
    
    // Remove selected class from all buttons
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selected class to clicked button
    event.target.classList.add('selected');
    
    // Store selected amount for processing
    window.selectedAmount = amount;
}

function processDonation() {
    const amount = window.selectedAmount || parseInt(document.getElementById('customAmount').value);
    const email = document.getElementById('donorEmail').value;
    const name = document.getElementById('donorName').value;
    const message = document.getElementById('donorMessage').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    // Validate required fields
    if (!amount || amount < 100) {
        alert('Mangyaring pumili ng halaga na hindi bababa sa ₱100.');
        return;
    }
    
    if (!email) {
        alert('Mangyaring ilagay ang inyong email address.');
        return;
    }
    
    // Simulate donation processing
    const donationData = {
        amount: amount,
        email: email,
        name: name || 'Anonymous',
        message: message,
        paymentMethod: paymentMethod,
        filmTitle: document.querySelector('.popup-title').textContent,
        timestamp: new Date().toISOString()
    };
    
    // Show processing message
    const donateBtn = document.querySelector('.donate-btn');
    const originalText = donateBtn.textContent;
    donateBtn.textContent = 'Pinoproseso...';
    donateBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Show success message
        alert(`Salamat sa inyong suporta! Ang inyong donasyon na ₱${amount.toLocaleString()} ay natatanggap na. Makakakuha kayo ng email confirmation sa ${email}.`);
        
        // Close popup
        closeDonationPopup();
        
        // Reset button
        donateBtn.textContent = originalText;
        donateBtn.disabled = false;
        
        // Log donation for demo purposes
        console.log('Donation processed:', donationData);
    }, 2000);
}

function resetDonationForm() {
    // Clear all form fields
    document.getElementById('customAmount').value = '';
    document.getElementById('donorName').value = '';
    document.getElementById('donorEmail').value = '';
    document.getElementById('donorMessage').value = '';
    
    // Clear amount selections
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Reset payment method to first option
    const firstPaymentOption = document.querySelector('input[name="payment"]');
    if (firstPaymentOption) {
        firstPaymentOption.checked = true;
    }
    
    // Clear stored amount
    window.selectedAmount = null;
}

// Handle custom amount input
function handleCustomAmountInput() {
    const customAmountInput = document.getElementById('customAmount');
    if (customAmountInput) {
        customAmountInput.addEventListener('input', function() {
            // Clear all amount button selections when custom amount is entered
            document.querySelectorAll('.amount-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // Store custom amount
            const customAmount = parseInt(this.value);
            if (customAmount && customAmount >= 100) {
                window.selectedAmount = customAmount;
            }
        });
    }
}

// Make functions available globally
window.changeHeroImage = changeHeroImage;
window.openDonationPopup = openDonationPopup;
window.closeDonationPopup = closeDonationPopup;
window.selectAmount = selectAmount;
window.processDonation = processDonation;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initFilmDetail();
    handleCustomAmountInput();
});