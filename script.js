document.addEventListener('DOMContentLoaded', function() {

    // --- Simple Dropdown Logic for Testing ---
    const missionsButton = document.getElementById('missions-btn');
    const missionsMenu = document.getElementById('missions-menu');
    
    const newsButton = document.getElementById('news-btn');
    const newsMenu = document.getElementById('news-menu');

    // Function to close all menus
    function closeAllMenus() {
        missionsMenu.classList.remove('is-active');
        newsMenu.classList.remove('is-active');
    }

    // Event listener for the Missions button
    missionsButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the click from closing the menu immediately
        const isActive = missionsMenu.classList.contains('is-active');
        closeAllMenus(); // Close other menus
        if (!isActive) {
            missionsMenu.classList.add('is-active'); // Open this menu if it was closed
        }
    });

    // Event listener for the News button
    newsButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the click from closing the menu immediately
        const isActive = newsMenu.classList.contains('is-active');
        closeAllMenus(); // Close other menus
        if (!isActive) {
            newsMenu.classList.add('is-active'); // Open this menu if it was closed
        }
    });

    // Add a global click listener to close menus when clicking anywhere else
    document.addEventListener('click', function() {
        closeAllMenus();
    });

});