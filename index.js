const header = document.querySelector(".header")
const overlay = document.querySelector(".overlay")

let menuOpen = false
let loginOpen = false

function uptadeOverlay()
{
    if(menuOpen || loginOpen){
        overlay.classList.add("active")
    }
    else{
        overlay.classList.remove("active")
    }
}

function toggleSideMenu(){
    const menuIcon = document.querySelector(".menu-icon")
    const sideMenu = document.querySelector(".side-menu")

    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("active")
        sideMenu.classList.toggle("active")

        menuOpen = !menuOpen
        uptadeOverlay()
        
        if(window.scrollY == 0){
            header.classList.toggle("active")
        }
    })
}

function activeLoginScreen()
{
    const options = document.querySelectorAll(".option")
    const loginScreen = document.querySelector(".login-screen")
    const exitBtn = document.querySelector(".exit-btn")

    options.forEach(op => {
        op.addEventListener("click", () => {
            loginScreen.classList.add("active")
            loginOpen = true
            uptadeOverlay()
        })
    })

    exitBtn.addEventListener("click", () => {
        loginScreen.classList.remove("active")
        loginOpen = false
        uptadeOverlay()
    })
}

function activeHeader()
{
    window.addEventListener("scroll", () => {
        if(window.scrollY > 10){
            header.classList.add("active")
        }
        else{
            header.classList.remove("active")
        }
    })
}

function productFilter()
{
    const categories = document.querySelectorAll(".category")
    const products = document.querySelectorAll(".product-card") 

    for(let i = 0; i < categories.length; i++){
        categories[i].addEventListener("click", function(){
            for(let j = 0; j < categories.length; j++){
                categories[j].classList.remove("active")
            }
            this.classList.add("active")

            let dataFilter = this.getAttribute("data-filter")

            for(let k = 0; k < products.length; k++){
                products[k].classList.remove("active")
                products[k].classList.add("hide")

                if(products[k].getAttribute("data-item") == dataFilter || dataFilter == "all"){
                    products[k].classList.remove("hide")
                    products[k].classList.add("active")      
                }
            }
        })
    }
}

function activeSlider()
{
    const track   = document.querySelector(".track")
    const cards   = document.querySelectorAll(".card")
    const nextBtn = document.querySelector(".next")
    const prevBtn = document.querySelector(".prev")
    
    const total = cards.length
    let index = 1
    let isTransitioning = false
    
    const firstClone = cards[0].cloneNode(true)
    const lastClone  = cards[cards.length - 1].cloneNode(true)

    track.appendChild(firstClone)
    track.insertBefore(lastClone, track.firstChild)

    function updateCarousel()
    {
        track.style.transform = `translateX(-${index * 100}%)`
    }

    track.addEventListener("transitionend", () => {
        const allCards = document.querySelectorAll(".card")
    
        if(index === allCards.length - 1){
            track.style.transition = "none"
            index = 1
            track.style.transform = `translateX(-${index * 100}%)`
        } 

        if(index === 0){
            track.style.transition = "none"
            index = allCards.length - 2
            track.style.transform = `translateX(-${index * 100}%)`
        }

        track.offsetHeight
        track.style.transition = "transform .3s ease-in-out"
        isTransitioning = false
    })

    nextBtn.addEventListener("click", () => {
        if(isTransitioning) return
        isTransitioning = true
        index++
        updateCarousel()
    })

    prevBtn.addEventListener("click", () => {
        if(isTransitioning) return
        isTransitioning = true
        index--
        updateCarousel()  
    })

    updateCarousel()
}

document.addEventListener("DOMContentLoaded", () => {
    activeLoginScreen()
    toggleSideMenu()
    activeHeader()
    productFilter()
    activeSlider()
})