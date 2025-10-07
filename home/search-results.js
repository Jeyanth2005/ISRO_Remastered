document.addEventListener('DOMContentLoaded', function() {
    // Get query parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query') || '';
    
    // Display the search query
    const searchQueryElement = document.getElementById('search-query');
    if (searchQueryElement) {
        searchQueryElement.textContent = `Search Results for: "${query}"`;
    }
    
    // Sample search database - in a real application this would come from a backend
    const searchData = [
        {
            title: 'Chandrayaan-3 Rover Completes its Mission',
            url: '../news/releases/chandrayaan-3-rover-mission-complete.html',
            type: 'News Release',
            date: 'November 28, 2023',
            snippet: 'The Pragyan rover of the Chandrayaan-3 mission has successfully completed its assignments on the lunar surface and is now in sleep mode.'
        },
        {
            title: 'Behind the Scenes: The Making of a Mars Rover',
            url: '../news/blogs/making-of-a-mars-rover.html',
            type: 'Blog Post',
            date: 'October 10, 2025',
            snippet: 'A deep dive into the engineering challenges and triumphs of building a rover destined for the Red Planet.'
        },
        {
            title: 'Gaganyaan Mission: First Uncrewed Flight Test Scheduled',
            url: '../news/releases/gaganyaan-uncrewed-flight.html',
            type: 'News Release',
            date: 'October 05, 2025',
            snippet: 'ISRO announces that the first uncrewed flight test of the Gaganyaan program is scheduled for the last quarter of this year.'
        },
        {
            title: 'India\'s Leap to the Stars: The Gaganyaan Mission',
            url: '../missions/humans-article.html',
            type: 'Mission Information',
            date: 'Updated 2025',
            snippet: 'The Gaganyaan project envisages the launch of a three-member crew into a Low Earth Orbit (LEO) of 400 kilometers for a mission lasting up to three days.'
        },
        {
            title: 'National Space Science Symposium',
            url: '../news/events/space-science-symposium.html',
            type: 'Event',
            date: 'November 22-24, 2025',
            snippet: 'ISRO is proud to host the National Space Science Symposium, bringing together scientists, engineers, and students from across the country.'
        }
    ];
    
    // Filter results based on query
    const filteredResults = query 
        ? searchData.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) || 
            item.snippet.toLowerCase().includes(query.toLowerCase())
          )
        : [];
    
    const resultsContainer = document.getElementById('search-results');
    const noResultsElement = document.getElementById('no-results');
    
    if (!resultsContainer || !noResultsElement) return;
    
    // Display results or no results message
    if (filteredResults.length > 0) {
        resultsContainer.innerHTML = ''; // Clear any existing content
        
        filteredResults.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'job-item';
            resultItem.innerHTML = `
                <div class="result-meta">
                    <span class="result-type">${result.type}</span>
                    <span class="result-date">${result.date}</span>
                </div>
                <h3><a href="${result.url}">${result.title}</a></h3>
                <p>${result.snippet}</p>
                <a href="${result.url}" class="read-more">Read More <i class="fa fa-arrow-right"></i></a>
            `;
            resultsContainer.appendChild(resultItem);
        });
        
        noResultsElement.style.display = 'none';
    } else {
        resultsContainer.innerHTML = '';
        noResultsElement.style.display = 'block';
    }
});