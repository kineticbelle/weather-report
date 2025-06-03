"use strict";

let currentTemp = 57;
const tempNumber = document.getElementById("temp-number");

document.getElementById("increase-temp").addEventListener('click',()=>{
    currentTemp += 1;
    changeTempDisplay();
})

document.getElementById("decrease-temp").addEventListener('click',()=>{
    currentTemp -= 1;
    changeTempDisplay();
})


const changeTempDisplay = () => {
    tempNumber.textContent = currentTemp;
    if (currentTemp >=80) {
        tempNumber.style.color = 'red';
    } else if (currentTemp >= 70) {
        tempNumber.style.color = 'orange';
    } else if (currentTemp >= 60) {
        tempNumber.style.color = 'yellow';
    } else if (currentTemp >= 50) {
        tempNumber.style.color ='green';
    } else {
        tempNumber.style.color = 'teal';
    }
}
