const darkbtn = document.getElementById('dark');
const lightbtn = document.getElementById('light');

function darkMode(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme','dark');
    }
    else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme','light')
    }
}

darkbtn.addEventListener('click', () => darkMode(true));
lightbtn.addEventListener('click', () => darkMode(false));

const save_theme = localStorage.getItem('theme');

if (save_theme === 'dark') {
    darkMode(true);
} else {
    darkMode(false);
}