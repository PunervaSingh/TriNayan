(function () {
    // document.body.style.filter = "invert(0) hue-rotate(0deg)"
    document.querySelector("html").style.filter = "invert(0)";
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(0)"
    })
    document.querySelector("html").style.backgroundColor = "white";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("html").style.color= "inherit";
    document.querySelector("body").style.color= "inherit";
    document.querySelector("span").style.color= "inherit";
    const collection = document.getElementsByTagName("span");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = "inherit";
    }
    const divcollection = document.getElementsByTagName("div");
    for (let i = 0; i < divcollection.length; i++) {
        divcollection[i].style.color = "inherit";
        divcollection[i].style.background = "white";
    }
    const h1collection = document.getElementsByTagName("h1");
    for (let i = 0; i < h1collection.length; i++) {
        h1collection[i].style.color = "inherit";
    }
    const h2collection = document.getElementsByTagName("h2");
    for (let i = 0; i < h2collection.length; i++) {
        h2collection[i].style.color = "inherit";
    }
    const h3collection = document.getElementsByTagName("h3");
    for (let i = 0; i < h3collection.length; i++) {
        h3collection[i].style.color = "inherit";
    }
    const pcollection = document.getElementsByTagName("p");
    for (let i = 0; i < pcollection.length; i++) {
        pcollection[i].style.color = "inherit";
    }
    const acollection = document.getElementsByTagName("a");
    for (let i = 0; i < acollection.length; i++) {
        acollection[i].style.color = "#0645ad";
    }
    const tablecollection = document.getElementsByTagName("table");
    for (let i = 0; i < tablecollection.length; i++) {
        tablecollection[i].style.color = "inherit";
        tablecollection[i].style.background = "white";
    }
    const licollection = document.getElementsByTagName("li");
    for (let i = 0; i < licollection.length; i++) {
        licollection[i].style.background = "white";
    }
    document.querySelector("html").style.filter = "grayscale(1) invert(1.75)";
    let Newmedia = document.querySelectorAll("img, picture, video");
    Newmedia.forEach((mediaItem) => {
        mediaItem.style.filter = "grayscale(1) invert(1)"
    })
})();