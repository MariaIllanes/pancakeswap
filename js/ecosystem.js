export const ecosystemDocComponent = () => {
    const newElement = document.createElement('section');

    newElement.className = "ecosystem theme-change light-theme";
    newElement.innerHTML = `
    <div class="theme-change dark-theme" id="isDark"></div>
        <div class="theme-change light-theme" id="ecosystem-triangle"></div>


        <img src="/assets/ecosystem/ecosystem-logo.png" alt="Ecosystem's logo" width="90" height="90" id="ecosystem-section-logo">
        <h2 class="ecosystem-title theme-change light-theme">Discover the <span>Ecosystem</span></h2>
        </div>

        
        <div class="ecosystem-container">
            <div class="ecosystem-card-container theme-change light-theme">
                <img src="/assets/ecosystem/trade-big-img.png" alt="" class="ecosystem-big-img" id="trade-img">
                <div class="trade-card-container-all theme-change light-theme">
                    <h3 >Trade</h3>
                    <div class="trade-cards-container theme-change light-theme"></div>
                </div>
            </div>

            <div class="ecosystem-card-container theme-change light-theme">
                <img src="/assets/ecosystem/earn-big-img.png" alt="" class="ecosystem-big-img" id="earn-img">
                <div class="trade-card-container-all">
                    <h3>Earn</h3>
                    <div class="earn-cards-container theme-change light-theme"></div>
                </div>   
            </div>

            <div class="ecosystem-card-container theme-change light-theme">
                <img src="/assets/ecosystem/game-nft-big-img.png" alt="" class="ecosystem-big-img" id="gamesnft-img">
                <div class="trade-card-container-all">
                    <h3>Game & NFT</h3>
                    <div class="gamenft-cards-container theme-change light-theme"></div>
                </div>            
            </div>
        </div>


    
    `


    document.getElementById('ecosystem').appendChild(newElement)
}
