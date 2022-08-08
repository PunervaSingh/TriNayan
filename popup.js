if (document.querySelector(".popup")) {
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle")
    let buttonOn = false;

    button.addEventListener("click", () => {
        if (!buttonOn) {
            buttonOn = true;

            button.style.animation = "transformToBlue 0.5s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleRight 0.5s ease-in-out 0s forwards"
            chrome.tabs.executeScript({
                file: 'appOn.js'
            })
        }
        else {
            buttonOn = false;
            button.style.animation = "transformToYellow 0.5s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleLeft 0.5s ease-in-out 0s forwards"
            chrome.tabs.executeScript({
                file: 'appOff.js'
            })
        }
    })
    var normal = document.getElementById("normal");
    normal.addEventListener("click", () => {
        chrome.tabs.executeScript({
            file: 'normal.js'
        })
    })
    var grayscale = document.getElementById("grayscale");
    grayscale.addEventListener("click", () => {
        chrome.tabs.executeScript({
            file: 'grayScale.js'
        })
    })
    var invertedcolour = document.getElementById("invertedcolour");
    invertedcolour.addEventListener("click", () => {
        chrome.tabs.executeScript({
            file: 'invertedColour.js'
        })
    })
    var increasedcontrast = document.getElementById("increasedcontrast");
    increasedcontrast.addEventListener("click", () => {
        chrome.tabs.executeScript({
            file: 'increasedcontrast.js'
        })
    })
    var invertedgreyscale = document.getElementById("invertedgreyscale");
    invertedgreyscale.addEventListener("click", () => {
        chrome.tabs.executeScript({
            file: 'invertedgreyscale.js'
        })
    })
    var yellowonblack = document.getElementById("yellowonblack");
    yellowonblack.addEventListener("click", () => {
        chrome.tabs.executeScript({
            file: 'yellowonblack.js'
        })
    })
    var fonts = document.getElementById("fonts");
    fonts.addEventListener("click", () => {
        document.body.innerText.style.fontFamily = "arial";
    })
}