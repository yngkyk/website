const toggleTheme = document.getElementById('theme-toggle');
const html = document.documentElement;

toggleTheme.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        toggleTheme.textContent = '☾';
    }
    else {
        html.classList.add('dark');
        toggleTheme.textContent = '☀';
    }
})