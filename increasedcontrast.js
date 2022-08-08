(function () {
    // document.body.style.filter = "invert(0) hue-rotate(0deg)"
    document.querySelector("html").style.filter = "contrast(1.75)";
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "contrast(1)"
    })
})();