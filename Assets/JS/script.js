let hambtn = document.querySelector("header button")
let popup = document.querySelector(".popup")
hambtn.addEventListener("click", ()=>{
    if(popup.style.display==="none"){
        popup.style.display="flex"
    } else{
        popup.style.display="none"
    }
})