var default_color = "#b5b5b5"
var colors = ["#ea4335", "#fbbc05", "#4285f4", "#34a853"];
var times = 20;
var delay = 75;

function reset() {
    for (var i = 1; i <= 3; i++) {
        for (var j = 1; j <= 4; j++) {
            var mId = "c" + i + "_" + j;
            document.getElementById(mId).style.backgroundColor = default_color;
        }
    }
}

function drawLots(id) {
    for (let i = 0; i < times; i++) {
        window.setTimeout(function () {
            for (var k = 4; k > 0; k--) {
                if (i != times - 1)
                    document.getElementById("c" + id + "_" + k).style.backgroundColor = colors[(i - k + 2) % 4];
                else
                    document.getElementById("c" + id + "_" + k).style.backgroundColor = colors[Math.floor(Math.random() * 4)];
            }
        }, delay * i);
    }
}