export const adCarousselDocComponent = () => {
    const newElement = document.createElement('section');

    newElement.className = "ad-caroussel theme-change light-theme";
    newElement.innerHTML = `



    `


    document.getElementById('ad-caroussel').appendChild(newElement)
}