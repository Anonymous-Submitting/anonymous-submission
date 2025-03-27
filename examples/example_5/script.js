// Tooltips show on hover
const terms = document.querySelectorAll('.term');
terms.forEach(term => {
    term.addEventListener('mouseenter', function() {
        const tooltip = this.querySelector('.tooltip');
        tooltip.style.display = 'block';
    });
    term.addEventListener('mouseleave', function() {
        const tooltip = this.querySelector('.tooltip');
        tooltip.style.display = 'none';
    });
});