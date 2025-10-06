document.addEventListener('DOMContentLoaded', function() {
    const resultsContainer = document.getElementById('search-results');
    const noResultsContainer = document.getElementById('no-results');
    const searchQueryElement = document.getElementById('search-query');
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');

    if (query) {
        searchQueryElement.innerHTML = `Search Results for: <span>"${query}"</span>`;
        searchArticles(query);
    }

    async function searchArticles(query) {
        const articles = [
            '../articles/astrosat-article.html',
            '../articles/chandrayaan-article.html',
            '../articles/gaganyaan-article.html',
            '../articles/gslv-article.html',
            '../articles/mangalyaan-article.html',
            '../articles/nisar-article.html',
            '../missions/humans-article.html',
            '../missions/aeronautics-article.html',
            '../missions/science-article.html',
            '../missions/technology-article.html'
        ];

        let resultsFound = false;

        for (const articleUrl of articles) {
            try {
                const response = await fetch(articleUrl);
                const html = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const articleContent = doc.body.textContent || doc.body.innerText;
                const title = doc.querySelector('title').textContent;
                const intro = doc.querySelector('.article-intro') ? doc.querySelector('.article-intro').textContent.trim() : 'No summary available.';


                if (articleContent.toLowerCase().includes(query.toLowerCase())) {
                    resultsFound = true;
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('result-item');
                    resultItem.innerHTML = `
                        <h3><a href="${articleUrl}">${title}</a></h3>
                        <p>${intro}</p>
                    `;
                    resultsContainer.appendChild(resultItem);
                }
            } catch (error) {
                console.error('Error fetching or parsing article:', error);
            }
        }

        if (!resultsFound) {
            noResultsContainer.style.display = 'block';
        }
    }
});