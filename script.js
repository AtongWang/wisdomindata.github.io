// Wisdom in Data Platform JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initScrollAnimations();
    initSmoothScrolling();
    initLoadingAnimations();
    initInteractiveElements();
});

// Navbar functionality
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(13, 110, 253, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(13, 110, 253, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Active nav link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Auto-highlight current section
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .workflow-card, .demo-card, .research-card, .contact-card');
    animateElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Loading animations
function initLoadingAnimations() {
    // Add loading class to elements
    const loadingElements = document.querySelectorAll('.feature-card, .workflow-card, .demo-card, .research-card');
    
    loadingElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('loaded');
        }, index * 100);
    });
}

// Interactive elements
function initInteractiveElements() {
    // Feature card hover effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Demo card interactions
    const demoCards = document.querySelectorAll('.demo-card');
    demoCards.forEach(card => {
        const button = card.querySelector('.btn');
        if (button) {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        }
    });
    
    // Contact item interactions
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// Statistics counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = current.toFixed(1) + (counter.textContent.includes('%') ? '%' : '');
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target + (counter.textContent.includes('%') ? '%' : '');
            }
        };
        
        updateCounter();
    });
}

// Parallax effect for hero section
function initParallax() {
    const heroSection = document.querySelector('.hero-section');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroSection && heroImage) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            heroImage.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Typing effect for hero title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-section h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 500);
    }
}

// Performance monitoring
function initPerformanceMonitoring() {
    // Track page load time
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
    });
    
    // Track scroll performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(function() {
            // Optimize scroll performance
            document.body.style.pointerEvents = 'auto';
        }, 100);
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
        
        // Close mobile menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.navbar-nav .nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarCollapse.classList.remove('show');
            });
        });
    }
}

// Video modal functionality
function initVideoModals() {
    const videoButtons = document.querySelectorAll('.demo-card .btn');
    
    videoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const videoUrl = this.getAttribute('href');
            
            // Create modal for video
            const modal = document.createElement('div');
            modal.className = 'video-modal';
            modal.innerHTML = `
                <div class="video-modal-content">
                    <span class="video-modal-close">&times;</span>
                    <iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Close modal functionality
            const closeBtn = modal.querySelector('.video-modal-close');
            closeBtn.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
            
            e.preventDefault();
        });
    });
}

// Add CSS for video modal
const videoModalCSS = `
    .video-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    }
    
    .video-modal-content {
        position: relative;
        width: 90%;
        max-width: 800px;
        background: white;
        border-radius: 10px;
        overflow: hidden;
    }
    
    .video-modal-close {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 30px;
        color: white;
        cursor: pointer;
        z-index: 10000;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .video-modal-content iframe {
        width: 100%;
        height: 450px;
    }
`;

// Inject video modal CSS
const style = document.createElement('style');
style.textContent = videoModalCSS;
document.head.appendChild(style);

// Initialize all additional features
document.addEventListener('DOMContentLoaded', function() {
    initParallax();
    initTypingEffect();
    initPerformanceMonitoring();
    initMobileMenu();
    initVideoModals();
    
    // Start counter animation when hero section is visible
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(heroSection);
    }
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

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

// Optimize scroll performance
const optimizedScrollHandler = throttle(function() {
    // Scroll-based animations and effects
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Add loading state to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        const originalText = e.target.innerHTML;
        e.target.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Loading...';
        e.target.disabled = true;
        
        // Reset button after a delay (simulate loading)
        setTimeout(() => {
            e.target.innerHTML = originalText;
            e.target.disabled = false;
        }, 2000);
    }
});

// Add active class to current nav item
function setActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', debounce(() => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, 100));
}

// Initialize active nav item tracking
setActiveNavItem(); 