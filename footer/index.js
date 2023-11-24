import { buyCakeDocComponent } from "./buy-cake.js";
import { mainBannerDocComponent } from "./main-banner.js";
import { themeChange } from "./themchange.js";
import { mainNavDocComponent } from "./main-navbar.js";
import { ecosystemDocComponent } from "./ecosystem.js";
import { communityDocComponents } from "./community.js";
import { partnersAnimationDocComponent } from "./partners-animation.js";
import { exchange } from "./script-for-s4.js";
// import {footerBannerDocComponent} from "./footer-banner.js"
// import {footerDocComponents} from "./footer.js"



communityDocComponents();
ecosystemDocComponent();
partnersAnimationDocComponent();
mainBannerDocComponent();
themeChange();
buyCakeDocComponent();
mainNavDocComponent();
exchange();
// footerBannerDocComponent();
// footerDocComponents();



// // Función para aplicar los cambios según el tamaño de la pantalla
// function applyStyles() {
//     const screenWidth = window.innerWidth;
  
//     // Obtener NodeList de elementos que necesitas cambiar
//     const contentSubcontainerOnes = document.querySelectorAll(
//       ".content-subcontainer-one"
//     );
//     const carousels = document.querySelectorAll(".carousel");
//     const children = document.querySelectorAll(".child");
//     const marqueeContainer = document.querySelectorAll(".marquee-container");
//     const marquees = document.querySelectorAll(".marquee");
  
//     // Aplicar los cambios según el tamaño de la pantalla
//     if (screenWidth <= 968) {
//       contentSubcontainerOnes.forEach((element) => {
//         element.style.setProperty("--transform", "none");
//       });
//       carousels.forEach((element) => {
//         element.style.setProperty("--duration", "21.7425s");
//       });
//       children.forEach((element) => {
//         element.style.setProperty("--transform", "none");
//       });
//       marqueeContainer.forEach((element) => {
//         element.style.setProperty("--transform", "none");
//       });
//       marquees.forEach((element) => {
//         element.style.setProperty("--duration", "16.88s");
//       });
//     } else {
//       contentSubcontainerOnes.forEach((element) => {
//         element.style.setProperty("--transform", "rotate(-90deg)");
//       });
//       carousels.forEach((element) => {
//         element.style.setProperty("--duration", "8.32s");
//       });
//       children.forEach((element) => {
//         element.style.setProperty("--transform", "rotate(90deg)");
//       });
//       marqueeContainer.forEach((element) => {
//         element.style.setProperty("--transform", "rotate(-90deg)");
//       });
//       marquees.forEach((element) => {
//         element.style.setProperty("--duration", "5.2s");
//       });
//     }
//   }
  
//   // Aplicar los estilos al cargar la página
//   applyStyles();
  
//   // Escuchar el evento de cambio de tamaño de la ventana
//   window.addEventListener("resize", applyStyles);
  
//   const canvas = document.getElementById("miCanvas");
//   const ctx = canvas.getContext("2d");
  
//   // Crea una nueva imagen
//   const img = new Image();
  
//   // Asigna la ruta de la imagen
//   img.src = "/assets/sec7-canvas.png"; // Reemplaza esto con la ruta correcta de tu imagen
  
//   // Espera a que la imagen se cargue antes de dibujarla en el canvas
//   img.onload = function () {
//     // Dibuja la imagen en el canvas
//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//   };
  




// const ecosystemTradeContainer = document.querySelector(".trade-cards-container");
// const tradeCardData = [
//   {
//     tradeURL: "https://pancakeswap.finance/swap",
//     tradeimageSrc: "/assets/ecosystem/trade-swap-purple.png",
//     tradeHoveredImage: "assets/ecosystem/trade-swap.png",
//     tradeTitle: "Swap",
//     tradeDescription: "Trade crypto instantly across multiple chains",
//     tradeLink:"Trade Now >",
//   },

//   {
//     tradeURL: "https://pancakeswap.finance/liquidity",
//     tradeimageSrc: "/assets/ecosystem/trade-liquidity-purple.png",
//     tradeHoveredImage: "/assets/ecosystem/trade-liquidity.png",
//     tradeTitle: "Liquidity",
//     tradeDescription: "Fund liquidity pools, earn trading fees",
//     tradeLink:"Add Now >",
//     },
    
//     {
//     tradeURL: "https://bridge.pancakeswap.finance/",
//     tradeimageSrc: "/assets/ecosystem/trade-bridge-purple.png",
//     tradeHoveredImage: "/assets/ecosystem/trade-bridge.png",
//     tradeTitle: "Bridge",
//     tradeDescription: "Seamlessly transfer assets across chains",
//     tradeLink:"Bridge Now >",
//     },
    
//     {
//     tradeURL: "https://pancakeswap.finance/buy-crypto",
//     tradeimageSrc: "/assets/ecosystem/trade-perpetual-purple.png",
//     tradeHoveredImage: "/assets/ecosystem/trade-perpetual.png",
//     tradeTitle: "Perpetual",
//     tradeDescription: "Trade endlessly without expiration dates",
//     tradeLink:"Trade Now >",
//     },
    
//     {
//     tradeURL: "https://pancakeswap.finance/buy-crypto",
//     tradeimageSrc: "/assets/ecosystem/trade-buy-crypto-purple.png",
//     tradeHoveredImage: "/assets/ecosystem/trade-buy-crypto.png",
//     tradeTitle: "Buy Crypto",
//     tradeDescription: "Buy crypto with your preferred currency and payment method",
//     tradeLink:"Buy Now >",
//     },
// ];

// tradeCardData.forEach((data) => {
//   const tradeCard = document.createElement('div');
//   tradeCard.classList.add('ecosystem-trade-card');

//   tradeCard.innerHTML = `
    
//      <a href=${data.tradeURL} class="trade">
//       <div class="trade-card">
//         <div class="trade-img">
//           <img src="${data.tradeimageSrc}" data-hover-image="${data.tradeHoveredImage}">
//         </div>
//         <h4>${data.tradeTitle}</h4>
//         <p class="ecosystem-description">${data.tradeDescription}</p>
//         <p class="ecosystem-link theme-change light-theme">${data.tradeLink}</p>
//      </div>
//     </a>
//   `;

//   const cardLink = tradeCard.querySelector('.ecosystem-link')
//   const imageElement = tradeCard.querySelector('.trade-img img');
//   tradeCard.addEventListener('mouseover', function () {
//     imageElement.src = data.tradeHoveredImage;
//     cardLink.style.color = '#1fc7d4'
//   });

//   tradeCard.addEventListener('mouseout', function () {
//     imageElement.src = data.tradeimageSrc;
//     cardLink.style.color = 'initial'
//   });

//   ecosystemTradeContainer.appendChild(tradeCard);
// });


// //EARN CARDS
// const ecosystemEarnContainer = document.querySelector(".earn-cards-container");
// const earnCardData = [
// {
//   earnURL: "https://pancakeswap.finance/farms",
//   earnimageSrc: "/assets/ecosystem/earn-farm-purple.png",
//   earnHoveredImage: "assets/ecosystem/earn-farm.png",
//   earnTitle: "Farm",
//   earnDescription: "Stake LP tokens, harvest CAKE",
//   earnLink:"Stake Now >",
// },

// {
//   earnURL: "https://pancakeswap.finance/pools",
//   earnimageSrc: "/assets/ecosystem/earn-pools-purple.png",
//   earnHoveredImage: "assets/ecosystem/earn-pools.png",
//   earnTitle: "Pools",
//   earnDescription: "Stake CAKE, earn various rewards",
//   earnLink:"Stake Now >",
// },

// {
//   earnURL: "https://pancakeswap.finance/liquid-staking",
//   earnimageSrc: "/assets/ecosystem/earn-liquidity-staking-purple.png",
//   earnHoveredImage: "assets/ecosystem/earn-liquidity-staking.png",
//   earnTitle: "Liquid Staking",
//   earnDescription: "Earn rewards while retaining asset flexibility",
//   earnLink:"Stake Now >",
// },

// {
//   earnURL: "https://pancakeswap.finance/simple-staking",
//   earnimageSrc: "/assets/ecosystem/earn-fixed-staking-purple.png",
//   earnHoveredImage: "assets/ecosystem/earn-fixed-staking.png",
//   earnTitle: "Simple Staking",
//   earnDescription: "Earn rewards hassle-free with single-sided staking",
//   earnLink:"Stake Now >",
// },

// ];

// earnCardData.forEach((data) => {
// const earnCard = document.createElement('div');
// earnCard.classList.add('ecosystem-earn-card');

// earnCard.innerHTML = `
//   <a href="${data.earnURL}" class="trade">
//     <div class="earn-card" id="earn-container">
//       <div class="trade-img">
//         <img src="${data.earnimageSrc}" data-hover-image="${data.earnHoveredImage}">
//       </div>
//       <h4>${data.earnTitle}</h4>
//       <p class="ecosystem-description">${data.earnDescription}</p>
//       <p class="ecosystem-link theme-change light-theme">${data.earnLink}</p>
//     </div>
//   </a>
  
// `;

// const cardLink = earnCard.querySelector('.ecosystem-link')
// const imageElement = earnCard.querySelector('.trade-img img');
// earnCard.addEventListener('mouseover', function () {
//   imageElement.src = data.earnHoveredImage;
//   cardLink.style.color = '#1fc7d4'
// });

// earnCard.addEventListener('mouseout', function () {
//   imageElement.src = data.earnimageSrc;
//   cardLink.style.color = 'initial'
// });

// ecosystemEarnContainer.appendChild(earnCard);
// });



// //GAMES & NFT CARDS
// const ecosystemGamesNFTContainer = document.querySelector(".gamenft-cards-container");
// const gamesNFTCardData = [
// {
//   gameURL: "https://pancakeswap.finance/prediction",
//   gamesNFTimageSrc: "/assets/ecosystem/game-prediction-purple.png",
//   gamesNFTHoveredImage: "assets/ecosystem/game-prediction.png",
//   gamesNFTTitle: "Prediction",
//   gamesNFTDescription: "Forecast token prices within minutes",
//   gamesNFTLink:"Try Now >",
// },

// {
//   gameURL: "https://protectors.pancakeswap.finance/",
//   gamesNFTimageSrc: "/assets/ecosystem/game-pancake-protectors-purple.png",
//   gamesNFTHoveredImage: "assets/ecosystem/game-pancake-protectors.png",
//   gamesNFTTitle: "Pancake Protectors",
//   gamesNFTDescription: "Immersive PvP & PvE tower-defense GameFi",
//   gamesNFTLink:"Play Now >",
// },

// {
//   gameURL: "https://pancakeswap.finance/lottery",
//   gamesNFTimageSrc: "/assets/ecosystem/game-lottery-purple.png",
//   gamesNFTHoveredImage: "assets/ecosystem/game-lottery.png",
//   gamesNFTTitle: "Lottery",
//   gamesNFTDescription: "Enter for a chance to win CAKE prize pools",
//   gamesNFTLink:"Try Now >",
// },

// {
//   gameURL: "https://pancakeswap.finance/pottery",
//   gamesNFTimageSrc: "assets/ecosystem/game-pottery-purple.png",
//   gamesNFTHoveredImage: "/assets/ecosystem/game-pottery.png",
//   gamesNFTTitle: "Pottery",
//   gamesNFTDescription: "Stake CAKE, acquire pottery tickets, win prizes",
//   gamesNFTLink:"Try Now >",
// },

// {
//   gameURL: "https://pancakeswap.finance/nfts",
//   gamesNFTimageSrc: "/assets/ecosystem/nft-marketplace-purple.png",
//   gamesNFTHoveredImage: "/assets/ecosystem/nft-marketplace.png",
//   gamesNFTTitle: "NFT Marketplace",
//   gamesNFTDescription: "Trade unique NFTs on BNB Chain",
//   gamesNFTLink:"Trade Now >",
// },
// ];

// gamesNFTCardData.forEach((data) => {
// const gamesNFTCard = document.createElement('div');
// gamesNFTCard.classList.add('ecosystem-gamenft-card');

// gamesNFTCard.innerHTML = `

//   <a href="${data.gameURL}">
//     <div class="gamenft-card">
//       <div class="trade-img">
//         <img class="ecosystem-original-imgs" src="${data.gamesNFTimageSrc}" data-hover-image="${data.gamesNFTHoveredImage}">
//       </div>
//       <h4>${data.gamesNFTTitle}</h4>
//       <p class="ecosystem-description">${data.gamesNFTDescription}</p>
//       <p class="ecosystem-link theme-change light-theme">${data.gamesNFTLink}</p>
//     </div>
//   </a>
// `;

// const cardLink = gamesNFTCard.querySelector('.ecosystem-link')
// const imageElement = gamesNFTCard.querySelector('.trade-img img');
// gamesNFTCard.addEventListener('mouseover', function () {
//   imageElement.src = data.gamesNFTHoveredImage;
//   cardLink.style.color = '#1fc7d4'
// });

// gamesNFTCard.addEventListener('mouseout', function () {
//   imageElement.src = data.gamesNFTimageSrc;
//   cardLink.style.color = 'initial'
// });

// ecosystemGamesNFTContainer.appendChild(gamesNFTCard);
// });


// // footer section
// const svgElement = document.getElementById('logo-telegram');
// const customOptions = document.getElementById('telegram-language-options');
// let menuVisible = false;

// svgElement.addEventListener('mouseenter', function() {
//     customOptions.style.display = 'block';
//     menuVisible = true;
// });

// customOptions.addEventListener('mouseleave', function() {
//     menuVisible = false;
//     setTimeout(() => {
//         if (!menuVisible) {
//             customOptions.style.display = 'none';
//         }
//     }, 500);
// });

// customOptions.addEventListener('click', function(e) {
//     if (e.target.tagName === 'LI') {
//         const selectedValue = e.target.getAttribute('data-value');
//         location.href = selectedValue; 
//     }
// });

// document.addEventListener('click', function(e) {
//     const isClickInside = svgElement.contains(e.target) || customOptions.contains(e.target);
//     if (!isClickInside) {
//         customOptions.style.display = 'none';
//         menuVisible = false;
//     }
// });





// // language button
// const worldSvgElement = document.getElementById('select-language-web-label');
// const languageOptions = document.getElementById('footer-language-options');
// let languageMenu = false;

// worldSvgElement.addEventListener('mouseenter', function() {
//     languageOptions.style.display = 'block';
//     languageMenu = true;
// });

// languageOptions.addEventListener('mouseleave', function() {
//     languageMenu = false;
//     setTimeout(() => {
//         if (!languageMenu) {
//             languageOptions.style.display = 'none';
//         }
//     }, 500);
// });

// document.addEventListener('click', function(e) {
//     const isClickInsideLanguage = worldSvgElement.contains(e.target) || customOptions.contains(e.target);
//     if (!isClickInsideLanguage) {
//         languageOptions.style.display = 'none';
//         languageMenu = false;
//     }
// });
// // community 
// let slideCommunityIndex = 1; 

// function showCommunityCard(index) {
//     const communitySlides = document.querySelectorAll('.community-card-slide');
//     const communityButtons = document.querySelectorAll('.community-slideshow-buttons button');

//     communitySlides.forEach(slide => {
//         slide.style.display = 'none';
//     });
//     communityButtons.forEach(button => {
//         button.classList.remove('active');
//     });

//     communitySlides[index - 1].style.display = 'block';
//     communityButtons[index - 1].classList.add('active');
//     slideCommunityIndex = index;
// }

// function communityAutoShow() {
//     const communitySlides = document.querySelectorAll('.community-card-slide');
//     const communityButtons = document.querySelectorAll('.community-slideshow-buttons button');

//     communitySlides.forEach(slide => {
//         slide.style.display = 'none';
//     });
//     communityButtons.forEach(button => {
//         button.classList.remove('active');
//     });

//     slideCommunityIndex++;
//     if (slideCommunityIndex > communitySlides.length) {
//         slideCommunityIndex = 1;
//     }

//     communitySlides[slideCommunityIndex - 1].style.display = 'block';
//     communityButtons[slideCommunityIndex - 1].classList.add('active');
// }

// showCommunityCard(1);

// setInterval(communityAutoShow, 6000);



// //modal

// function selectTransactionSpeed(speedNumber) {
//   document.querySelectorAll('.transaction-speed-btn').forEach(button => {
//     button.classList.remove('selected');
// });

//   document.getElementById('speedBtn' + speedNumber).classList.add('selected');
// };

// document.addEventListener('DOMContentLoaded', function () {
//   selectTransactionSpeed(1);
// });

// // partners
