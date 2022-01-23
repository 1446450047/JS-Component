const fullScreenOverlayNavigationWrapper = document.querySelector(".full-navigation-wrapper")
document.querySelector(".full-navigation-wrapper-button").addEventListener("click",function (){
    fullScreenOverlayNavigationWrapper.classList.toggle("hidden")
})
document.querySelector(".full-navigation-wrapper .close").addEventListener("click",function (){
    fullScreenOverlayNavigationWrapper.classList.toggle("hidden")
})

