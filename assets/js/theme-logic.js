// Simple Frontend Search (Title based)
const searchInput = document.querySelector('input[type="search"]');
if(searchInput) {
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = this.value.toLowerCase();
            // Redirect to search page with query
            window.location.href = `/categories/search.html?q=${query}`;
        }
    });
}