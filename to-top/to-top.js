window.onscroll = function (){
    if(document.documentElement.scrollTop > 200){
        document.querySelector(".to-top").style.display = "block"
    }

    if(document.documentElement.scrollTop < 200){
        document.querySelector(".to-top").style.display = "none"
    }

}