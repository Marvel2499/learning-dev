var adView;
const timer = 2000;

window.onload = function () {
    var demo = document.getElementById("demo");
    demo.style.border = "5px solid tomato";
    demo.style.borderRadius = "25px";
    //demo.setAttribute("style","border:5px solid tomato; border-radius: 25px;");

    setupClick();
    runAdview();



    function runAdview() {
        adView = setInterval(setUpInterval, timer);
    }
};

function setupClick() {
    demo.onclick = function () {
        alert("image on click");
    }

    var btn_stop = document.getElementById("btn-stop");
    btn_stop.onclick = function () {
        if (btn_stop.innerHTML == "start") {
            runAdVew();
            adView = setInterval(setUpInterval, timer);
            btn_stop.innerHTML = "stop"
            return;
        }

        var result = confirm("Are you sure you want to stop?")
        if (result == true) {
            alert("Stop Succesfully");
            clearInterval(adView);
            btn_stop.innerHTML = "start"
        }
    }

}

var content = ["android.jpg", "html5.jpg"]; //array สำหรับเปลี่ยนรูปสลับไปมา
const sizeContent = content.length;
var index = 0;

function setUpInterval() {
    demo.src = "images/" + content[index];
    index++;

    if (index >= sizeContent) {
        index = 0;
    }
}