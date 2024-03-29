import { mainNavDocComponent } from "./main-navbar.js";
import { ecosystemDocComponent } from "./ecosystem.js";
import { communityDocComponents } from "./community.js";
import { partnersAnimationDocComponent } from "./partners-animation.js";
import { exchange } from "./script-for-s4.js";
import { adCarousselDocComponent } from "./ad-caroussel.js";
import { exchangeStatsDocComponents } from "./exchange-stats2.js";
import { buyCakeDocComponent } from "./buy-cake.js";
import { mainBannerDocComponent } from "./main-banner.js";
import { themeChange } from "./themchange.js";
import { arrowButton2 } from "./arrow-button.js";
import { newsDocComponents } from "./news.js";
import { footerBannerDocComponent } from "./footer-banner.js";
import { footerDocComponents } from "./footer.js";
import { themeChangeFooter } from "./themchange.js";
import { bottomNav } from "./sec14-bottom-nav.js";

exchangeStatsDocComponents();
themeChangeFooter();
newsDocComponents();
adCarousselDocComponent();
communityDocComponents();
ecosystemDocComponent();
partnersAnimationDocComponent();
mainBannerDocComponent();
themeChange();
buyCakeDocComponent();
mainNavDocComponent();
exchange();
arrowButton2();
footerBannerDocComponent();
footerDocComponents();

bottomNav();

// ---------------- SEC14-REAC-NAV-BOTTOM -------------------//

// Para que salga el menú del segundo icono

var optionTwo = document.querySelector(".option-two");
var menuTwo = document.querySelector(".menu-two");

var timeoutId;

optionTwo.addEventListener("mouseover", function () {
  clearTimeout(timeoutId); // Limpiar cualquier tiempo de espera pendiente
  showMenu();
});

optionTwo.addEventListener("mouseout", function () {
  timeoutId = setTimeout(hideMenu, 300); // Establecer un tiempo de espera antes de ocultar el menú
});

menuTwo.addEventListener("mouseover", keepMenuVisible);

menuTwo.addEventListener("mouseout", function () {
  timeoutId = setTimeout(hideMenu, 300); // Establecer un tiempo de espera antes de ocultar el menú
});

function showMenu() {
  menuTwo.style.visibility = "visible";
  menuTwo.style.pointerEvents = "auto";
}

function keepMenuVisible() {
  clearTimeout(timeoutId); // Limpiar cualquier tiempo de espera pendiente
  menuTwo.style.visibility = "visible";
  menuTwo.style.pointerEvents = "auto";
}

function hideMenu() {
  menuTwo.style.visibility = "hidden";
  menuTwo.style.pointerEvents = "none";
}

// Para que salga el menú del tercer icono

var optionThree = document.querySelector(".option-three");
var menuThree = document.querySelector(".menu-three");

var timeoutIdThree;

optionThree.addEventListener("mouseover", function () {
  clearTimeout(timeoutIdThree); // Limpiar cualquier tiempo de espera pendiente
  showMenuThree();
});

optionThree.addEventListener("mouseout", function () {
  timeoutIdThree = setTimeout(hideMenuThree, 300); // Establecer un tiempo de espera antes de ocultar el menú
});

menuThree.addEventListener("mouseover", keepMenuVisibleThree);

menuThree.addEventListener("mouseout", function () {
  timeoutIdThree = setTimeout(hideMenuThree, 300); // Establecer un tiempo de espera antes de ocultar el menú
});

function showMenuThree() {
  menuThree.style.visibility = "visible";
  menuThree.style.pointerEvents = "auto";
}

function keepMenuVisibleThree() {
  clearTimeout(timeoutIdThree); // Limpiar cualquier tiempo de espera pendiente
  menuThree.style.visibility = "visible";
  menuThree.style.pointerEvents = "auto";
}

function hideMenuThree() {
  menuThree.style.visibility = "hidden";
  menuThree.style.pointerEvents = "none";
}

// Para que salga el menú del cuarto icono

var optionFour = document.querySelector(".option-four");
var menuFour = document.querySelector(".menu-four");

var timeoutIdFour;

optionFour.addEventListener("mouseover", function () {
  clearTimeout(timeoutIdFour); // Limpiar cualquier tiempo de espera pendiente
  showMenuFour();
});

optionFour.addEventListener("mouseout", function () {
  timeoutIdFour = setTimeout(hideMenuFour, 300); // Establecer un tiempo de espera antes de ocultar el menú
});

menuFour.addEventListener("mouseover", keepMenuVisibleFour);

menuFour.addEventListener("mouseout", function () {
  timeoutIdFour = setTimeout(hideMenuFour, 300); // Establecer un tiempo de espera antes de ocultar el menú
});

function showMenuFour() {
  menuFour.style.visibility = "visible";
  menuFour.style.pointerEvents = "auto";
}

function keepMenuVisibleFour() {
  clearTimeout(timeoutIdFour); // Limpiar cualquier tiempo de espera pendiente
  menuFour.style.visibility = "visible";
  menuFour.style.pointerEvents = "auto";
}

function hideMenuFour() {
  menuFour.style.visibility = "hidden";
  menuFour.style.pointerEvents = "none";
}

// Para que salga el menú del quinto icono

var optionFive = document.querySelector(".option-five");
var menuFive = document.querySelector(".menu-five");

var timeoutIdFive;

optionFive.addEventListener("mouseover", function () {
  clearTimeout(timeoutIdFive); // Limpiar cualquier tiempo de espera pendiente
  showMenuFive();
});

optionFive.addEventListener("mouseout", function () {
  timeoutIdFive = setTimeout(hideMenuFive, 300); // Establecer un tiempo de espera antes de ocultar el menú
});

menuFive.addEventListener("mouseover", keepMenuVisibleFive);

menuFive.addEventListener("mouseout", function () {
  timeoutIdFive = setTimeout(hideMenuFive, 300); // Establecer un tiempo de espera antes de ocultar el menú
});

function showMenuFive() {
  menuFive.style.visibility = "visible";
  menuFive.style.pointerEvents = "auto";
}

function keepMenuVisibleFive() {
  clearTimeout(timeoutIdFive); // Limpiar cualquier tiempo de espera pendiente
  menuFive.style.visibility = "visible";
  menuFive.style.pointerEvents = "auto";
}

function hideMenuFive() {
  menuFive.style.visibility = "hidden";
  menuFive.style.pointerEvents = "none";
}

// ------- FIN DE SEC14-REAC-NAV-BOTTOM -------

const arrowButton = document.querySelector(".other-element-button");
const buttonContainer = document.querySelector(".other-element-container");
const scrollThreshold = 0.25;

arrowButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  arrowButton.style.transform = "scale(0.95)";

  setTimeout(function () {
    arrowButton.style.transform = "scale(1)";
  }, 200);
});

function toggleSectionVisibility() {
  const scrollPosition = window.scrollY;
  const pageHeight = document.body.clientHeight;
  if (scrollPosition >= pageHeight * scrollThreshold) {
    buttonContainer.style.display = "block";
  } else {
    buttonContainer.style.display = "none";
  }
}

window.addEventListener("scroll", toggleSectionVisibility);
toggleSectionVisibility();

// Función para aplicar los cambios según el tamaño de la pantalla
function applyStyles() {
  const screenWidth = window.innerWidth;

  // Obtener NodeList de elementos que necesitas cambiar
  const contentSubcontainerOnes = document.querySelectorAll(
    ".content-subcontainer-one"
  );
  const carousels = document.querySelectorAll(".carousel");
  const children = document.querySelectorAll(".child");
  const marqueeContainer = document.querySelectorAll(".marquee-container");
  const marquees = document.querySelectorAll(".marquee");

  // Aplicar los cambios según el tamaño de la pantalla
  if (screenWidth <= 968) {
    contentSubcontainerOnes.forEach((element) => {
      element.style.setProperty("--transform", "none");
    });
    carousels.forEach((element) => {
      element.style.setProperty("--duration", "21.7425s");
    });
    children.forEach((element) => {
      element.style.setProperty("--transform", "none");
    });
    marqueeContainer.forEach((element) => {
      element.style.setProperty("--transform", "none");
    });
    marquees.forEach((element) => {
      element.style.setProperty("--duration", "16.88s");
    });
  } else {
    contentSubcontainerOnes.forEach((element) => {
      element.style.setProperty("--transform", "rotate(-90deg)");
    });
    carousels.forEach((element) => {
      element.style.setProperty("--duration", "8.32s");
    });
    children.forEach((element) => {
      element.style.setProperty("--transform", "rotate(90deg)");
    });
    marqueeContainer.forEach((element) => {
      element.style.setProperty("--transform", "rotate(-90deg)");
    });
    marquees.forEach((element) => {
      element.style.setProperty("--duration", "5.2s");
    });
  }
}

// Aplicar los estilos al cargar la página
applyStyles();

// Escuchar el evento de cambio de tamaño de la ventana
window.addEventListener("resize", applyStyles);

const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

// Crea una nueva imagen
const img = new Image();

// Asigna la ruta de la imagen
img.src = "/assets/sec7-canvas.png"; // Reemplaza esto con la ruta correcta de tu imagen

// Espera a que la imagen se cargue antes de dibujarla en el canvas
img.onload = function () {
  // Dibuja la imagen en el canvas
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

const ecosystemTradeContainer = document.querySelector(
  ".trade-cards-container"
);
const tradeCardData = [
  {
    tradeURL: "https://pancakeswap.finance/swap",
    tradeimageSrc: "/assets/ecosystem/trade-swap-purple.png",
    tradeHoveredImage: "assets/ecosystem/trade-swap.png",
    tradeTitle: "Swap",
    tradeDescription: "Trade crypto instantly across multiple chains",
    tradeLink: "Trade Now >",
  },

  {
    tradeURL: "https://pancakeswap.finance/liquidity",
    tradeimageSrc: "/assets/ecosystem/trade-liquidity-purple.png",
    tradeHoveredImage: "/assets/ecosystem/trade-liquidity.png",
    tradeTitle: "Liquidity",
    tradeDescription: "Fund liquidity pools, earn trading fees",
    tradeLink: "Add Now >",
  },

  {
    tradeURL: "https://bridge.pancakeswap.finance/",
    tradeimageSrc: "/assets/ecosystem/trade-bridge-purple.png",
    tradeHoveredImage: "/assets/ecosystem/trade-bridge.png",
    tradeTitle: "Bridge",
    tradeDescription: "Seamlessly transfer assets across chains",
    tradeLink: "Bridge Now >",
  },

  {
    tradeURL: "https://pancakeswap.finance/buy-crypto",
    tradeimageSrc: "/assets/ecosystem/trade-perpetual-purple.png",
    tradeHoveredImage: "/assets/ecosystem/trade-perpetual.png",
    tradeTitle: "Perpetual",
    tradeDescription: "Trade endlessly without expiration dates",
    tradeLink: "Trade Now >",
  },

  {
    tradeURL: "https://pancakeswap.finance/buy-crypto",
    tradeimageSrc: "/assets/ecosystem/trade-buy-crypto-purple.png",
    tradeHoveredImage: "/assets/ecosystem/trade-buy-crypto.png",
    tradeTitle: "Buy Crypto",
    tradeDescription:
      "Buy crypto with your preferred currency and payment method",
    tradeLink: "Buy Now >",
  },
];

tradeCardData.forEach((data) => {
  const tradeCard = document.createElement("div");
  tradeCard.classList.add("ecosystem-trade-card");

  tradeCard.innerHTML = `
    
     <a href=${data.tradeURL} class="trade">
      <div class="trade-card">
        <div class="trade-img">
          <img src="${data.tradeimageSrc}" data-hover-image="${data.tradeHoveredImage}">
        </div>
        <h4>${data.tradeTitle}</h4>
        <p class="ecosystem-description">${data.tradeDescription}</p>
        <p class="ecosystem-link theme-change light-theme">${data.tradeLink}</p>
     </div>
    </a>
  `;

  const cardLink = tradeCard.querySelector(".ecosystem-link");
  const imageElement = tradeCard.querySelector(".trade-img img");
  tradeCard.addEventListener("mouseover", function () {
    imageElement.src = data.tradeHoveredImage;
    cardLink.style.color = "#1fc7d4";
  });

  tradeCard.addEventListener("mouseout", function () {
    imageElement.src = data.tradeimageSrc;
    cardLink.style.color = "initial";
  });

  ecosystemTradeContainer.appendChild(tradeCard);
});

//EARN CARDS
const ecosystemEarnContainer = document.querySelector(".earn-cards-container");
const earnCardData = [
  {
    earnURL: "https://pancakeswap.finance/farms",
    earnimageSrc: "/assets/ecosystem/earn-farm-purple.png",
    earnHoveredImage: "assets/ecosystem/earn-farm.png",
    earnTitle: "Farm",
    earnDescription: "Stake LP tokens, harvest CAKE",
    earnLink: "Stake Now >",
  },

  {
    earnURL: "https://pancakeswap.finance/pools",
    earnimageSrc: "/assets/ecosystem/earn-pools-purple.png",
    earnHoveredImage: "assets/ecosystem/earn-pools.png",
    earnTitle: "Pools",
    earnDescription: "Stake CAKE, earn various rewards",
    earnLink: "Stake Now >",
  },

  {
    earnURL: "https://pancakeswap.finance/liquid-staking",
    earnimageSrc: "/assets/ecosystem/earn-liquidity-staking-purple.png",
    earnHoveredImage: "assets/ecosystem/earn-liquidity-staking.png",
    earnTitle: "Liquid Staking",
    earnDescription: "Earn rewards while retaining asset flexibility",
    earnLink: "Stake Now >",
  },

  {
    earnURL: "https://pancakeswap.finance/simple-staking",
    earnimageSrc: "/assets/ecosystem/earn-fixed-staking-purple.png",
    earnHoveredImage: "assets/ecosystem/earn-fixed-staking.png",
    earnTitle: "Simple Staking",
    earnDescription: "Earn rewards hassle-free with single-sided staking",
    earnLink: "Stake Now >",
  },
];

earnCardData.forEach((data) => {
  const earnCard = document.createElement("div");
  earnCard.classList.add("ecosystem-earn-card");

  earnCard.innerHTML = `
  <a href="${data.earnURL}" class="trade">
    <div class="earn-card" id="earn-container">
      <div class="trade-img">
        <img src="${data.earnimageSrc}" data-hover-image="${data.earnHoveredImage}">
      </div>
      <h4>${data.earnTitle}</h4>
      <p class="ecosystem-description">${data.earnDescription}</p>
      <p class="ecosystem-link theme-change light-theme">${data.earnLink}</p>
    </div>
  </a>
  
`;

  const cardLink = earnCard.querySelector(".ecosystem-link");
  const imageElement = earnCard.querySelector(".trade-img img");
  earnCard.addEventListener("mouseover", function () {
    imageElement.src = data.earnHoveredImage;
    cardLink.style.color = "#1fc7d4";
  });

  earnCard.addEventListener("mouseout", function () {
    imageElement.src = data.earnimageSrc;
    cardLink.style.color = "initial";
  });

  ecosystemEarnContainer.appendChild(earnCard);
});

//GAMES & NFT CARDS
const ecosystemGamesNFTContainer = document.querySelector(
  ".gamenft-cards-container"
);
const gamesNFTCardData = [
  {
    gameURL: "https://pancakeswap.finance/prediction",
    gamesNFTimageSrc: "/assets/ecosystem/game-prediction-purple.png",
    gamesNFTHoveredImage: "assets/ecosystem/game-prediction.png",
    gamesNFTTitle: "Prediction",
    gamesNFTDescription: "Forecast token prices within minutes",
    gamesNFTLink: "Try Now >",
  },

  {
    gameURL: "https://protectors.pancakeswap.finance/",
    gamesNFTimageSrc: "/assets/ecosystem/game-pancake-protectors-purple.png",
    gamesNFTHoveredImage: "assets/ecosystem/game-pancake-protectors.png",
    gamesNFTTitle: "Pancake Protectors",
    gamesNFTDescription: "Immersive PvP & PvE tower-defense GameFi",
    gamesNFTLink: "Play Now >",
  },

  {
    gameURL: "https://pancakeswap.finance/lottery",
    gamesNFTimageSrc: "/assets/ecosystem/game-lottery-purple.png",
    gamesNFTHoveredImage: "assets/ecosystem/game-lottery.png",
    gamesNFTTitle: "Lottery",
    gamesNFTDescription: "Enter for a chance to win CAKE prize pools",
    gamesNFTLink: "Try Now >",
  },

  {
    gameURL: "https://pancakeswap.finance/pottery",
    gamesNFTimageSrc: "assets/ecosystem/game-pottery-purple.png",
    gamesNFTHoveredImage: "/assets/ecosystem/game-pottery.png",
    gamesNFTTitle: "Pottery",
    gamesNFTDescription: "Stake CAKE, acquire pottery tickets, win prizes",
    gamesNFTLink: "Try Now >",
  },

  {
    gameURL: "https://pancakeswap.finance/nfts",
    gamesNFTimageSrc: "/assets/ecosystem/nft-marketplace-purple.png",
    gamesNFTHoveredImage: "/assets/ecosystem/nft-marketplace.png",
    gamesNFTTitle: "NFT Marketplace",
    gamesNFTDescription: "Trade unique NFTs on BNB Chain",
    gamesNFTLink: "Trade Now >",
  },
];

function gamesNFTSmallScreen() {
  return window.innerWidth < 900;
}

gamesNFTCardData.forEach((data) => {
  const gamesNFTCard = document.createElement("div");
  gamesNFTCard.classList.add("ecosystem-gamenft-card");

  gamesNFTCard.innerHTML = `

  <a href="${data.gameURL}">
    <div class="gamenft-card">
      <div class="trade-img">
        <img class="ecosystem-original-imgs" src="${data.gamesNFTimageSrc}" data-hover-image="${data.gamesNFTHoveredImage}">
      </div>
      <h4>${data.gamesNFTTitle}</h4>
      <p class="ecosystem-description">${data.gamesNFTDescription}</p>
      <p class="ecosystem-link theme-change light-theme">${data.gamesNFTLink}</p>
    </div>
  </a>
`;

  const cardLink = gamesNFTCard.querySelector(".ecosystem-link");
  const imageElement = gamesNFTCard.querySelector(".trade-img img");
  gamesNFTCard.addEventListener("mouseover", function () {
    imageElement.src = data.gamesNFTHoveredImage;
    cardLink.style.color = "#1fc7d4";
  });

  gamesNFTCard.addEventListener("mouseout", function () {
    imageElement.src = data.gamesNFTimageSrc;
    cardLink.style.color = "initial";
  });

  ecosystemGamesNFTContainer.appendChild(gamesNFTCard);
});

// news

const cardsContainer = document.querySelector(".news-cards-container");
const cardData = [
  {
    imageSrc: "./assets/sec10-news-img-1.jpg",
    title: "From [Cointelegraph]",
    date: "Oct 30, 2023",
    description:
      "PancakeSwap adds portfolio manager function in partnership with Bril",
    content:
      "Decentralized crypto exchange PancakeSwap now has portfolio manager functionality, according to an Oct. 30 announcement. The feature has been added in partnership with decentralized finance (DeFi) protocol Bril Finance.",
  },
  {
    imageSrc: "./assets/sec10-news-img-2.jpg",
    title: "From [Decrypt]",
    date: "Aug 31, 2023",
    description: "PancakeSwap Expands to Coinbase-Incubated Base Network",
    content:
      "PancakeSwap joins DeFi heavyweights like Uniswap, SushiSwap, and 1inch launching on the buzzy layer-2 network Base.",
  },
  {
    imageSrc: "./assets/sec10-news-img-3.jpg",
    title: "From [CoinDesk]",
    date: "Aug 10, 2023",
    description:
      "PancakeSwap Deploys on Ethereum Scaling Network Arbitrum in Expansion Drive",
    content:
      "The decentralized exchange has joined several networks this year in the search for new users and revenue streams.",
  },
  {
    imageSrc: "./assets/sec10-news-img-4.jpg",
    title: "From [Blockwords]",
    date: "Jul 28, 2023",
    description: "zkSync Era welcomes PancakeSwap to the ecosystem",
    content:
      "ZkSync Era will be the third zero-knowledge platform on which PancakeSwap will launch.",
  },
  {
    imageSrc: "./assets/sec10-news-img-5.png",
    title: "From [Google Cloud]",
    date: "Jul 11, 2023",
    description:
      "PancakeSwap: Supporting the DeFi ecosystem with an always-available infrastructure",
    content:
      "PancakeSwap implements Google Cloud to maintain platform availability at all times so that users can trade seamlessly around the clock.",
  },
  {
    imageSrc: "./assets/sec10-news-img-6.jpg",
    title: "From [CoinTelegraph]",
    date: "May 30, 2023",
    description: "Decentralized exchange PancakeSwap moves into GameFi",
    content:
      "The DEX has partnered with BNB GameFi protocol Mobox to create a blockchain tower defense game.",
  },
];

cardData.forEach((data) => {
  const cardHTML = `
    <div class="card theme-change light-theme">
      <div class="card-img-container">
        <img src="${data.imageSrc}" alt="Image">
      </div>
      <div class="card-text-container theme-change light-theme">
        <div class="text-title-date theme-change light-theme">
          <div class="text-title theme-change light-theme">${data.title}</div>
          <div class="text-date theme-change light-theme">${data.date}</div>
        </div>
        <div class="text-description theme-change light-theme">${data.description}</div>
        <div class="text-content theme-change light-theme">${data.content}</div>
      </div>
    </div>
  `;

  cardsContainer.innerHTML += cardHTML;
});

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

// Función para desplazarse a la izquierda
arrowLeft.addEventListener("click", () => {
  // Obtén el valor actual de desplazamiento
  const currentScrollPosition = cardsContainer.scrollLeft;
  // Establece el valor de desplazamiento deseado restando un cierto valor (300 en este caso)
  let desiredScrollPosition = currentScrollPosition - 300; // Puedes ajustar este valor según tus necesidades

  // Asegúrate de que no sea un valor negativo
  desiredScrollPosition = Math.max(0, desiredScrollPosition);

  // Hacer scroll solo si no hemos llegado al límite izquierdo
  if (currentScrollPosition !== desiredScrollPosition) {
    cardsContainer.scrollTo({
      left: desiredScrollPosition,
      behavior: "smooth",
    });
  }
});

// SEC 8 Exchange stats
// Función para desplazarse a la derecha
arrowRight.addEventListener("click", () => {
  // Obtén el valor actual de desplazamiento
  const currentScrollPosition = cardsContainer.scrollLeft;
  // Establece el valor de desplazamiento deseado sumando un cierto valor (300 en este caso)
  let desiredScrollPosition = currentScrollPosition + 300; // Puedes ajustar este valor según tus necesidades

  // Asegúrate de que no sea mayor que el ancho total del contenido
  desiredScrollPosition = Math.min(
    cardsContainer.scrollWidth - cardsContainer.offsetWidth,
    desiredScrollPosition
  );

  // Hacer scroll solo si no hemos llegado al límite derecho
  if (currentScrollPosition !== desiredScrollPosition) {
    cardsContainer.scrollTo({
      left: desiredScrollPosition,
      behavior: "smooth",
    });
  }
});

// community

let slideCommunityIndex = 1;

function showCommunityCard(index) {
  const communitySlides = document.querySelectorAll(".community-card-slide");
  const communityButtons = document.querySelectorAll(
    ".community-slideshow-buttons button"
  );

  communitySlides.forEach((slide) => {
    slide.style.display = "none";
  });
  communityButtons.forEach((button) => {
    button.classList.remove("active");
  });

  communitySlides[index - 1].style.display = "block";
  communityButtons[index - 1].classList.add("active");
  slideCommunityIndex = index;
}

function communityAutoShow() {
  const communitySlides = document.querySelectorAll(".community-card-slide");
  const communityButtons = document.querySelectorAll(
    ".community-slideshow-buttons button"
  );

  communitySlides.forEach((slide) => {
    slide.style.display = "none";
  });
  communityButtons.forEach((button) => {
    button.classList.remove("active");
  });

  slideCommunityIndex++;
  if (slideCommunityIndex > communitySlides.length) {
    slideCommunityIndex = 1;
  }

  communitySlides[slideCommunityIndex - 1].style.display = "block";
  communityButtons[slideCommunityIndex - 1].classList.add("active");
}

showCommunityCard(1);

setInterval(communityAutoShow, 6000);

// footer banner

const footerBannerButton = document.getElementById("button-s11");
const hiddenFooterBanner = document.querySelector(
  "#footer-banner-hidden-section"
);

let footerBannerisHidden = true;

footerBannerButton.addEventListener("click", () => {
  if (footerBannerisHidden) {
    hiddenFooterBanner.style.display = "block";
  } else {
    hiddenFooterBanner.style.display = "none";
  }

  footerBannerisHidden = !footerBannerisHidden;
  console.log(
    "Show button clicked. footerBannerisHidden:",
    footerBannerisHidden
  );
});

document.addEventListener("click", (event) => {
  const isClickedOutside =
    !hiddenFooterBanner.contains(event.target) &&
    event.target !== footerBannerButton;
  if (isClickedOutside && !footerBannerisHidden) {
    hiddenFooterBanner.style.display = "none";
    footerBannerisHidden = true;
    console.log("Clicked outside. footerBannerisHidden:", footerBannerisHidden);
  }
});

let footerBannerIndex = 1;

function showFooterBannerCard(index) {
  const footerBannerSlides = document.querySelectorAll(".footer-card-slide");
  const footerBannerButtons = document.querySelectorAll(
    ".footer-slideshow-buttons button"
  );

  footerBannerSlides.forEach((slide) => {
    slide.style.display = "none";
  });
  footerBannerSlides.forEach((button) => {
    button.classList.remove("active");
  });

  footerBannerSlides[index - 1].style.display = "block";
  footerBannerButtons[index - 1].classList.add("active");
  footerBannerIndex = index;
}

function footerBannerAutoShow() {
  const footerBannerSlides = document.querySelectorAll(".footer-card-slide");
  const footerBannerButtons = document.querySelectorAll(
    ".footer-slideshow-buttons button"
  );

  footerBannerSlides.forEach((slide) => {
    slide.style.display = "none";
  });
  footerBannerButtons.forEach((button) => {
    button.classList.remove("active");
  });

  footerBannerIndex++;
  if (footerBannerIndex > footerBannerSlides.length) {
    footerBannerIndex = 1;
  }

  footerBannerSlides[footerBannerIndex - 1].style.display = "block";
  footerBannerButtons[footerBannerIndex - 1].classList.add("active");
}

showFooterBannerCard(1);

setInterval(footerBannerAutoShow, 6000);

// s11 hidden section web3 tab -------------------------------------------------------------

const seeMoreButton = document.getElementById("see-more-cards-btn");
const hiddenCardsSection = document.querySelector(".cw-more-cards");
const cwCardsContainer = document.querySelector(".cw-cards");

seeMoreButton.addEventListener("click", function () {
  seeMoreButton.style.display = "none";
  hiddenCardsSection.classList.add("show-more");
  cwCardsContainer.classList.add("show-more");
});

function showCard(cardNumber) {
  var cardSlides = document.querySelectorAll(".card-slide");
  for (var i = 0; i < cardSlides.length; i++) {
    cardSlides[i].style.display = "none";
  }

  var selectedCard = document.querySelector(".card" + cardNumber);
  if (selectedCard) {
    selectedCard.style.display = "block";
  }
}

// footer
const svgElement = document.getElementById("logo-telegram");
const customOptions = document.getElementById("telegram-language-options");
let menuVisible = false;

svgElement.addEventListener("mouseenter", function () {
  customOptions.style.display = "block";
  menuVisible = true;
});

customOptions.addEventListener("mouseleave", function () {
  menuVisible = false;
  setTimeout(() => {
    if (!menuVisible) {
      customOptions.style.display = "none";
    }
  }, 1000);
});

customOptions.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    const selectedValue = e.target.getAttribute("data-value");
    location.href = selectedValue;
  }
});

// Hide menu when clicking outside of it
document.addEventListener("click", function (e) {
  const isClickInside =
    svgElement.contains(e.target) || customOptions.contains(e.target);
  if (!isClickInside) {
    customOptions.style.display = "none";
    menuVisible = false;
  }
});

// language button

const worldSvgElement = document.getElementById("select-language-web-label");
const languageOptions = document.getElementById("footer-language-options");
let languageMenu = false;

worldSvgElement.addEventListener("mouseenter", function () {
  languageOptions.style.display = "block";
  languageMenu = true;
});

languageOptions.addEventListener("mouseleave", function () {
  languageMenu = false;
  setTimeout(() => {
    if (!languageMenu) {
      languageOptions.style.display = "none";
    }
  }, 1000);
});

document.addEventListener("click", function (e) {
  const isClickInsideLanguage =
    worldSvgElement.contains(e.target) || customOptions.contains(e.target);
  if (!isClickInsideLanguage) {
    languageOptions.style.display = "none";
    languageMenu = false;
  }
});
