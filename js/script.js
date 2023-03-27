const $ = (selector) => document.querySelector(selector)

// OPENS ASIDE IMAGE PANEL - CLOSES ASIDE TEXT PANEL

$("#btn-image-menu").addEventListener("click", () => {
    $("#image-menu-panel").classList.remove("hidden")
    $("#text-menu-panel").classList.add("hidden")
})

// CLOSES ASIDE IMAGE PANEL

$("#btn-close-image-menu").addEventListener("click", () => {
    $("#image-menu-panel").classList.add("hidden")
})

// OPEN ASIDE TEXT PANEL - CLOSES ASIDE IMAGE PANEL

$("#btn-text-menu").addEventListener("click", () => {
    $("#text-menu-panel").classList.remove("hidden")
    $("#image-menu-panel").classList.add("hidden")
})

// CLOSES ASIDE TEXT PANEL

$("#btn-close-text-menu").addEventListener("click", () => {
    $("#text-menu-panel").classList.add("hidden")
})

// SET LIGHT MODE

$("#btn-light-mode").addEventListener("click", () => {
        $("#btn-dark-mode").classList.remove("hidden")
        $("#btn-light-mode").classList.add("hidden")
        $("body").setAttribute("data-theme", "light-theme")
})

// SET DARK MODE

$("#btn-dark-mode").addEventListener("click", () => {
        $("#btn-dark-mode").classList.add("hidden")
        $("#btn-light-mode").classList.remove("hidden")
        $("body").removeAttribute("data-theme", "light-theme")
})