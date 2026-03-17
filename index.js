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

document.addEventListener("DOMContentLoaded", () => {
    toggleSideMenu()
    activeHeader()
})