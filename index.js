
let burger = document.querySelector(".burger_menu")

let menu = document.querySelector(".menu")

let xMark = document.querySelector(".fa-xmark")

let header = document.querySelector(".header")

let isOpen = false

    

    
burger.addEventListener("click", () => {
    if (!isOpen) {
    menu.classList.add("show")

    burger.classList.add("hide")

    xMark.style.display = "block"


    isOpen = true
    }
})




xMark.addEventListener("click", () => {

    if (isOpen) {
        menu.classList.remove("show")

        xMark.style.display = "none"

        burger.classList.add("show2")
        

        isOpen = false
    }
})



