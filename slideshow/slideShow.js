let imageIndex = 0;
const slideShows = document.querySelectorAll(".slideshow")
const automaticSlideShow = function(){
    slideShows[imageIndex].classList.toggle("active")
    imageIndex++;
    imageIndex = imageIndex >= 4 ? 0: imageIndex;
    slideShows[imageIndex].classList.toggle("active")
}
setInterval(automaticSlideShow,4000)

const previous = document.querySelector(".previous")
const next = document.querySelector(".next")

next.addEventListener("click",function(){
    slideShows[imageIndex].classList.toggle("active")
    imageIndex++
    imageIndex = imageIndex >= 4 ? 0: imageIndex;
    slideShows[imageIndex].classList.toggle("active")
})

previous.addEventListener("click",function (){
    slideShows[imageIndex].classList.toggle("active")
    imageIndex--
    imageIndex = imageIndex < 0 ? 3: imageIndex;
    slideShows[imageIndex].classList.toggle("active")

})