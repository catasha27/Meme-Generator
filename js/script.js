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

