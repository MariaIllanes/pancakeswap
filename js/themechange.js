document.addEventListener('DOMContentLoaded', function() {
    const themeChange = document.getElementById('main');
    const button = document.getElementById('main');
    const section = document.getElementById('section6')


    let isDark = button.classList.contains('dark-theme');

    themeChange.addEventListener('click', function() {
        isDark = !isDark;
        if (isDark) {
            button.classList.replace('dark-theme','light-theme');
            section.classList.replace('dark-theme','light-theme');
        } else {
            button.classList.replace('light-theme','dark-theme');
            section.classList.replace('light-theme','dark-theme');
        }
    });
});