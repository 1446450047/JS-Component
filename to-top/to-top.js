const toTop  = document.querySelector(".to-top")
window.onscroll = function (){
    if(document.documentElement.scrollTop > 200){
        toTop.style.display = "block"
    }
    if(document.documentElement.scrollTop < 200){
        toTop.style.display = "none"
    }
}
toTop.addEventListener("click",function (){
    document.documentElement.scrollTop = 0;
})