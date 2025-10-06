document.addEventListener('DOMContentLoaded', function() {

    // --- Dropdown Logic ---
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

    // --- Search Functionality ---
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    const logoLink = document.querySelector('.logo a');

    if (searchForm && logoLink) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                // Get the base path from the dynamically generated logo link
                const homePath = logoLink.getAttribute('href'); 
                const searchPagePath = homePath.replace('home.html', 'search-results.html');
                
                window.location.href = `${searchPagePath}?q=${encodeURIComponent(query)}`;
            }
        });
    }
});