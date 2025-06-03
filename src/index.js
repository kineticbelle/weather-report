"use strict";

let currentTemp = 57;
const tempNumber = document.getElementById("temp-number");
const landscapeImg = document.getElementById("landscape-img");

document.getElementById("increase-temp").addEventListener('click',()=>{
    currentTemp += 1;
    tempNumber.textContent = currentTemp;
    changeTempColor();
})

document.getElementById("decrease-temp").addEventListener('click',()=>{
    currentTemp -= 1;
    tempNumber.textContent = currentTemp;
    changeTempColor();
})


const changeTempColor = () => {
    if (currentTemp >=80) {
        tempNumber.style.color = 'red';
        // landscapeImg.src = 
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
