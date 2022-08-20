var response_global = ""

window.addEventListener('DOMContentLoaded', (event) => {

  var url = "fetching url";

  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    url = tabs[0].url

    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://127.0.0.1:5000/read_page");
    xhttp.send("url=" + tabs[0].url);


    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        response_global = this.responseText;


        var obj = JSON.parse(response_global);

        // console.log(obj);

        var key = Object.keys(obj);
        var len = key.length;
        var main_heading = Object.keys(obj)[len - 1];
        document.getElementById("header1").innerHTML = "URL:" + url;

        var web_structure = "Wikipedia page for " + main_heading + " is open. " + "Page consists of " + (len - 2) + " sections. "

        var count = 1;
        for (var key in obj) {
          if (key === 'See also') {
            break
          }
          var app_txt = "Section " + count + " is about '" + key + "' consisting of " + obj[key]['para'].length + " paragraphs and " + obj[key]['images'].length + " images. "
          web_structure += app_txt;
          count++;
        }
        document.getElementById("header2").innerHTML = web_structure;


        var web_content = ""
        
        // Displays section heading and all its paragraphs
        for (var key in obj) {
          if (key === 'See also') {
            break
          }
          web_content += "<h3>" + key + "</h3>";
          if(obj[key]['para'].length > 0) {
            web_content += "<h4>Paragraphs</h4>";
            var para_no = 1;
            for (var para in obj[key]['para']) {
              web_content += "<p>" + para_no + ". ";
              web_content += obj[key]['para'][para] + "</p>";
              para_no++;
            }
          }
          if(obj[key]['images'].length > 0) {
            web_content += "<h4>Images captions</h4>";
            var image_no = 1;
            for (var img in obj[key]['images']) {
              web_content += "<p>" + image_no + ". ";
              web_content += obj[key]['images'][img] + "</p>";
              image_no++;
            }
          }
        }

        // console.log(web_content);

        document.getElementById("mytext").innerHTML = web_content;
        localStorage.setItem("myJson", response_global);
      }
      // localStorage.clear();
    };
  });
  // console.log(response_global)
});