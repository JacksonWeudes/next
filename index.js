const header = document.querySelector(".header")

function toggleSideMenu(){
    const menuIcon = document.querySelector(".menu-icon")
    const sideMenu = document.querySelector(".side-menu")
    const overlay = document.querySelector(".overlay")

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
    toggleSideMenu()
    activeHeader()
    productFilter()
})