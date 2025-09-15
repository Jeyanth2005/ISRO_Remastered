document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.getElementById('main-menu');
    const searchInput = document.querySelector('.search-input');
    const searchForm = document.querySelector('.search-form');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navList.classList.toggle('active');
        });
    }

    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                console.log('Search query:', query);
                alert('Searching for: ' + query);
            }
        });
    }

    // Smooth scroll for links starting with '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});