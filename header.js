function generateHeader() {
    // Improved path calculation that works in all environments
    function calculateRelativePath() {
        const path = window.location.pathname;
        const pathSegments = path.split('/');
        
        // Find ISRO_Remastered in path or fallback to calculating based on path depth
        const baseDirIndex = pathSegments.indexOf('ISRO_Remastered');
        
        if (baseDirIndex !== -1) {
            const depth = pathSegments.length - baseDirIndex - 2;
            return '../'.repeat(Math.max(0, depth));
        } else {
            // Fallback for local development or different environments
            const depth = pathSegments.filter(segment => segment.length > 0).length - 1;
            return '../'.repeat(Math.max(0, depth));
        }
    }
    
    const relativePath = calculateRelativePath();
    const homePath = `${relativePath}index.html`; // Always point to root index.html
    
    const headerHTML = `
    <div class="container header-flex">
        <div class="logo">
            <a href="${homePath}" title="Return to Homepage" class="home-link">
                <img src="${relativePath}images/logos/Indian_Space_Research_Organisation_Logo.svg.png" alt="ISRO Logo">
            </a>
        </div>
        <button class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav class="main-nav">
            <ul id="main-menu" class="nav-list">
                <li><a href="${homePath}" class="home-nav-item"><i class="fa fa-home"></i> Home</a></li>
                <li><a href="${relativePath}home/home.html#about">About Us</a></li>
                <li class="dropdown">
                    <a href="${relativePath}missions/missions.html" id="missions-btn" class="dropbtn">Missions</a>
                    <div id="missions-menu" class="dropdown-content">
                        <a href="${relativePath}missions/science-article.html">Science</a>
                        <a href="${relativePath}missions/humans-article.html">Human</a>
                        <a href="${relativePath}missions/aeronautics-article.html">Aeronautics</a>
                        <a href="${relativePath}missions/technology-article.html">Technology</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="${relativePath}news/news.html" id="news-btn" class="dropbtn">News & Events</a>
                    <div id="news-menu" class="dropdown-content">
                        <a href="${relativePath}news/releases/index.html">News Releases</a>
                        <a href="${relativePath}news/recently-published/index.html">Recently Published</a>
                        <a href="${relativePath}news/blogs/index.html">Blogs</a>
                        <a href="${relativePath}news/newsletters/index.html">Newsletters</a>
                        <a href="${relativePath}news/events/index.html">Events</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="${relativePath}careers/opportunities/index.html" id="careers-btn" class="dropbtn">Careers</a>
                    <div id="careers-menu" class="dropdown-content">
                        <a href="${relativePath}careers/opportunities/index.html">Opportunities</a>
                        <a href="${relativePath}careers/engagement-programmes/index.html">Engagement Programmes</a>
                        <a href="${relativePath}careers/students/index.html">Students</a>
                        <a href="${relativePath}careers/training/index.html">Training</a>
                    </div>
                </li>
                <li class="search-container">
                    <form class="search-form" role="search" action="${relativePath}home/search-results.html" method="get">
                        <input type="search" name="query" class="search-input" placeholder="Search..." aria-label="Search">
                    </form>
                </li>
            </ul>
        </nav>
    </div>
    `;
    
    document.querySelector('.main-header').innerHTML = headerHTML;
    
    // Set up dropdown functionality
    setupDropdowns();
    
    // Set up mobile menu
    setupMobileMenu();
    
    // Highlight active page link
    highlightCurrentPage();
}

// Set up dropdown menus
function setupDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropbtn');
        const content = dropdown.querySelector('.dropdown-content');
        
        if (button && content) {
            button.addEventListener('click', function(e) {
                // Allow navigation to main category page while also showing dropdown
                if (e.target === button) {
                    // Toggle dropdown
                    const isActive = content.classList.contains('show');
                    
                    // Close all dropdowns first
                    document.querySelectorAll('.dropdown-content').forEach(menu => {
                        menu.classList.remove('show');
                    });
                    
                    // If this dropdown wasn't active, show it
                    if (!isActive) {
                        content.classList.add('show');
                        e.preventDefault(); // Prevent navigation only when opening dropdown
                    }
                }
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.matches('.dropbtn')) {
            document.querySelectorAll('.dropdown-content').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
}

// Set up mobile menu toggle
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = navList.classList.toggle('active');
            menuToggle.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }
}

// Highlight current page in navigation
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-list a');
    
    links.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath && currentPath.includes(linkPath) && linkPath !== '#' && linkPath !== 'index.html') {
            link.classList.add('active');
            
            // If it's in a dropdown, also highlight the parent
            const parentDropdown = link.closest('.dropdown');
            if (parentDropdown) {
                const dropdownButton = parentDropdown.querySelector('.dropbtn');
                if (dropdownButton) {
                    dropdownButton.classList.add('active');
                }
            }
        }
    });
}

// Execute when DOM is loaded
document.addEventListener('DOMContentLoaded', generateHeader);