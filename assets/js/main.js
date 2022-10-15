const navBarre = document.querySelector("nav")
const search = document.querySelector(".searchBox")
navBarre.addEventListener("mouseenter",()=>{
    navBarre.style.background = "rgb(19, 53, 104)"
})

search.addEventListener("click",()=>{
    // search.style.transform = "rotateZ(360deg)"
    console.log("teste");
})

navBarre.addEventListener("mouseout",()=>{
    navBarre.style.background = "transparent"
})
