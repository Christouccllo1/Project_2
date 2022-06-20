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
let resultSection=document.querySelector(".result-section")
let q = ""
searchType.addEventListener("change", (e)=>{
    e.preventDefault()
    q=e.target.value
} )

let count=""
let resultArray=[]
limit.addEventListener("change", (e)=>{
    e.preventDefault()
    count=e.target.value
    console.log(count)
})

searchBtn.addEventListener("click",()=> {
    resultSection.innerHTML=""
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=B9tdgq86zaGpP2sZ78MxJ24FCvZPaKtd&q=${q}&limit=${count}&offset=0&rating=g&lang=en`)
    .then(response=>response.json()
    .then(response=>{
        resultArray=response.data
        resultArray.forEach(element => {
            console.log(element)
            let img=document.createElement("img")
            img.src=element.images["original"].webp
            resultSection.appendChild(img)
        });
    })
    )
})


