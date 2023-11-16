const footerBannerButton = document.getElementById("button-s11");
const hiddenFooterBanner = document.querySelector("#footer-banner-hidden-section");

let footerBannerisHidden = true;

footerBannerButton.addEventListener("click", () => {
  if (footerBannerisHidden) {
    hiddenFooterBanner.style.display = "block";
  } else {
    hiddenFooterBanner.style.display = "none";
  }
  
  footerBannerisHidden = !footerBannerisHidden; 
  console.log("Show button clicked. footerBannerisHidden:", footerBannerisHidden);
});

document.addEventListener("click", (event) => {
  const isClickedOutside = !hiddenFooterBanner.contains(event.target) && event.target !== footerBannerButton;
  if (isClickedOutside && !footerBannerisHidden) {
    hiddenFooterBanner.style.display = "none";
    footerBannerisHidden = true;
    console.log("Clicked outside. footerBannerisHidden:", footerBannerisHidden);
  }
});





// carousel code
let slideIndex = 1; 
function showCard(index) {
  const slides = document.querySelectorAll('.card-slide');
  const buttons = document.querySelectorAll('.slideshow-buttons button');

  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  slides[index - 1].style.display = 'block';
  buttons[index - 1].classList.add('active');
}



function autoShow() {
    const slides = document.querySelectorAll('.card-slide');
    const buttons = document.querySelectorAll('.slideshow-buttons button');

    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    buttons[slideIndex - 1].classList.add('active');
}

showCard(1);

setInterval(autoShow, 6000);








// s11 hidden section web3 tab -------------------------------------------------------------

const seeMoreButton = document.getElementById('see-more-cards-btn');
const hiddenCardsSection = document.querySelector('.cw-more-cards');
const cwCardsContainer = document.querySelector('.cw-cards');

seeMoreButton.addEventListener('click', function() {
  seeMoreButton.style.display = 'none';
  hiddenCardsSection.classList.add('show-more');
  cwCardsContainer.classList.add('show-more');
});

function showCard(cardNumber) {
	var cardSlides = document.querySelectorAll('.card-slide');
	for (var i = 0; i < cardSlides.length; i++) {
	  cardSlides[i].style.display = 'none';
	}
  
	var selectedCard = document.querySelector('.card' + cardNumber);
	if (selectedCard) {
	  selectedCard.style.display = 'block';
	}
  }
  

