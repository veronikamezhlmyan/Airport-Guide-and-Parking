'use strict';

function gotopage1() {
    document.getElementById("page1").style = "display: block;"
    document.getElementById("page2").style = "display: none;"
    document.getElementById("page3").style = "display: none;"
}

function gotopage2() {
    document.getElementById("page1").style = "display: none;"
    document.getElementById("page2").style = "display: block;"
    document.getElementById("page3").style = "display: none;"
}

function gotopage3() {
    document.getElementById("page1").style = "display: none;"
    document.getElementById("page2").style = "display: none;"
    document.getElementById("page3").style = "display: block;"
}

let distances = {

    "Gate A": 200,

    "Gate B": 500,

    "Gate C": 1500,

    "Duty Free": 700,
}

function calculatetime() {

    let v = 10

    let selectedCurrentGate = document.getElementById("currentgatebox").value;

    let selectedMiddlePoint = document.getElementById("middlepointbox").value;

    let selectedTargetGate = document.getElementById("targetgatebox").value;

    let currentgateinput = distances[selectedCurrentGate];

    let middlepointinput = 0

    if (selectedMiddlePoint != "") {
        let middlepointinput = distances[selectedMiddlePoint];
    }

    let targetgateinput = distances[selectedTargetGate];

    let calculatetime = (Math.abs(currentgateinput - middlepointinput - targetgateinput)) / v

    document.getElementById("timeleft").innerHTML = calculatetime + " minutes."

    let usertime = document.getElementById("availabletimeinput").value;

    if (usertime > calculatetime) {
        document.getElementById("timeleft").innerHTML += " You have enough time."
    } else {
        document.getElementById("timeleft").innerHTML += " Hurry Up!"
    }
}

function showfloors() {
    let floorOptions = {
        "less_than_15_minutes": -3,
        "1hour": -2,
        "2hours": -1,
        "3hours": 0,
        "more_than_3_hours": 1
    }

    let selectedTimeOption = document.getElementById("parkingtimebox").selectedOptions[0]

    let selectedTime = selectedTimeOption.id

    let yourflooris = floorOptions[selectedTime]

    document.getElementById("availablefloor").innerHTML = yourflooris

}
