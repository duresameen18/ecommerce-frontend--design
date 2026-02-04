/* ============================================ */
/* JAVASCRIPT INTERACTIONS - WEEK 3 */
/* ============================================ */

// Cart Count
let cartCount = 0;

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        showToast(`Searching for: ${searchTerm}`);
        // In a real application, this would redirect to search results
        console.log('Search term:', searchTerm);
    } else {
        showToast('Please enter a search term', 'warning');
    }
}

// Handle Enter key in search box
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
});

// ============================================
// PRODUCT DETAIL PAGE FUNCTIONS
// ============================================

// Change main product image when thumbnail is clicked
function changeMainImage(thumbnail) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Remove active class from all thumbnails
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    
    // Add active class to clicked thumbnail
    thumbnail.classList.add('active');
    
    // Change main image source
    const newImageSrc = thumbnail.src.replace('w=150', 'w=600');
    mainImage.src = newImageSrc;
}

// Select color option
function selectColor(button) {
    const colorButtons = document.querySelectorAll('.color-option');
    colorButtons.forEach(btn => btn.classList.remove('active'));
    
    button.classList.add('active');
    
    const selectedColor = button.getAttribute('data-color');
    document.getElementById('selectedColor').textContent = selectedColor;
}

// Select size from dropdown
function selectSize(select) {
    const selectedSize = select.value;
    console.log('Selected size:', selectedSize);
}

// Increase quantity
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    const maxValue = parseInt(quantityInput.max);
    
    if (currentValue < maxValue) {
        quantityInput.value = currentValue + 1;
    }
}

// Decrease quantity
function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    const minValue = parseInt(quantityInput.min);
    
    if (currentValue > minValue) {
        quantityInput.value = currentValue - 1;
    }
}

// Add to cart
function addToCart() {
    const quantity = document.getElementById('quantity').value;
    const color = document.getElementById('selectedColor').textContent;
    const size = document.getElementById('sizeSelect') ? document.getElementById('sizeSelect').value : 'N/A';
    
    // Update cart count
    cartCount += parseInt(quantity);
    const cartBadge = document.getElementById('cartCount');
    if (cartBadge) {
        cartBadge.textContent = cartCount;
    }
    
    // Show success message
    showToast(`Added ${quantity} item(s) to cart! (${color}, ${size})`);
    
    // Log the action
    console.log('Added to cart:', {
        quantity: quantity,
        color: color,
        size: size
    });
}

// Add to wishlist
function addToWishlist() {
    showToast('Added to wishlist!', 'success');
    console.log('Added to wishlist');
}

// ============================================
// TABS FUNCTIONALITY
// ============================================
function switchTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    // Show selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (!toast || !toastMessage) return;
    
    // Set message
    toastMessage.textContent = message;
    
    // Set color based on type
    if (type === 'success') {
        toast.style.background = '#28a745';
    } else if (type === 'warning') {
        toast.style.background = '#ffc107';
        toast.style.color = '#000';
    } else if (type === 'error') {
        toast.style.background = '#dc3545';
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        // Reset styles
        setTimeout(() => {
            toast.style.background = '#28a745';
            toast.style.color = '#fff';
        }, 400);
    }, 3000);
}

// ============================================
// WISHLIST TOGGLE (for product cards)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const wishlistButtons = document.querySelectorAll('.product-wishlist');
    
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                showToast('Added to wishlist!');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                showToast('Removed from wishlist!', 'warning');
            }
        });
    });
});

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// CATEGORY MENU BUTTON (expandable in future)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtn = document.querySelector('.category-menu-btn');
    if (categoryBtn) {
        categoryBtn.addEventListener('click', function() {
            showToast('Category menu will open here!', 'warning');
            console.log('Category menu clicked');
        });
    }
});

// ============================================
// FILTER TAGS REMOVE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const filterTags = document.querySelectorAll('.filter-tag i');
    
    filterTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.parentElement.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                this.parentElement.remove();
            }, 300);
        });
    });
});

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.8);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// LOADING STATE FOR BUTTONS
// ============================================
function addLoadingState(button) {
    const originalText = button.innerHTML;
    button.disabled = true;
    button.innerHTML = '<span class="loading"></span> Loading...';
    
    setTimeout(() => {
        button.disabled = false;
        button.innerHTML = originalText;
    }, 1500);
}

// ============================================
// IMAGE LAZY LOADING - DISABLED (was causing blinking)
// ============================================
// Removed to prevent image flickering on page load

// ============================================
// CONSOLE WELCOME MESSAGE
// ============================================
console.log('%c Welcome to E-Commerce Store! ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 20px; padding: 10px 20px; border-radius: 8px;');
console.log('%c Built with HTML, CSS, and JavaScript ', 'background: #f5f5f5; color: #333; font-size: 14px; padding: 5px 10px;');
console.log('%c Frontend Development Task - DevelopersHub Internship ', 'color: #667eea; font-size: 12px;');

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format price
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

// Generate random product ID
function generateProductId() {
    return 'PROD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Get current date formatted
function getCurrentDate() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

console.log('Script loaded successfully! Current date:', getCurrentDate());
