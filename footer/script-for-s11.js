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








let footerBannerIndex = 1; 

function showFooterBannerCard(index) {
    const footerBannerSlides = document.querySelectorAll('.footer-card-slide');
    const footerBannerButtons = document.querySelectorAll('.footer-slideshow-buttons button');

    footerBannerSlides.forEach(slide => {
        slide.style.display = 'none';
    });
    footerBannerSlides.forEach(button => {
        button.classList.remove('active');
    });

    footerBannerSlides[index - 1].style.display = 'block';
    footerBannerButtons[index - 1].classList.add('active');
    footerBannerIndex = index;
}

function footerBannerAutoShow() {
    const footerBannerSlides = document.querySelectorAll('.footer-card-slide');
    const footerBannerButtons = document.querySelectorAll('.footer-slideshow-buttons button');

    footerBannerSlides.forEach(slide => {
        slide.style.display = 'none';
    });
    footerBannerButtons.forEach(button => {
        button.classList.remove('active');
    });

    footerBannerIndex++;
    if (footerBannerIndex > footerBannerSlides.length) {
      footerBannerIndex = 1;
    }

    footerBannerSlides[footerBannerIndex - 1].style.display = 'block';
    footerBannerButtons[footerBannerIndex - 1].classList.add('active');
}

showFooterBannerCard(1);

setInterval(footerBannerAutoShow, 6000);







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
  

