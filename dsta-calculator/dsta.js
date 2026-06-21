const cascadeExitMinsInput = document.getElementById("cascadeExitTimeMins");
const cascadeExitSecsInput = document.getElementById("cascadeExitTimeSecs");

const calculateBtn = document.getElementById("calculateBtn");
const errorText = document.getElementById("errorText");
const calcResultDiv = document.getElementById("calcResult");
const offsetText = document.getElementById("offsetResultText");
const clockText = document.getElementById("clockResultText");

let consoleType;
let route;
let cascadeExitMins;
let cascadeExitSecs;


// presence check on time input fields
function isEmpty(str) {
    return !str.trim().length;
}


// calculate offset
function calculateOffset(consoleType, route, mins, secs){
    let cascadeExit = (mins * 60) + secs;

    let exitTime;
    let offset;
    let clock;

    let earliestGrowTime;

    if(consoleType == 1){
        if(route == "regular"){
            exitTime = 77;
        }
        else if(route == "reverse"){
            exitTime = 64;
        }
    }
    else if(consoleType == 2){
        if(route == "regular"){
            exitTime = 72;
        }
        else if(route == "reverse"){
            exitTime = 59;
        }
    }

    earliestGrowTime = cascadeExit + exitTime;
    clock = 60 - (Math.floor(earliestGrowTime / 60)) - 1; // div
    offset = 60 - (earliestGrowTime % 60);

    offset = offset.toFixed(2);
    clock = Math.round(clock);
    
    return [offset, clock];
}


// display offset
calculateBtn.addEventListener("click", () => {

    formIsValid = true;

    try {
        consoleType = document.querySelector('input[type=radio][name=console]:checked').value;
        route = document.querySelector('input[type=radio][name=route]:checked').value;
    } catch {
        errorText.style.display = "block";
        formIsValid = false;
    }
    
    try {
        cascadeExitMins = Number(cascadeExitMinsInput.value);
        cascadeExitSecs = Number(cascadeExitSecsInput.value);
    } catch {
        errorText.style.display = "block";
        formIsValid = false;
    }

    if(isEmpty(cascadeExitMinsInput.value) || isEmpty(cascadeExitSecsInput.value)){
        errorText.style.display = "block";
        formIsValid = false;
    }


    if(formIsValid){
        let offset;
        let clock;

        let offsetResults = calculateOffset(consoleType, route, cascadeExitMins, cascadeExitSecs);
        offset = offsetResults[0];
        clock = offsetResults[1];
        
        offsetText.innerHTML = `Use an offset of <u>-${offset}</u>`;
        clockText.innerHTML = `With the clock set at <u>:${clock}</u>`;

        calcResultDiv.style.display = "block";
    }
})