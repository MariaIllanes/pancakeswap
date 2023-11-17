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



const selectLanguageLabel = document.getElementById('select-language-label');
const hiddenLanguageMenu = document.getElementById('hidden-language-menu');

// Toggle the visibility of the hidden menu on label click or hover
selectLanguageLabel.addEventListener('mouseenter', () => {
    hiddenLanguageMenu.style.display = 'block';
});

selectLanguageLabel.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click from propagating to the document
});

document.addEventListener('click', () => {
    hiddenLanguageMenu.style.display = 'none';
});

hiddenLanguageMenu.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click inside the menu from closing it
});










// language select piece of code
        const selectLanguageIcon = document.getElementById('icon-language', 'select-language-label');
        const selectLanguage = document.getElementById('hidden-language-menu');
        
        let isOpen = false;
        
        selectLanguageIcon.addEventListener('click', () => {
          if (isOpen) {
            selectLanguage.classList.remove('open');
          } else {
            selectLanguage.classList.add('open');
          }
          isOpen = !isOpen;
        });
        
        document.addEventListener('click', (event) => {
          if (!selectLanguage.contains(event.target) && event.target !== selectLanguageIcon) {
            selectLanguage.classList.remove('open');
            isOpen = false;
          }
        });




        // telegram select piece of code

        const selectTelegramLogo = document.getElementById('logo-telegram');
        const selectLanguageTelegram = document.getElementById('language-options-telegram');
        
        let isOpen2 = false;
        
        selectTelegramLogo.addEventListener('click', () => {
          if (isOpen2) {
            selectLanguageTelegram.classList.remove('open');
          } else {
            selectLanguageTelegram.classList.add('open');
          }
          isOpen2 = !isOpen2;
        });
        
        document.addEventListener('click', (event) => {
          if (!selectLanguageTelegram.contains(event.target) && event.target !== selectIcon) {
            selectLanguageTelegram.classList.remove('open');
            isOpen2 = false;
          }
        });






