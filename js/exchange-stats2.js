export const exchangeStatsDocComponents = () => {
    const newElement = document.createElement("section");

    newElement.className = "exchange-stats2 theme-change light-theme";
    newElement.innerHTML = `
        <div class="exchange-stats2-title">
            <h2>CAKE<span id="exchange-figures">Figures</span></h2>
        </div>
        <div class="exchange-statistics-container light-theme theme-change">
            <div class="exchange-info-container" id="exchange-counter">
            <p class="exchange-titles light-theme">Circulating Supply</p>
            <p class="exchange-counters" id="count-circulating">0</p>
            </div>
            <hr />

            <div class="exchange-info-container" id="exchange-counter">
            <p class="exchange-titles light-theme">Total Supply</p>
            <p class="exchange-counters" id="count-total-supply">0</p>
            </div>
            <hr />

            <div class="exchange-info-container" id="exchange-counter">
            <p class="exchange-titles light-theme">Market cap</p>
            <p class="exchange-counters" id="count-market-cap">$270 million</p>
            </div>
            <hr />

            <div class="exchange-info-container" id="exchange-counter">
            <p class="exchange-titles light-theme">Token Burn</p>
            <p class="exchange-counters" id="count-token-burn">0</p>
            </div>
            <hr />

            <div class="exchange-info-container" id="exchange-counter">
            <p class="exchange-titles light-theme">Current emissions</p>
            <p class="exchange-counters" id="count-current-emissions">
                1,72/block
            </p>
            </div>
        </div>

        <div class="theme-change light-theme" id="community-triangle"></div>
    `


    document.getElementById("exchange-stats2").appendChild(newElement)
}
