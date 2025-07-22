// Intuitive Movement Website JavaScript
// Simple, lightweight interactions for enhanced user experience

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileNavigation();
    initSmoothScrolling();
    initContactForm();
    initScrollAnimations();
    initNavigationHighlight();
});

// Mobile Navigation Toggle
function initMobileNavigation() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('mobile-menu-open');
            mobileToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('mobile-menu-open');
                mobileToggle.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('mobile-menu-open');
                mobileToggle.classList.remove('active');
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.querySelector('.contact-form-element');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                showFormMessage('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Create mailto link with form data
            const subject = encodeURIComponent('Intuitive Movement Inquiry from ' + name);
            const body = encodeURIComponent(
                `Hi Tony,\n\n` +
                `I'm interested in learning more about Intuitive Movement.\n\n` +
                `Name: ${name}\n` +
                `Email: ${email}\n\n` +
                `Message:\n${message}\n\n` +
                `Best regards,\n${name}`
            );
            
            const mailtoLink = `mailto:tonygardiner82@gmail.com?subject=${subject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            showFormMessage('Opening your email client... Thank you for your interest!', 'success');
            
            // Reset form after a short delay
            setTimeout(() => {
                contactForm.reset();
                clearFormMessage();
            }, 3000);
        });
    }
}

// Form Message Display
function showFormMessage(message, type) {
    // Remove existing message
    clearFormMessage();
    
    const form = document.querySelector('.contact-form-element');
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;
    
    // Add styles
    messageDiv.style.cssText = `
        padding: 12px;
        margin: 16px 0;
        border-radius: 8px;
        font-weight: 500;
        text-align: center;
        ${type === 'success' ? 
            'background: #d1f2df; color: #0f5132; border: 1px solid #b3e5c7;' : 
            'background: #f8d7da; color: #842029; border: 1px solid #f1aeb5;'
        }
    `;
    
    form.insertBefore(messageDiv, form.firstChild);
}

function clearFormMessage() {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.audience-card, .point, .benefit-item, .contact-item, .about-text'
    );
    
    animateElements.forEach(element => {
        element.classList.add('animate-element');
        observer.observe(element);
    });
    
    // Add CSS for animations
    addAnimationStyles();
}

// Navigation Highlight on Scroll
function initNavigationHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && 
                window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Add Animation Styles Dynamically
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .animate-element {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-element.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .nav-links a.active {
            color: var(--primary-green);
            position: relative;
        }
        
        .nav-links a.active::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--gold-accent);
            border-radius: 1px;
        }
        
        /* Mobile Menu Styles */
        @media (max-width: 768px) {
            .nav-links {
                position: fixed;
                top: 70px;
                right: -100%;
                width: 280px;
                height: calc(100vh - 70px);
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(10px);
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                padding: 40px 30px;
                gap: 20px;
                transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
            }
            
            .nav-links.mobile-menu-open {
                right: 0;
            }
            
            .nav-links a {
                font-size: 1.1rem;
                padding: 12px 0;
                width: 100%;
                border-bottom: 1px solid rgba(45, 95, 63, 0.1);
            }
            
            .mobile-menu-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(6px, 6px);
            }
            
            .mobile-menu-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(6px, -6px);
            }
        }
        
        /* Floating Animation Enhancement */
        .circle {
            animation: float 6s ease-in-out infinite;
        }
        
        .circle:hover {
            animation-play-state: paused;
            transform: scale(1.1);
        }
        
        /* Button Hover Enhancements */
        .primary-button:active {
            transform: translateY(0);
        }
        
        .secondary-button:active {
            transform: translateY(0);
        }
        
        /* Form Focus Enhancements */
        .form-group input:focus,
        .form-group textarea:focus {
            transform: translateY(-1px);
        }
        
        /* Smooth transitions for all interactive elements */
        .audience-card,
        .point,
        .benefit-item {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    
    document.head.appendChild(style);
}

// Utility function to throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Enhanced scroll event with throttling
window.addEventListener('scroll', throttle(function() {
    // Add navbar background opacity based on scroll
    const nav = document.querySelector('.nav');
    const scrolled = window.pageYOffset > 50;
    
    if (scrolled) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }
}, 16)); // ~60fps

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add a subtle loading animation
    const style = document.createElement('style');
    style.textContent = `
        body:not(.loaded) {
            opacity: 0;
        }
        
        body.loaded {
            opacity: 1;
            transition: opacity 0.3s ease-in-out;
        }
    `;
    document.head.appendChild(style);
}); 
