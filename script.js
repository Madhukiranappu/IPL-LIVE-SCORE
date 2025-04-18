document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and contents
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked link and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            
            // Also update the sidebar active state
            const sidebarLinks = document.querySelectorAll('.sidebar .tab-link');
            sidebarLinks.forEach(sideLink => {
                if (sideLink.getAttribute('data-tab') === tabId) {
                    sideLink.classList.add('active');
                } else {
                    sideLink.classList.remove('active');
                }
            });
        });
    });
    
    // Simulate loading live data
    setTimeout(() => {
        const errorElement = document.querySelector('#live .error-message');
        if (errorElement) {
            errorElement.innerHTML = '<p>Live data will appear here when matches are in progress</p>';
        }
    }, 2000);
    
    // In a real app, you would fetch data from an API here
    // fetchIPLData();
});

function fetchIPLData() {
    // This would be your actual API call implementation
    // For now, it's just a placeholder
    console.log('Fetching IPL data...');
}