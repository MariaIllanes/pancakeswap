

let slideCommunityIndex = 1; // Current slide index

// Function to show a specific slide
function showCommunityCard(index) {
    const communitySlides = document.querySelectorAll('.community-card-slide');
    const communityButtons = document.querySelectorAll('.community-slideshow-buttons button');

    communitySlides.forEach(slide => {
        slide.style.display = 'none';
    });
    communityButtons.forEach(button => {
        button.classList.remove('active');
    });

    communitySlides[index - 1].style.display = 'block';
    communityButtons[index - 1].classList.add('active');
    slideCommunityIndex = index;
}

// change slide every 4 seconds
function communityAutoShow() {
    const communitySlides = document.querySelectorAll('.community-card-slide');
    const communityButtons = document.querySelectorAll('.community-slideshow-buttons button');

    communitySlides.forEach(slide => {
        slide.style.display = 'none';
    });
    communityButtons.forEach(button => {
        button.classList.remove('active');
    });

    slideCommunityIndex++;
    if (slideCommunityIndex > communitySlides.length) {
        slideCommunityIndex = 1;
    }

    communitySlides[slideCommunityIndex - 1].style.display = 'block';
    communityButtons[slideCommunityIndex - 1].classList.add('active');
}

showCommunityCard(1);

setInterval(communityAutoShow, 6000);