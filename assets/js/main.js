const navBarre = document.querySelector("nav")
const search = document.querySelector(".searchBox")
navBarre.addEventListener("mouseenter",()=>{
    navBarre.style.background = "#4C6793"
})

search.addEventListener("click",()=>{
    search.style.transform = "rotate(360deg)"
})
