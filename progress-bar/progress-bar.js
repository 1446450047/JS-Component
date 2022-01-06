document.querySelector(".btn.success.progress-bar").addEventListener("click",function (){
    let element = document.querySelector(".progress-bar>.bar")
    let width = 1
    const frame = function (){
        if(width >= 100){
            window.clearInterval(id)
        }else{
            width++;
            element.style.width = width + "%";
            element.innerHTML = width + "%"
        }
    }
    var id = window.setInterval(frame,10)

    window.setTimeout(frame,0)

})