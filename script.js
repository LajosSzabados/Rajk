function $(id) {
    return document.getElementById(id)
};

let first = $("MainType");
let json = JSON.parse('{'+'data.json'+'}');

function inic() {
    first.innerHTML = fromJSON(null);
}

function fromJSON(value) {

    let string = "";
    if (value === null) {
        for (let x in json) {
            string += "<option value=" + x + ">" + x + "</option>";
            return string;
        }
    }

    return null;
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