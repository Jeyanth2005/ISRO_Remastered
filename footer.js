function generateFooter() {
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

    const footerHTML = `
    <div class="container">
        <div class="footer-grid">
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="${homePath}">Home</a></li>
                    <li><a href="${relativePath}missions/missions.html">Missions</a></li>
                    <li><a href="${relativePath}news/news.html">News</a></li>
                    <li><a href="${relativePath}careers/opportunities/index.html">Careers</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Connect With Us</h3>
                <div class="social-links">
                    <a href="#" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fa fa-twitter"></i></a>
                    <a href="#" aria-label="YouTube"><i class="fa fa-youtube"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <address>
                    ISRO Headquarters<br>
                    Antariksh Bhavan<br>
                    New BEL Road, Bangalore-560231<br>
                    India
                </address>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} Indian Space Research Organisation. All Rights Reserved.</p>
        </div>
    </div>
    `;
    
    document.querySelector('.main-footer').innerHTML = footerHTML;
}

// Execute footer generation when DOM is loaded
document.addEventListener('DOMContentLoaded', generateFooter);
