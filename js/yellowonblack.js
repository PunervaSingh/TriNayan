(function () {
    document.querySelector("html").style.filter = "invert(0)";
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(0)"
    })
    document.querySelector("html").style.backgroundColor = "black";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("html").style.color= "yellow";
    document.querySelector("body").style.color= "yellow";
    document.querySelector("span").style.color= "yellow";
    const collection = document.getElementsByTagName("span");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = "yellow";
    }
    const divcollection = document.getElementsByTagName("div");
    for (let i = 0; i < divcollection.length; i++) {
        divcollection[i].style.color = "yellow";
        divcollection[i].style.background = "black";
    }
    const h1collection = document.getElementsByTagName("h1");
    for (let i = 0; i < h1collection.length; i++) {
        h1collection[i].style.color = "yellow";
    }
    const h2collection = document.getElementsByTagName("h2");
    for (let i = 0; i < h2collection.length; i++) {
        h2collection[i].style.color = "yellow";
    }
    const h3collection = document.getElementsByTagName("h3");
    for (let i = 0; i < h3collection.length; i++) {
        h3collection[i].style.color = "yellow";
    }
    const pcollection = document.getElementsByTagName("p");
    for (let i = 0; i < pcollection.length; i++) {
        pcollection[i].style.color = "yellow";
    }
    const acollection = document.getElementsByTagName("a");
    for (let i = 0; i < acollection.length; i++) {
        acollection[i].style.color = "white";
    }
    const tablecollection = document.getElementsByTagName("table");
    for (let i = 0; i < tablecollection.length; i++) {
        tablecollection[i].style.color = "yellow";
        tablecollection[i].style.background = "black";
    }
    const licollection = document.getElementsByTagName("li");
    for (let i = 0; i < licollection.length; i++) {
        licollection[i].style.background = "black";
    }
})();