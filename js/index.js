var default_color = "#b5b5b5"
var flash_color = "#ffffff"
var colors = ["#ea4335", "#fbbc05", "#4285f4", "#34a853"];
var times = 20;
var times_spin = 20;
var delay_spin = 75;
var times_flash = 3;
var delay_flash = 250;
var score = 0;
var colorStatus = [[null, null, null, null], [null, null, null, null], [null, null, null, null]];
var autoEnable = false;

function reset() {
    autoEnable = false;
    score = 0;
    document.getElementById('s').innerText = score;
    document.getElementById('b_auto').innerText = 'Auto';
    for (var i = 1; i <= 3; i++) {
        for (var j = 1; j <= 4; j++) {
            colorStatus[i - 1][j - 1] = -1;
            var mId = "c" + i + "_" + j;
            document.getElementById(mId).style.backgroundColor = default_color;
        }
    }
}

function single(id) {
    var p = Math.floor(Math.random() * 4);
    colorStatus[id - 1][p] = Math.floor(Math.random() * 4);
    animation_spin(id);
    animation_flash(id, p + 1);
}

function auto() {
    if (autoEnable) {
        score++;
        document.getElementById('s').innerText = score;
    } else {
        reset();
        document.getElementById('b_auto').innerText = 'Next';
        autoEnable = true;
    }
    for (var i = 1; i <= 3; i++)
        single(i);
}

function animation_spin(id) {
    for (let i = 0; i < times_spin; i++) {
        window.setTimeout(function () {
            for (var k = 4; k > 0; k--) {
                if (i != times_spin - 1)
                    document.getElementById("c" + id + "_" + k).style.backgroundColor = colors[(i - k + 2) % 4];
                else
                    document.getElementById("c" + id + "_" + k).style.backgroundColor = colors[colorStatus[id - 1][k - 1]] ?? default_color;
            }
        }, delay_spin * i);
    }
}

function animation_flash(id, position) {
    window.setTimeout(function () {
        for (let i = 0; i < times_flash * 2; i++) {
            window.setTimeout(function () {
                if (i % 2 == 0)
                    document.getElementById("c" + id + "_" + position).style.backgroundColor = flash_color;
                else
                    document.getElementById("c" + id + "_" + position).style.backgroundColor = colors[colorStatus[id - 1][position - 1]] ?? default_color;
            }, delay_flash / 2 * i);
        }
    }, delay_spin * times_spin);
}