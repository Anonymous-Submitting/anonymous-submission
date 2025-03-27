const terms = document.querySelectorAll('.term');

terms.forEach(term => {
    term.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event bubbling
        const definition = term.dataset.definition;
        const definitionBox = document.createElement('div');
        definitionBox.className = 'definition';
        definitionBox.textContent = definition;

        // Remove existing definition box if any
        const existingBox = term.nextElementSibling;
        if (existingBox && existingBox.classList.contains('definition')) {
            existingBox.remove();
        } else {
            term.insertAdjacentElement('afterend', definitionBox);
            definitionBox.style.display = 'block'; // Show the definition
        }
    });
});

// Close definition boxes when clicking outside
document.addEventListener('click', (event) => {
    const definitionBoxes = document.querySelectorAll('.definition');
    definitionBoxes.forEach(box => {
        if (box.contains(event.target)) {
            box.remove(); // Remove the definition box
        }
    });
});