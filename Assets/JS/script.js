let hambtn = document.querySelector("header button")
let popup = document.querySelector(".popup")
hambtn.addEventListener("click", ()=>{
    if(popup.style.display==="none"){
        popup.style.display="flex"
    } else{
        popup.style.display="none"
    }
})



let searchType=document.querySelector("#search-type")
let limit=document.querySelector("#count")
let searchBtn=document.querySelector(".search-section button")

let q = ""
searchType.addEventListener("change", (e)=>{
    e.preventDefault()
    q=e.target.value
    console.log(q)
    
} )