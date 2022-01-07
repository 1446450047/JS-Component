document.querySelector(".slider.round").addEventListener("click",function (){
    this.classList.toggle("active")
    document.querySelector(".toggle-switch.round").classList.toggle("active")
})
document.querySelector(".slider.circle").addEventListener("click",function (){
    this.classList.toggle("active")
    document.querySelector(".toggle-switch.circle").classList.toggle("active")
})