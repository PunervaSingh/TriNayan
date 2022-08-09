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

    // const btnIncrease = document.querySelector(".btnincrease");
    // btnIncrease.addEventListener("click", () => {
    //     // document.querySelector("body").style.fontSize= "35px";
    //     chrome.tabs.executeScript({
    //         file: 'increaseFont.js'
    //     })
    // })

    // const btnDecrease = document.querySelector(".btndecrease");
    // btnDecrease.addEventListener("click", () => {
    //     // document.querySelector("body").style.fontSize= "35px";
    //     chrome.tabs.executeScript({
    //         file: 'decreaseFont.js'
    //     })
    // })

    var fontStyle = document.getElementById("fonts");
    fontStyle.addEventListener("change", () => {
        var op = fontStyle.options[fontStyle.selectedIndex].text;
        if (op === 'Arial') {
            chrome.tabs.executeScript({
                file: 'arial.js'
            })
        }
        else if (op === 'Rockwell') {
            chrome.tabs.executeScript({
                file: 'rockwell.js'
            })
        }
        else if (op === 'Tahoma') {
            chrome.tabs.executeScript({
                file: 'tahoma.js'
            })
        }
        else if (op === 'Times New Roman') {
            chrome.tabs.executeScript({
                file: 'times.js'
            })
        }
        else if (op === 'Verdana') {
            chrome.tabs.executeScript({
                file: 'verdana.js'
            })
        }
        // document.querySelector("body").style.fontFamily = fontStyle.options[fontStyle.selectedIndex].text;
    })

    var brightnessRange = document.getElementById("brightnessRange");
    brightnessRange.addEventListener("change", () => {
        var bval = brightnessRange.value;
        let st = bval.toString();
        chrome.tabs.executeScript({
            code: "var config = " + st + ";"
        }, function() {
            chrome.tabs.executeScript({file: 'brightness.js'});
        });
    })
    
    var contrastRange = document.getElementById("contrastRange");
    contrastRange.addEventListener("change", () => {
        var cval = contrastRange.value;
        let sty = cval.toString();
        chrome.tabs.executeScript({
            code: "var config = " + sty + ";"
        }, function() {
            chrome.tabs.executeScript({file: 'contrast.js'});
        });
    })
    
    var fontRange = document.getElementById("fontRange");
    fontRange.addEventListener("change", () => {
        var fval = fontRange.value;
        let si = fval.toString();
        chrome.tabs.executeScript({
            code: "var config = " + si + ";"
        }, function() {
            chrome.tabs.executeScript({file: 'font.js'});
        });
    })
}