function toggleSideMenu(){
    const menuIcon = document.querySelector(".menu-icon")
    const sideMenu = document.querySelector(".side-menu")

    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("active")
        sideMenu.classList.toggle("active")
    })
}

document.addEventListener("DOMContentLoaded", () => {
    toggleSideMenu()
})