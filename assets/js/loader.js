




document.addEventListener("DOMContentLoaded", function() {
    // Function to load components from root directory
    function loadComponent(id, fileName) {
        const placeholder = document.getElementById(id);
        if (placeholder) {
            // Use absolute path starting with /
            fetch('/' + fileName)
                .then(response => {
                    if (!response.ok) throw new Error("File not found");
                    return response.text();
                })
                .then(data => {
                    placeholder.innerHTML = data;
                })
                .catch(error => console.error("Error loading " + fileName + ":", error));
        }
    }

    loadComponent('header-wrapper', 'header.html');
    loadComponent('footer-wrapper', 'footer.html');
    loadComponent('sidebar-wrapper', 'sidebar.html');
});