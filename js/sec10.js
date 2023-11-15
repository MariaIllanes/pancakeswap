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
