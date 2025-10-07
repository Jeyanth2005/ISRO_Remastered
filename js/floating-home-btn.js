/**
 * Floating Home Button
 * Provides an easy way to navigate back to homepage
 * Appears after scrolling down
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        // Create floating button element
        const floatingButton = document.createElement('a');
        floatingButton.id = 'floating-home-btn';
        floatingButton.href = getHomePath();
        floatingButton.setAttribute('aria-label', 'Return to Homepage');
        floatingButton.title = 'Return to Homepage';
        floatingButton.innerHTML = '<i class="fa fa-home"></i>';
        document.body.appendChild(floatingButton);

        // Get relative path to homepage
        function getHomePath() {
            const path = window.location.pathname;
            const pathSegments = path.split('/');
            const baseDirIndex = pathSegments.indexOf('ISRO_Remastered');
            const depth = pathSegments.length - baseDirIndex - 2;
            let relativePath = '../'.repeat(depth > 0 ? depth : 0);
            
            if (baseDirIndex === -1) {
                const depth = Math.max(0, pathSegments.filter(segment => segment.length > 0).length - 1);
                relativePath = '../'.repeat(depth);
            }
            
            return relativePath + 'home/home.html';
        }

        // Show button on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                floatingButton.classList.add('visible');
            } else {
                floatingButton.classList.remove('visible');
            }
        });
    });
})();
