export const buyCakeDocComponent = () => {
    const newElement = document.createElement('section');

    newElement.className = "buy-cake theme-change light-theme";
    newElement.innerHTML = `
    <div class="buy-title"><h1>Unlock the Full Potential of DeFi with <span class="color-change">CAKE</span></h1></div>
    <div class="buy-subtitle"><h2>Experience the power of community ownership, global governance, and explore infinite use cases within the PancakeSwap ecosystem</h2></div>
    <div class="btn-container">
        <button class="btn-main-blue btn-expanded btn theme-change light-theme" id="btn-buy"><a href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56">Buy cake</a></button>
        <button class="btn-sec theme-change light-theme"><a href="https://docs.pancakeswap.finance/governance-and-tokenomics/cake-tokenomics">Learn <i class="fa-solid fa-share-from-square"></a></i></button>
    </div>`


    document.getElementById('buy-cake').appendChild(newElement)
}