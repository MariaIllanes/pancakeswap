document.addEventListener('DOMContentLoaded', function() {
    const themeChange = document.getElementById('main');
    const button = document.getElementById('main');
    const section6 = document.getElementById('section6');


    let isDark = section6.classList.contains('dark-theme');

    themeChange.addEventListener('click', function() {
        isDark = !isDark;
        if (isDark) {
            button.classList.replace('dark-theme','light-theme');
            section6.classList.replace('dark-theme','light-theme');
        } else {
            button.classList.replace('light-theme','dark-theme');
            section6.classList.replace('light-theme','dark-theme');
        }
    });
});