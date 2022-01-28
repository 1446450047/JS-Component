let imageIndex = 0;
const slideShows = document.querySelectorAll(".slideshow");
const dots = document.querySelectorAll(".dot");
const automaticSlideShow = function () {
    slideShows[imageIndex].classList.toggle("active");
    dots[imageIndex].classList.toggle("active");
    imageIndex++;
    imageIndex = imageIndex >= 4 ? 0 : imageIndex;
    dots[imageIndex].classList.toggle("active");
    slideShows[imageIndex].classList.toggle("active");
};
setInterval(automaticSlideShow,4000)

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

next.addEventListener("click", function () {
    slideShows[imageIndex].classList.toggle("active");
    dots[imageIndex].classList.toggle("active");
    imageIndex++;
    imageIndex = imageIndex >= 4 ? 0 : imageIndex;
    slideShows[imageIndex].classList.toggle("active");
    dots[imageIndex].classList.toggle("active");
});

previous.addEventListener("click", function () {
    slideShows[imageIndex].classList.toggle("active");
    dots[imageIndex].classList.toggle("active");
    imageIndex--;
    imageIndex = imageIndex < 0 ? 3 : imageIndex;
    slideShows[imageIndex].classList.toggle("active");
    dots[imageIndex].classList.toggle("active");
});

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
            slideShows[i].classList.remove("active");

        }
        imageIndex = i;
        dots[imageIndex].classList.toggle("active");
        slideShows[imageIndex].classList.toggle("active");
    });
}