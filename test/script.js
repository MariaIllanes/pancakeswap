document.addEventListener('DOMContentLoaded', function() {
    const themeChange = document.getElementById('theme-change');
    const body = document.body;

    let isDark = false;

    themeChange.addEventListener('click', function() {
        isDark = !isDark;
        if (isDark) {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
        }
    });
});
