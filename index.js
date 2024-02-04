
let burger = document.querySelector(".burger_menu")

let menu = document.querySelector(".menu")

let xMark = document.querySelector(".xmark")

let header = document.querySelector(".header")

let isOpen = false

burger.addEventListener("click", () => {
    if (!isOpen) {
        menu.classList.add("show")
        
        

        isOpen = true
    }
    else {
        menu.classList.remove("show")
        
        isOpen = false
    }

})


