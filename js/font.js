(function () {
    // document.querySelector("html").style.fontSize = config;
    document.querySelector("html").style.fontSize= "" + config + "px";
    document.querySelector("body").style.fontSize= "" + config + "px";
    document.querySelector("span").style.fontSize= "" + config + "px";
    const collection = document.getElementsByTagName("span");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.fontSize = "" + config + "px";
    }
    const divcollection = document.getElementsByTagName("div");
    for (let i = 0; i < divcollection.length; i++) {
        divcollection[i].style.fontSize = "" + config + "px";
    }
    const h3collection = document.getElementsByTagName("h3");
    for (let i = 0; i < h3collection.length; i++) {
        h3collection[i].style.fontSize = "" + config + "px";
    }
    const pcollection = document.getElementsByTagName("p");
    for (let i = 0; i < pcollection.length; i++) {
        pcollection[i].style.fontSize = "" + config + "px";
    }
})();