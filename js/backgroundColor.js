(function () {
    document.querySelector("html").style.backgroundColor = bconfig;
    document.querySelector("body").style.backgroundColor = bconfig;
    const divcollection = document.getElementsByTagName("div");
    for (let i = 0; i < divcollection.length; i++) {
        divcollection[i].style.background = bconfig;
    }
    const tablecollection = document.getElementsByTagName("table");
    for (let i = 0; i < tablecollection.length; i++) {
        tablecollection[i].style.background = bconfig;
    }
    const licollection = document.getElementsByTagName("li");
    for (let i = 0; i < licollection.length; i++) {
        licollection[i].style.background = bconfig;
    }
})();