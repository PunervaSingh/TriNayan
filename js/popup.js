if (document.querySelector(".popup")) {
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle")
    let buttonOn = false;
    // function invert() {
    //     document.body.style.filter = "invert(1) hue-rotate(180deg)";
    //     let media = document.querySelectorAll("img, picture, video");
    //     media.forEach((mediaItem) => {
    //         mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
    //     })
    // }
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

}