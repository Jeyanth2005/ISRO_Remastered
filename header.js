function generateHeader() {
    const path = window.location.pathname;
    const pathSegments = path.split('/');
    // Find the base directory of the project to create accurate relative paths
    const baseDirIndex = pathSegments.indexOf('ISRO_Remastered-ebabdc8e873f14ed5dc48ba392587942ebaa4a85');
    const depth = pathSegments.length - baseDirIndex - 2;
    const relativePath = '../'.repeat(depth > 0 ? depth : 0);

    const headerHTML = `
    <div class="container header-flex">
        <div class="logo">
            <a href="${relativePath}home/home.html">
                <img src="${relativePath}images/logos/Indian_Space_Research_Organisation_Logo.svg.png" alt="ISRO Logo">
            </a>
        </div>
        <nav class="main-nav">
            <ul id="main-menu" class="nav-list">
                <li><a href="${relativePath}home/home.html#hero">Home</a></li>
                <li><a href="${relativePath}home/home.html#about">About Us</a></li>
                <li class="dropdown">
                    <a href="#" id="missions-btn" class="dropbtn">Missions</a>
                    <div id="missions-menu" class="dropdown-content">
                        <a href="${relativePath}missions/science-article.html">Science</a>
                        <a href="${relativePath}missions/humans-article.html">Human</a>
                        <a href="${relativePath}missions/aeronautics-article.html">Aeronautics</a>
                        <a href="${relativePath}missions/technology-article.html">Technology</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="#" id="news-btn" class="dropbtn">News & Events</a>
                    <div id="news-menu" class="dropdown-content">
                        <a href="${relativePath}news/releases/index.html">News Release</a>
                        <a href="${relativePath}news/recently-published/index.html">Recently Published</a>
                        <a href="${relativePath}news/blogs/index.html">Blogs</a>
                        <a href="${relativePath}news/newsletters/index.html">Newsletters</a>
                        <a href="${relativePath}news/events/index.html">Events</a>
                        <a href="${relativePath}news/launches/index.html">Upcoming Launches & Landings</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="#" id="careers-btn" class="dropbtn">Careers</a>
                    <div id="careers-menu" class="dropdown-content">
                        <a href="${relativePath}careers/opportunities/index.html">Opportunities</a>
                        <a href="${relativePath}careers/engagement-programmes/index.html">Engagement Programmes</a>
                        <a href="${relativePath}careers/students/index.html">Students</a>
                        <a href="${relativePath}careers/training/index.html">Training</a>
                    </div>
                </li>
                <li class="search-container">
                    <form class="search-form" role="search">
                        <input type="search" class="search-input" placeholder="Search..." aria-label="Search">
                    </form>
                </li>
            </ul>
        </nav>
    </div>
    `;
    document.querySelector('.main-header').innerHTML = headerHTML;
}

generateHeader();