const header = document.querySelector(".header")
const overlay = document.querySelector(".overlay")

function activeLoginScreen()
{
    const options = document.querySelectorAll(".option")
    const loginScreen = document.querySelector(".login-screen")
    const exitBtn = document.querySelector(".exit-btn")

    options.forEach(op => {
        op.addEventListener("click", () => {
            loginScreen.classList.add("active")
            overlay.classList.add("active")
        })
    })

    exitBtn.addEventListener("click", () => {
        loginScreen.classList.remove("active")
        overlay.classList.remove("active")
    })
}

function toggleSideMenu(){
    const menuIcon = document.querySelector(".menu-icon")
    const sideMenu = document.querySelector(".side-menu")

    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("active")
        sideMenu.classList.toggle("active")
        overlay.classList.toggle("active")
        
        if(window.scrollY == 0){
            header.classList.toggle("active")
        }
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

document.addEventListener("DOMContentLoaded", () => {
    activeLoginScreen()
    toggleSideMenu()
    activeHeader()
    productFilter()
})