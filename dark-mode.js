function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');

    // Save preference in localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Function to apply dark mode on page load based on saved preference
function applyDarkModePreference() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}

// Ensure dark mode is applied when the page loads
document.addEventListener("DOMContentLoaded", applyDarkModePreference);
