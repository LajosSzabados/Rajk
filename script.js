function $(id) {
    return document.getElementById(id)
};

let first = $("MainType");


function inic() {
    first.innerHTML = fromJSON(null);
}

function loadJSON(file, callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}


function toFromJSON() {
    var string = "";
    loadJSON("data.json", function (response) {

        var json = JSON.parse(response);
        first.innerHTML ="";
        for (let x in json[0]) {
            first.innerHTML+="<option value=" + x + ">" + x + "</option> \n";
            string += "<option value=" + x + ">" + x + "</option> \n";

        }

    });
    return string;
}

function fromJSON(value) {
    var string = "";
    if(value===null){
        string=toFromJSON();
    }
    return string;

}

let list = $("form");
first = $("MainType");
let sec = $("SecType");
let third = $("ThirdType");

function listAutoUpdate() {
    if (first.value !== "") {
        sec.innerHTML = fromJSON(first.value);
        if (sec.value !== "") {
            third.innerHTML = fromJSON(sec.value);
        }
    }

    window.requestAnimationFrame(listAutoUpdate);
}
addEventListener("load", inic);