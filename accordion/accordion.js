const accordions = document.querySelectorAll(".accordion");
const panels =  document.querySelectorAll(".panel")
console.log(panels[0].scrollHeight);
console.log(panels[0].style.height);
for(let i = 0; i < accordions.length; i++){
    accordions[i].addEventListener("click",function (){
        panels[i].style.height = panels[i].style.height === "" ?  panels[i].scrollHeight  + "px" : ""
        panels[i].classList.toggle("active")
    })
}