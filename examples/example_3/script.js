// Font selection
const fontSelect = document.getElementById('font-select');
fontSelect.addEventListener('change', (e) => {
  document.body.style.fontFamily = e.target.value;
});

// Text size selection
const textSizeSelect = document.getElementById('text-size-select');
textSizeSelect.addEventListener('change', (e) => {
  document.body.className = e.target.value;
});

// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});