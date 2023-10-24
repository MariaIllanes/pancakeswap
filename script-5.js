// script.js
const images = document.querySelectorAll('.hover-image');

images.forEach((image, index) => {
  const originalSrc = image.src;
  const newSrc = `image${index + 1}-hover.jpg`; // Specify the path to the hover image

  image.addEventListener('mouseover', () => {
    // Change the image source on hover
    image.src = newSrc;
  });

  image.addEventListener('mouseout', () => {
    // Restore the original image source on mouseout
    image.src = originalSrc;
  });
});




// Trade 1st card
const tradeImgOne = document.getElementById('nohover-img-trade1');
const originalSrcTradeOne = tradeImgOne.src;

tradeImgOne.addEventListener('mouseover', () => {
    tradeImgOne.src = '/assets/trade-swap-2.png';
});

tradeImgOne.addEventListener('mouseout', () => {
    tradeImgOne.src = originalSrcTradeOne;
});


// Trade 2nd card
const tradeImgTwo = document.getElementById('nohover-img-trade1');
const originalSrcTradeTwo = tradeImgTwo.src;

tradeImgTwo.addEventListener('mouseover', () => {
    tradeImgTwo.src = '/assets/trade-liquidity-2.png';
});

tradeImgTwo.addEventListener('mouseout', () => {
    tradeImgTwo.src = originalSrcTradeTwo;
});


// Trade 3rd card
const tradeImgThree = document.getElementById('nohover-img-trade1');
const originalSrcTradeThree = tradeImgThree.src;

tradeImgThree.addEventListener('mouseover', () => {
    tradeImgThree.src = '/assets/trade-bridge-2.png';
});

tradeImgThree.addEventListener('mouseout', () => {
    tradeImgThree.src = originalSrcTradeThree;
});


// Trade 4th card
const tradeImgFour = document.getElementById('nohover-img-trade1');
const originalSrcTradeFour = tradeImgFour.src;

tradeImgFour.addEventListener('mouseover', () => {
    tradeImgFour.src = '/assets/trade-perpetual-2.png';
});

tradeImgFour.addEventListener('mouseout', () => {
    tradeImgFour.src = originalSrcTradeFour;
});


// Trade 5th card
const tradeImgFive = document.getElementById('nohover-img-trade1');
const originalSrcTradeFive = tradeImgFive.src;

tradeImgFive.addEventListener('mouseover', () => {
    tradeImgFive.src = '/assets/trade-buycrypto-2.png';
});

tradeImgFive.addEventListener('mouseout', () => {
    tradeImgFive.src = originalSrcTradeFour;
});