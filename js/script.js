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


// ASIDE IMAGE MENU FUNCTIONS

// ADD URL AS THE MEME IMAGE

$("#meme-image").addEventListener("input", () => {
    const urlImage = $("#meme-image").value
    $(".image-container").style.backgroundSize = "cover"
    $(".image-container").style.backgroundImage = `url(${urlImage})`
})


// MODIFY BACKGROUND COLOR FROM INPUT COLOR

$("#image-background-color").addEventListener("input", () => {
    const backgroundColorImage = $("#image-background-color").value
    $("#image-background-color-value").innerHTML = $("#image-background-color").value 
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


// RESET AL FILTER VALUES TO DEFAULTS ONES 

$("#btn-reset-filters").addEventListener("click", () => {
    brightnessRangeValue = 1
    opacityRangeValue = 1
    contrastRangeValue = 100
    blurRangeValue = 0
    grayscaleRangeValue = 0
    sepiaRangeValue = 0
    hueRangeValue = 0
    saturateRangeValue = 100
    invertRangeValue = 0
    $("#brightness-slider").value = brightnessRangeValue
    $("#opacity-slider").value = opacityRangeValue
    $("#contrast-slider").value = contrastRangeValue
    $("#blur-slider").value = blurRangeValue   
    $("#grayscale-slider").value = grayscaleRangeValue
    $("#sepia-slider").value = sepiaRangeValue
    $("#hue-rotate-slider").value = hueRangeValue
    $("#saturate-slider").value = saturateRangeValue
    $("#invert-slider").value = invertRangeValue
    updateImageFilter()
})


// ASIDE TEXT MENU FUNCTIONS

// MODIFY TOP TEXT FROM INPUT

$("#top-text-input").addEventListener("input", () => {
    $("#top-text-container").innerText = $("#top-text-input").value.toUpperCase()
})

// REMOVE TOP TEXT CONTAINER FROM MEME

$("#no-top-text").addEventListener("input", () => {
    const isChecked = $("#no-top-text").checked
    if (isChecked) {
        $(".top-text-wrapper").classList.add("hidden")
    } else {
        $(".top-text-wrapper").classList.remove("hidden")
    }
})

// MODIFY BOTTOM TEXT FROM INPUT

$("#bottom-text-input").addEventListener("input", () => {
    $("#bottom-text-container").innerText = $("#bottom-text-input").value.toUpperCase()
})

// REMOVE BOTTOM TEXT CONTAINER FROM MEME

$("#no-bottom-text").addEventListener("input", () => {
    const isChecked = $("#no-bottom-text").checked
    if (isChecked) {
        $(".bottom-text-wrapper").classList.add("hidden")
    } else {
        $(".bottom-text-wrapper").classList.remove("hidden")
    }
})

// SET FONT TYPE TO TOP AND BOTTOM TEXT

$("#font-selector").addEventListener("input", () => {
    $("#top-text-container").style.fontFamily = $("#font-selector").value
    $("#bottom-text-container").style.fontFamily = $("#font-selector").value
})

// SET FONT SIZE TO TOP AND BOTTOM TEXT

$("#font-size-value").addEventListener("input", () => {
    $("#top-text-container").style.fontSize = `${$("#font-size-value").value}px`
    $("#bottom-text-container").style.fontSize = `${$("#font-size-value").value}px`
})

// SET TEXT ALIGNMENT LEFT TO TOP AND BOTTOM TEXT

$("#btn-align-text-left").addEventListener("click", () => {
    $("#top-text-container").style.textAlign = $("#btn-align-text-left").value
    $("#bottom-text-container").style.textAlign = $("#btn-align-text-left").value
})

// SET TEXT ALIGNMENT CENTER TO TOP AND BOTTOM TEXT

$("#btn-align-text-center").addEventListener("click", () => {
    $("#top-text-container").style.textAlign = $("#btn-align-text-center").value
    $("#bottom-text-container").style.textAlign = $("#btn-align-text-center").value
})

// SET TEXT ALIGNMENT RIGHT TO TOP AND BOTTOM TEXT

$("#btn-align-text-right").addEventListener("click", () => {
    $("#top-text-container").style.textAlign = $("#btn-align-text-right").value
    $("#bottom-text-container").style.textAlign = $("#btn-align-text-right").value
})

// MODIFY FONT COLOR FROM INPUT COLOR

$("#text-color").addEventListener("input", () => {
    const colorText = $("#text-color").value
    $("#text-color-value").innerHTML = $("#text-color").value 
    $("#top-text-container").style.color = $("#text-color").value
    $("#bottom-text-container").style.color = $("#text-color").value
})

// MODIFY BACKGROUND COLOR OF TOP AND BOTTOM TEXTS FROM INPUT COLOR

$("#text-background-color").addEventListener("input", () => {
    const backgroundColorText = $("#text-background-color").value
    $("#text-background-color-value").innerHTML = $("#text-background-color").value 
    $(".top-text-wrapper").style.backgroundColor = $("#text-background-color").value
    $(".bottom-text-wrapper").style.backgroundColor = $("#text-background-color").value
})
