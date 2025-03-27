const originalText = document.getElementById('text').innerHTML; // Save original text

function highlightText() {
    const searchTerm = document.getElementById('search').value.trim();
    const textElement = document.getElementById('text');

    if (!searchTerm) {
        alert("Please enter a keyword to search.");
        return;
    }

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    textElement.innerHTML = originalText.replace(regex, '<span class="highlight">$1</span>');
}

function resetHighlight() {
    document.getElementById('text').innerHTML = originalText; // Restore original text
    document.getElementById('search').value = ''; // Clear search box
}