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

// DOWNLOAD MEME FUNCTION

const downloadMeme = () => {
     domtoimage.toBlob($('#meme-container')).then((blob) => {
        saveAs(blob, 'mi-meme.png')
      })
}

$("#btn-download").addEventListener('click', downloadMeme)


// ADD URL AS THE MEME IMAGE

$("#meme-image").addEventListener("input", () => {
    const urlImage = $("#meme-image").value
    $(".image-container").style.backgroundSize = "cover"
    $(".image-container").style.backgroundImage = `url(${urlImage})`
})


// MODIFY BACKGROUND COLOR FROM INPUT COLOR

$("#image-background-color").addEventListener("input", () => {
    const backgroundColorImage = $("#image-background-color").value
    $(".image-background-color-value").innerHTML = $("#image-background-color").value 
    $(".image-container").style.backgroundColor = $("#image-background-color").value
})


// APPLY BACKGROUND BLEND MODE

$("#blend-mode-menu").addEventListener("input", () => {
    $(".image-container").style.backgroundBlendMode = $("#blend-mode-menu").value
})


// APPLY ALL VALUES OF FILTER TO IMAGE

let brightnessRangeValue = 1
let opacityRangeValue = 1
let contrastRangeValue = 100
let blurRangeValue = 0
let grayscaleRangeValue = 0
let sepiaRangeValue = 0
let hueRangeValue = 0
let saturateRangeValue = 100
let invertRangeValue = 0

const updateImageFilter = () => {
    $(".image-container").style.filter = `brightness(${brightnessRangeValue}) opacity(${opacityRangeValue}) contrast(${contrastRangeValue}%) blur(${blurRangeValue}px) grayscale(${grayscaleRangeValue}%) sepia(${sepiaRangeValue}%) hue-rotate(${hueRangeValue}deg) saturate(${saturateRangeValue}%) invert(${invertRangeValue})`
}

// APPLY BRIGHTNESS FILTER TO IMAGE

$("#brightness-slider").addEventListener("input", () => {
    brightnessRangeValue = $("#brightness-slider").value
    updateImageFilter()
})

// APPLY OPACITY FILTER TO IMAGE

$("#opacity-slider").addEventListener("input", () => {
    opacityRangeValue = $("#opacity-slider").value
    updateImageFilter()
})

// APPLY CONTRAST FILTER TO IMAGE

$("#contrast-slider").addEventListener("input", () => {
    contrastRangeValue = $("#contrast-slider").value
    updateImageFilter()
})

// APPLY BLUR FILTER TO IMAGE

$("#blur-slider").addEventListener("input", () => {
    blurRangeValue = $("#blur-slider").value
    updateImageFilter()
})

// APPLY GRAYSCALE FILTER TO IMAGE

$("#grayscale-slider").addEventListener("input", () => {
    grayscaleRangeValue = $("#grayscale-slider").value
    updateImageFilter()
})

// APPLY SEPIA FILTER TO IMAGE

$("#sepia-slider").addEventListener("input", () => {
    sepiaRangeValue = $("#sepia-slider").value
    updateImageFilter()
})

// APPLY HUE FILTER TO IMAGE

$("#hue-rotate-slider").addEventListener("input", () => {
    hueRangeValue = $("#hue-rotate-slider").value
    updateImageFilter()
})

// APPLY SATURATION FILTER TO IMAGE

$("#saturate-slider").addEventListener("input", () => {
    saturateRangeValue = $("#saturate-slider").value
    updateImageFilter()
})

// APPLY INVERT FILTER TO IMAGE

$("#invert-slider").addEventListener("input", () => {
    invertRangeValue = $("#invert-slider").value
    updateImageFilter()
})


