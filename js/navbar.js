/**
 * ISRO Navigation Bar - Mobile Menu Toggle
 * Handles responsive menu functionality
 */

(function() {
    'use strict';

    // Get elements
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // Check if elements exist (defensive programming)
    if (!navToggle || !navMenu) {
        return;
    }

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        const isExpanded = navMenu.classList.toggle('active');
        
        // Update ARIA attribute for accessibility
        navToggle.setAttribute('aria-expanded', isExpanded);
        
        // Animate hamburger icon
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navToggle.contains(event.target) || navMenu.contains(event.target);
        
        if (!isClickInside && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu on ESC key (accessibility)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus(); // Return focus to toggle button
        }
    });

    // Highlight active page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
})();
