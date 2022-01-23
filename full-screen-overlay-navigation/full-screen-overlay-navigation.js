const fullScreenOverlayNavigationWrapper = document.querySelector(".full-navigation-wrapper")
document.querySelector(".full-navigation-wrapper-button").addEventListener("click",function (){
    fullScreenOverlayNavigationWrapper.style.display = "block"
})
document.querySelector(".full-navigation-wrapper .close").addEventListener("click",function (){
    fullScreenOverlayNavigationWrapper.style.display = "none"
})

