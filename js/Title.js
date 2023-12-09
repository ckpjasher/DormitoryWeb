var s = "欢迎来到G1-241宿舍网站";
var i = 0;
var divObj;
var display = false;
function titleInit() {
    i=0;
    if (i == 0) {
        divObj = document.getElementById("title");
        setInterval("show()", 200);
    }
}

function show() {
    if (i <= s.length)
        divObj.innerHTML = s.slice(0, i++) + "_";
    if (i > s.length) {
        if (display) {
            divObj.innerHTML = s.slice(0, i) + "_";
            display = false;
        } else {
            divObj.innerHTML = s.slice(0, i);
            display = true;
        }
    }
}
