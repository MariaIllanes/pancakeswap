export const newsDocComponents = () => {
    const newElement = document.createElement("section");

    newElement.className = "news theme-change light-theme";
    newElement.innerHTML = `
    <div class="news-title">
    <div class="featured theme-change light-theme">Featured</div>
    <div class="news- theme-change light-theme">News</div>
</div>
<div class="news-carousel-container">
    <div class="arrow-container">
        <div class="arrow arrow-left">
            <svg viewBox="0 0 24 24" color="var(--colors-textSubtle)" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bcPKhP Eouil"><path d="M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z"></path></svg>
        </div>
    </div>
    <div class="news-cards-container">
    </div>
    <div class="arrow-container">
        <div class="arrow arrow-right">
            <svg viewBox="0 0 24 24" color="var(--colors-textSubtle)" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bcPKhP Eouil"><path d="M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z"></path></svg>
        </div>
    </div>
</div>
    `


    document.getElementById("news").appendChild(newElement)
}