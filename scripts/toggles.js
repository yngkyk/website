const toggleTheme = document.getElementById('theme-toggle');
const toggleTone = document.getElementById('tone-toggle');
const html = document.documentElement;

toggleTone.addEventListener('click', () => {
    if (html.classList.contains('friendly')) {
        html.classList.remove('friendly');
        toggleTone.textContent = '❀';
    }
    else {
        html.classList.add('friendly');
        toggleTone.textContent = '✦';
    }
})

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