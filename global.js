const toTop  = document.querySelector(".to-top")
window.onscroll = function(){
    if(document.documentElement.scrollTop > 200){
        toTop.style.display = "block"
    }
    if(document.documentElement.scrollTop < 200){
        toTop.style.display = "none"
    }
    //当前滚动的高度
    let winScrolled = Math.floor(document.documentElement.scrollTop)
    //页面的可滚高度
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //已滚的百分比
    let scrolled = Math.floor(winScrolled/height*100)
    document.querySelector(".process-bar").style.width = scrolled + '%'
}