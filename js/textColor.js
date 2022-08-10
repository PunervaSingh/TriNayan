(function () {
    document.querySelector("html").style.color= bconfig;
    document.querySelector("body").style.color= bconfig;
    document.querySelector("span").style.color= bconfig;
    const collection = document.getElementsByTagName("span");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = bconfig;
    }
    const divcollection = document.getElementsByTagName("div");
    for (let i = 0; i < divcollection.length; i++) {
        divcollection[i].style.color = bconfig;
    }
    const h1collection = document.getElementsByTagName("h1");
    for (let i = 0; i < h1collection.length; i++) {
        h1collection[i].style.color = bconfig;
    }
    const h2collection = document.getElementsByTagName("h2");
    for (let i = 0; i < h2collection.length; i++) {
        h2collection[i].style.color = bconfig;
    }
    const h3collection = document.getElementsByTagName("h3");
    for (let i = 0; i < h3collection.length; i++) {
        h3collection[i].style.color = bconfig;
    }
    const pcollection = document.getElementsByTagName("p");
    for (let i = 0; i < pcollection.length; i++) {
        pcollection[i].style.color = bconfig;
    }
    const acollection = document.getElementsByTagName("a");
    for (let i = 0; i < acollection.length; i++) {
        acollection[i].style.color = bconfig;
    }
    const tablecollection = document.getElementsByTagName("table");
    for (let i = 0; i < tablecollection.length; i++) {
        tablecollection[i].style.color = bconfig;
    }
})();