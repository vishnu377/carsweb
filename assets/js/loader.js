


document.addEventListener("DOMContentLoaded", function() {
    
    function loadComponent(id, fileName) {
        const placeholder = document.getElementById(id);
        if (placeholder) {
            // '/' लगाने से यह हमेशा Root (Main Folder) से फाइल उठाएगा
            fetch('/' + fileName)
                .then(response => {
                    if (!response.ok) throw new Error("Could not load " + fileName);
                    return response.text();
                })
                .then(data => {
                    placeholder.innerHTML = data;
                })
                .catch(error => console.error("Error:", error));
        }
    }

    // इन तीनों को लोड करो
    loadComponent('header-wrapper', 'header.html');
    loadComponent('footer-wrapper', 'footer.html');
    loadComponent('sidebar-wrapper', 'sidebar.html');
});





























