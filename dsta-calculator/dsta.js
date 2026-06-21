const cascadeExitMinsInput = document.getElementById("cascadeExitTimeMins");
const cascadeExitSecsInput = document.getElementById("cascadeExitTimeSecs");

const calculateBtn = document.getElementById("calculateBtn");
const errorText = document.getElementById("errorText");
const calcResultDiv = document.getElementById("calcResult");
const minOffsetText = document.getElementById("minOffsetResultText");
const minClockText = document.getElementById("minClockResultText");
const maxOffsetText = document.getElementById("maxOffsetResultText");
const maxClockText = document.getElementById("maxClockResultText");

let consoleType;
let route;
let cascadeExitMins;
let cascadeExitSecs;


// presence check on time input fields
function isEmpty(str) {
    return !str.trim().length;
}


// calculate offset
function calculateOffset(consoleType, route, mins, secs, offsetType){
    let cascadeExit = (mins * 60) + secs;

    let exitTime;
    let offset;
    let clock;

    let earliestGrowTime;


    // adjust for min or max offset
    if(offsetType == "min"){
        offsetType = 0;
    }
    else if(offsetType == "max"){
        offsetType = 1;
    }

    if(consoleType == 1){
        if(route == "regular"){
            exitTime = 77 - (27 * offsetType);
        }
        else if(route == "reverse"){
            exitTime = 64 - (14 * offsetType);
        }
    }
    else if(consoleType == 2){
        if(route == "regular"){
            exitTime = 72 - (25 * offsetType);
        }
        else if(route == "reverse"){
            exitTime = 59 - (12 * offsetType);
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

        let minOffsetResults = calculateOffset(consoleType, route, cascadeExitMins, cascadeExitSecs, "min");
        offset = minOffsetResults[0];
        clock = minOffsetResults[1];
        
        minOffsetText.innerHTML = `Use an offset of <u>-${offset}</u>`;
        minClockText.innerHTML = `With the clock set at <u>:${clock}</u>`;

        let maxOffsetResults = calculateOffset(consoleType, route, cascadeExitMins, cascadeExitSecs, "max");
        offset = maxOffsetResults[0];
        clock = maxOffsetResults[1];
        
        maxOffsetText.innerHTML = `Use an offset of <u>-${offset}</u>`;
        maxClockText.innerHTML = `With the clock set at <u>:${clock}</u>`;

        calcResultDiv.style.display = "block";
    }
})