{
    const button = document.querySelector(".selfThemeButton");
    const circle = document.querySelector(".selfCircle")
    let buttonOn = false;
    button.addEventListener("click", () => {
        if (!buttonOn) {
            buttonOn = true;

            button.style.animation = "transformToBlue 0.5s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleRight 0.5s ease-in-out 0s forwards"
            document.querySelector("body").style.filter = "invert(1) hue-rotate(180deg)";
            // document.body.style.filter = "invert(1) hue-rotate(180deg)"
            let media = document.querySelectorAll("img, picture, video");
            media.forEach((mediaItem) => {
                mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
            })
        }
        else {
            buttonOn = false;
            button.style.animation = "transformToYellow 0.5s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleLeft 0.5s ease-in-out 0s forwards"
            document.querySelector("body").style.filter = "invert(0) hue-rotate(0deg)";
            let media = document.querySelectorAll("img, picture, video");
            media.forEach((mediaItem) => {
                mediaItem.style.filter = "invert(0) hue-rotate(0deg)"
            })
        }
    })

    const increaseBtn = document.querySelector(".increasebtn");
    const decreaseBtn = document.querySelector(".decreasebtn");
    increaseBtn.addEventListener("click", () => {
        document.querySelector("body").style.fontSize= "15px";
        // document.getElementsByTagName("p").style.fontSize= "";
    })
    decreaseBtn.addEventListener("click", () => {
        document.querySelector("body").style.fontSize= "12px";
    })
}