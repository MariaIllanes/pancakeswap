// const toggleCheckbox = document.getElementById('toggleCheckbox');
//         const footerContainer = document.querySelector('.footer-container, .exchange-stats2-container'); //añadir aqui las clases de las secciones que se ven afectadas y quitar .footer-container. concretar colores

//         toggleCheckbox.addEventListener('change', function () {
//             if (toggleCheckbox.checked) {
//                 footerContainer.style.backgroundColor = '#27262c';
//                 footerContainer.style.color = '#ccc';

//             } else {
//                 footerContainer.style.backgroundColor = '#ccc';
//                 footerContainer.style.color = '#27262c';
//             }
//         });





const svgElement = document.getElementById('logo-telegram');
const customOptions = document.getElementById('telegram-language-options');
let menuVisible = false;

svgElement.addEventListener('mouseenter', function() {
    customOptions.style.display = 'block';
    menuVisible = true;
});

customOptions.addEventListener('mouseleave', function() {
    menuVisible = false;
    setTimeout(() => {
        if (!menuVisible) {
            customOptions.style.display = 'none';
        }
    }, 1000);
});

customOptions.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        const selectedValue = e.target.getAttribute('data-value');
        location.href = selectedValue; 
    }
});

// Hide menu when clicking outside of it
document.addEventListener('click', function(e) {
    const isClickInside = svgElement.contains(e.target) || customOptions.contains(e.target);
    if (!isClickInside) {
        customOptions.style.display = 'none';
        menuVisible = false;
    }
});





// language button

const worldSvgElement = document.getElementById('select-language-web-label');
const languageOptions = document.getElementById('footer-language-options');
let languageMenu = false;

worldSvgElement.addEventListener('mouseenter', function() {
    languageOptions.style.display = 'block';
    languageMenu = true;
});

languageOptions.addEventListener('mouseleave', function() {
    languageMenu = false;
    setTimeout(() => {
        if (!languageMenu) {
            languageOptions.style.display = 'none';
        }
    }, 1000);
});

// languageOptions.addEventListener('click', function(e) {
//     if (e.target.tagName === 'LI') {
//         const selectedValue = e.target.getAttribute('data-value');
//         location.href = selectedValue; 
//     }
// });

// Hide menu when clicking outside of it
document.addEventListener('click', function(e) {
    const isClickInsideLanguage = worldSvgElement.contains(e.target) || customOptions.contains(e.target);
    if (!isClickInsideLanguage) {
        languageOptions.style.display = 'none';
        languageMenu = false;
    }
});




