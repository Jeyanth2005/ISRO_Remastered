document.addEventListener('DOMContentLoaded', function() {

    // ========== DROPDOWN LOGIC ==========
    const missionsButton = document.getElementById('missions-btn');
    const missionsMenu = document.getElementById('missions-menu');
    const newsButton = document.getElementById('news-btn');
    const newsMenu = document.getElementById('news-menu');
    const careersButton = document.getElementById('careers-btn');
    const careersMenu = document.getElementById('careers-menu');

    function closeAllMenus() {
        if(missionsMenu) missionsMenu.classList.remove('is-active');
        if(newsMenu) newsMenu.classList.remove('is-active');
        if(careersMenu) careersMenu.classList.remove('is-active');
    }

    function setupDropdown(button, menu) {
        if (button && menu) {
            button.addEventListener('click', function(event) {
                event.stopPropagation();
                const isActive = menu.classList.contains('is-active');
                closeAllMenus();
                if (!isActive) {
                    menu.classList.add('is-active');
                }
            });
        }
    }

    setupDropdown(missionsButton, missionsMenu);
    setupDropdown(newsButton, newsMenu);
    setupDropdown(careersButton, careersMenu);
    
    document.addEventListener('click', function() {
        closeAllMenus();
    });

    // ========== MOBILE MENU TOGGLE ==========
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navList.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Animate hamburger icon
            const isActive = navList.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isActive);
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = menuToggle.contains(event.target) || navList.contains(event.target);
            if (!isClickInside && navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ========== SEARCH FUNCTIONALITY ==========
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    const logoLink = document.querySelector('.logo a');

    if (searchForm && logoLink) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                const homePath = logoLink.getAttribute('href'); 
                const searchPagePath = homePath.replace('home.html', 'search-results.html');
                window.location.href = `${searchPagePath}?q=${encodeURIComponent(query)}`;
            }
        });
    }

    // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
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

    // ========== SCROLL ARROW FUNCTIONALITY ==========
    const scrollArrow = document.querySelector('.scroll-arrow');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // ========== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all mission cards and news items
    document.querySelectorAll('.mission-card, .news-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});