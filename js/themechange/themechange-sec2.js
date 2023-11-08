document.addEventListener('DOMContentLoaded', function() {
    const themeChange = document.getElementById('main');
    const button = document.getElementById('main');
    const section2 = document.getElementById('section2');


    let isDark = section2.classList.contains('dark-theme');

    themeChange.addEventListener('click', function() {
        isDark = !isDark;
        if (isDark) {
            button.classList.replace('dark-theme','light-theme');
            section2.classList.replace('dark-theme','light-theme');
        } else {
            button.classList.replace('light-theme','dark-theme');
            section2.classList.replace('light-theme','dark-theme');
        }
    });
});