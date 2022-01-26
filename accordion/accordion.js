const accordions = document.querySelectorAll(".accordion");
const panels =  document.querySelectorAll(".panel")
panels[0].style.height  =  panels[0].scrollHeight  + "px"
for(let i = 0; i < accordions.length; i++){
    accordions[i].addEventListener("click",function (){
        accordions[i].classList.toggle("active")
        panels[i].style.height = panels[i].style.height === "" ?  panels[i].scrollHeight  + "px" : ""
        panels[i].classList.toggle("active")
    })
}