export const communityDocComponents = () => {
    const newElement = document.createElement("section");

    newElement.className = "community theme-change light-theme";
    newElement.innerHTML = `
        <img src="assets/community/community-x.png" alt="" width="280" height="280" class="community-bg-img left" id="community-bg-x">
        <img src="assets/community/community-telegram.png" alt="" width="260" height="260" class="community-bg-img left" id="community-bg-tg">
        <img src="assets/community/community-instagram.png" alt="" width="290" height="290" class="community-bg-img left" id="community-bg-ig">
        <img src="assets/community/community-discord.png" alt="" width="250" height="250" class="community-bg-img left" id="community-bg-dis">
        <img src="assets/community/community-heart.png" alt="" width="80" height="80" class="community-bg-img right" id="community-bg-heart">
        <img src="assets/community/community-bell.png" alt="" width="270" height="270" class="community-bg-img right" id="community-bg-bell">
        <img src="assets/community/community-comment.png" alt="" width="180" height="180" class="community-bg-img right" id="community-bg-comment">
        <img src="assets/community/community-speaker.png" alt="" width="350" height="350" class="community-bg-img right" id="community-bg-speaker">
        <img src="assets/community/community-dots.png" alt="" width="150" height="150" class="community-bg-img right" id="community-bg-dots">

        <div class="community-container theme-change light-theme">
            <div><h2>Join our <span class="color-change">Community</span></h2></div>
            <div><h3>Together we can make the PancakeSwap community even stronger</h3></div>
            <div class="community-cards theme-change light-theme"> 
                <div class="community-card theme-change light-theme" id="community-card1">
                    <div class="theme-change light-theme" id="community-card1-content">
                        <p>Community Members</p>
                        <p>1.7M +</p>
                        <p>Multilingual Communities</p>
                        <p>15 +</p>
                        <p>Community Ambassadors</p>
                        <p>35 +</p>
                    </div>
                </div>
                <div class="community-card theme-change light-theme" id="community-card2">
                    <div id="community-slider-container">
                        <div class="slideshow-container">
                            <div class="community-card-slide" id="community-card-slide1">
                                <h5>Top Tweet of the week</h5>
                                <img src="assets/community/community-user-img.png" alt="" id="community-user-img">
                                <div id="community-tweet-user">
                                    <p>PancakeSwap🥞Ev3ryone's Favourite D3X</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-discount-check-filled" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor" />
                                    </svg>
                                </div>

                                <div id="community-tweet-icons">
                                    <p>@PancakeSwap</p>
                                    <hr>
                                    <p>Sep 22</p>
                                    <hr>
                                    <div id="community-tweet-likes">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="community-tweet-icon" width="15" height="15" viewBox="0 0 24 24" stroke-width="1.5" stroke="#b8add2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                        </svg>
                                        <p>249</p>
                                    </div>
                                    <hr>
                                    <div id="community-tweet-charts">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="community-tweet-icon" width="15" height="15" viewBox="0 0 24 24" stroke-width="1.5" stroke="#b8add2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                            <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                            <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                            <path d="M4 20l14 0" />
                                        </svg>
                                        <p>19.7k</p>
                                    </div>
                                </div>
                                <p>🎂 3 years ago, we planted the seed on the BNB Chain, and today, it has grown into Everyone's Favorite DEX across eight ....</p>
                                <p>
                                    <a href="https://docs.pancakeswap.finance/get-started/wallet-guide" id="community-tweet-link">Web Link
                                        <svg xmlns="http://www.w3.org/2000/svg" id="fb-icon-link" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1fc7d4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                        <path d="M11 13l9 -9" />
                                        <path d="M15 4h5v5" />
                                        </svg>
                                    </a>
                                </p>
                                  
                            </div>   
                            <div class="community-card-slide" id="community-card-slide2"  style="display: none;">
                                <h5>Latest Blog Post</h5>
                                <img src="assets/community/community-card-img.png" alt="" id="community-card-img">
                                <p id="community-date">2023-11-13</p>
                                <p>PancakeMasters Weirdest Inerview Series: str1ke, the bot-blaster Ambassador</p>
                            </div>
          
                            <div class="community-slideshow-buttons">
                                <button id="community-slide-button1" onclick="showCommunityCard(1)"></button>
                                <button id="community-slide-button2" onclick="showCommunityCard(2)"></button>
                            </div>
                        </div>            
                    </div>
                </div>
            </div>
            <div class="community-sm-icons">
                <div class="community-sm-container">
                    <a href="https://twitter.com/pancakeswap"> <svg xmlns="http://www.w3.org/2000/svg" class="community-sm theme-change light-theme" id="logo-twitter-cm" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1fc7d4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                      </svg>
                    </a>

                    <a href="https://t.me/pancakeswap"> <svg xmlns="http://www.w3.org/2000/svg" class="community-sm theme-change light-theme" id="logo-telegram-cm" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1fc7d4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                      </svg>
                    </a>       

                    <a href="https://discord.gg/pancakeswap"> <svg xmlns="http://www.w3.org/2000/svg" class="community-sm theme-change light-theme" id="logo-discord-cm" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1fc7d4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                        <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                        <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
                        <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                      </svg>
                    </a>

                    <a href="https://instagram.com/pancakeswap_official"> <svg xmlns="http://www.w3.org/2000/svg" class="community-sm theme-change light-theme" id="logo-instagram-cm" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1fc7d4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M16.5 7.5l0 .01" />
                      </svg>
                    </a>

                    <a href="https://reddit.com/r/pancakeswap"> <svg xmlns="http://www.w3.org/2000/svg" class="community-sm theme-change light-theme" id="logo-reddit-cm" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1fc7d4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z" />
                        <path d="M12 8l1 -5l6 1" />
                        <path d="M19 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <circle cx="9" cy="13" r=".5" fill="currentColor" />
                        <circle cx="15" cy="13" r=".5" fill="currentColor" />
                        <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" />
                      </svg>
                    </a>
    
                    <a href="https://www.youtube.com/@pancakeswap_official"> <svg xmlns="http://www.w3.org/2000/svg" class="community-sm theme-change light-theme" id="logo-youtube-cm" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1fc7d4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                        <path d="M10 9l5 3l-5 3z" />
                      </svg>
                    </a> 
                </div>
            </div>
        </div>
    `


    document.getElementById("community").appendChild(newElement)
}