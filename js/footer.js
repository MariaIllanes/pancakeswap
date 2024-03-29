export const footerDocComponents = () => {
    const newElement = document.createElement("section");
  
    newElement.className = "main-footer";
    newElement.innerHTML = `
      <div class="main-footer-container">
      <div class="footer-all">
          <div class="footer-links-container">
              <div class="footer-ecosystem">
                  <h4 class="footer-title">ECOSYSTEM</h4>
                  <p class="footer-linked"><a href="https://pancakeswap.finance/swap">Trade</a></p>
                  <p class="footer-linked"><a href="https://pancakeswap.finance/farms">Earn</a></p>
                  <p class="footer-linked"><a href="https://pancakeswap.finance/prediction">Game</a></p>
                  <p class="footer-linked"><a href="https://pancakeswap.finance/nfts">NFT</a></p>
                  <p class="footer-linked"><a href="https://docs.pancakeswap.finance/governance-and-tokenomics/cake-tokenomics">Tokenomics</a></p>
                  <p class="footer-linked"><a href="https://assets.pancakeswap.finance/litepaper/v2litepaper.pdf">Litepaper</a></p>
                  <p class="footer-linked"><a href="https://analytics.pancakeswap.finance/">CAKE Emission Projection</a></p>
                  <p class="footer-linked"><a href="https://merch.pancakeswap.finance/">Merchandise</a></p>
              </div>
              <div class="footer-business">
                  <h4 class="footer-title">BUSINESS</h4>
                  <p class="footer-linked"><a href="https://docs.pancakeswap.finance/ecosystem-and-partnerships/business-partnerships/syrup-pools-and-farms">Farms And Syrup Pools</a></p>
                  <p class="footer-linked"><a href="https://docs.pancakeswap.finance/ecosystem-and-partnerships/business-partnerships/initial-farm-offerings-ifos">IFO</a></p>
                  <p class="footer-linked"><a href="https://pancakeswap.finance/predictionhttps://docs.pancakeswap.finance/ecosystem-and-partnerships/business-partnerships/nft-market-applications">NFT Marketplace</a></p>
                  
              </div>
              <div class="footer-developers">
                  <h4 class="footer-title">DEVELOPER</h4>
                  <p class="footer-linked"><a href="https://docs.pancakeswap.finance/developers/contributing">Contributing</a></p>
                  <p class="footer-linked"><a href="https://github.com/pancakeswap">Github</a></p>
                  <p class="footer-linked"><a href="https://docs.pancakeswap.finance/developers/bug-bounty">Bug Bounty</a></p>
              </div>
              <div class="footer-support">
                  <h4 class="footer-title">SUPPORT</h4>
                  <p class="footer-linked"><a href="https://docs.pancakeswap.finance/contact-us/customer-support">Contact</a></p>
                  <p class="footer-linked"><a href="https://docs.pancakeswap.finance/readme/help/troubleshooting">Troubleshooting</a></p>
                  <p class="footer-linked"><a href="https://docs.pancakeswap.finance/">Documentation</a></p>
              </div>
              <div class="footer-about">
                  <h4 class="footer-title">ABOUT</h4>
                  <p class="footer-linked"><a href="https://pancakeswap.finance/terms-of-service">Terms Of Service</a></p>
                  <p class="footer-linked"><a href="https://github.com/pancakeswaphttps://blog.pancakeswap.finance/">Blog</a></p>
                  <p class="footer-linked"><a href="https://docs.pancakeswap.finance/ecosystem-and-partnerships/brand">Brand Assets</a></p>
                  <p class="footer-linked"><a href="https://docs.pancakeswap.finance/team/become-a-chef">Careers</a></p>
              </div>
              <div class="footer-logo">
                  <img src="assets/footer-logo.png" alt="Logo PancakeSwap" id="footer-pancakeswap-logo">
                  <img src="assets/footer-logo - reduced.png" alt="Logo PancakeSwap" id="footer-pancakeswap-logo-reduced">
              </div>
          </div>
      </div>
      <div class="footer-socialmedia-container">
          <a href="https://twitter.com/pancakeswap"> <svg xmlns="http://www.w3.org/2000/svg" class="social-media-logo" id="logo-twitter"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#655d90" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg>
          </a>
  
             <div class="telegram-dropdown">
                  <label class="select-language" for="select-telegram" id="select-language-telegram">
                      <svg xmlns="http://www.w3.org/2000/svg" class="social-media-logo" id="logo-telegram" viewBox="0 0 24 24" stroke-width="1.5" stroke="#655d90" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                      </svg>
                  </label> 
                  <ul class="telegram-language-options" id="telegram-language-options">
                      <li data-value="https://t.me/pancakeswap">English</li>
                      <li data-value="https://t.me/pancakeswap">Ελληνικά</li>
                      <li data-value="https://t.me/pancakeswapES">Español</li>
                      <li data-value="https://t.me/pancakeswapES">Nederlands</li>
                      <li data-value="https://t.me/pancakeswapES">हिंदी</li>
                      <li data-value="https://t.me/pancakeswapES">Polski</li>
                      <li data-value="https://t.me/pancakeswapES">Português</li>
                      <li data-value="https://t.me/pancakeswapES">العربية</li>
                      <li data-value="https://t.me/pancakeswapFR">Français</li>
                      <li data-value="https://t.me/pancakeswapIndonesia">Bahasa Indonesia</li>
                      <li data-value="https://t.me/pancakeswapJP">日本語</li>
                      <li data-value="https://t.me/pancakeswapES">한국어</li>
                      <li data-value="https://t.me/PancakeSwapVN">Tiếng Việt</li>
                      <li data-value="https://t.me/pancakeswapES">简体中文</li>
                      <li data-value="https://t.me/PancakeSwapAnn">Announcement</li>
                  </ul>
              </div>
          
          <a href="https://reddit.com/r/pancakeswap"> <svg xmlns="http://www.w3.org/2000/svg" class="social-media-logo" id="logo-reddit" viewBox="0 0 24 24" stroke-width="1.5" stroke="#655d90" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z" />
              <path d="M12 8l1 -5l6 1" />
              <path d="M19 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <circle cx="9" cy="13" r=".5" fill="currentColor" />
              <circle cx="15" cy="13" r=".5" fill="currentColor" />
              <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" />
            </svg>
          </a>
  
          <a href="https://instagram.com/pancakeswap_official"> <svg xmlns="http://www.w3.org/2000/svg" class="social-media-logo" id="logo-instagram" viewBox="0 0 24 24" stroke-width="1.5" stroke="#655d90" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </a>
  
          <a href="https://github.com/pancakeswap/"> <svg xmlns="http://www.w3.org/2000/svg" class="social-media-logo" id="logo-github" viewBox="0 0 24 24" stroke-width="1.5" stroke="#655d90" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
  
          <a href="https://discord.gg/pancakeswap"> <svg xmlns="http://www.w3.org/2000/svg" class="social-media-logo" id="logo-discord" viewBox="0 0 24 24" stroke-width="1.5" stroke="#655d90" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
              <path d="M7 16.5c3.5 1 6.5 1 10 0" />
            </svg>
          </a>
  
          <a href="https://www.youtube.com/@pancakeswap_official"> <svg xmlns="http://www.w3.org/2000/svg" class="social-media-logo" id="logo-youtube" viewBox="0 0 24 24" stroke-width="1.5" stroke="#655d90" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
              <path d="M10 9l5 3l-5 3z" />
            </svg>
          </a> 
      </div>
      <hr id="footer-separator">
  </div>
      
  <div class="secondary-footer">
      <div class="footer-buttons">
          <div class="footer-left">
              <label class="switch">
                  <input type="checkbox" id="main2">
                  <span class="slider round">
                      <div class="slider-images">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon-ligth theme-change light-theme" id="icon-sun" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#27262c" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                              <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
                              <path d="M6.343 17.657l-1.414 1.414" />
                              <path d="M6.343 6.343l-1.414 -1.414" />
                              <path d="M17.657 6.343l1.414 -1.414" />
                              <path d="M17.657 17.657l1.414 1.414" />
                              <path d="M4 12h-2" />
                              <path d="M12 4v-2" />
                              <path d="M20 12h2" />
                              <path d="M12 20v2" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon-light theme-change light-theme" id="icon-moon" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9a6aff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill=""/>
                              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                          </svg>
                      </div>
                  </span>
              </label>
              
              <div class="language-dropdown">
                  <label class="select-language-web-label" for="select-language-web" id="select-language-web-label">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon-language" id="icon-language" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f4eeff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M3.6 9h16.8" />
                          <path d="M3.6 15h16.8" />
                          <path d="M11.5 3a17 17 0 0 0 0 18" />
                          <path d="M12.5 3a17 17 0 0 1 0 18" />
                      </svg> EN
                  </label> 
                  <ul class="footer-language-options" id="footer-language-options">
                      <li value="EN">English</li>
                      <li value="EL">Ελληνικά</li>
                      <li value="ES">Español</li>
                      <li value="NE">Nederlands</li>
                      <li value="HI">हिंदी</li>
                      <li value="PO">Polski</li>
                      <li value="PT">Português</li>
                      <li value="">العربية</li>
                      <li value="FR">Français</li>
                      <li value="IN">Bahasa Indonesia</li>
                      <li value="">日本語</li>
                      <li value="">한국어</li>
                      <li value="TV">Tiếng Việt</li>
                      <li value="">简体中文</li>
                  </ul>
              </div>
              
              
          </div>
          <div class="footer-rigth">
              <div id="footer-dollar-link">
                  <a href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"> 
                      <img src="/assets/footer-mini-logo.png" id="footer-mini-logo-img"> <p id="footer-mini-logo-text">$1.188</p>
                  </a>
              </div>
              <a href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56" class="btn-footer">Buy CAKE →</a>
          </div>
      </div>
      <hr id="footer-separator2">
  
  </div>
  
      
      `;
  
    document.getElementById("main-footer").appendChild(newElement);
  };