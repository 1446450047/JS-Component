let buttons = document.querySelectorAll(".tabs-header button")
let contents = document.querySelectorAll(".tabContent")

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",function (){
        for(let j = 0; j < contents.length; j++){
            j === i ? contents[j].style.display = "block" : contents[j].style.display = "none";
            j === i ? buttons[j].classList.add("active") : buttons[j].classList.remove("active");
        }
    })
}