"use strict";

let currentTemp = 57;
const tempNumber = document.getElementById('temp-number');
const landscapeImg = document.getElementById('landscape-img');

document.getElementById('increase-temp').addEventListener('click',()=>{
    currentTemp += 1;
    tempNumber.textContent = currentTemp;
    changeTempColor();
})

document.getElementById('decrease-temp').addEventListener('click',()=>{
    currentTemp -= 1;
    tempNumber.textContent = currentTemp;
    changeTempColor();
})


const changeTempColor = () => {
    if (currentTemp >=80) {
        tempNumber.style.color = 'red';
        landscapeImg.src = 'assets/Very hot 2.jpeg';
    } else if (currentTemp >= 70) {
        tempNumber.style.color = 'orange';
        landscapeImg.src = 'assets/Humid.jpeg';
    } else if (currentTemp >= 60) {
        tempNumber.style.color = 'yellow';
        landscapeImg.src = 'assets/perfect 2.jpg';
    } else if (currentTemp >= 50) {
        tempNumber.style.color ='green';
        landscapeImg.src = 'assets/cool .jpeg';
    } else {
        tempNumber.style.color = 'teal';
        landscapeImg.src = 'assets/Very Cold.jpg';
    }
}

const currentCity = document.getElementById('current-city');
const updateCurrentCity = document.getElementById('city-name');

updateCurrentCity.addEventListener('input',()=>{
    currentCity.textContent = updateCurrentCity.value;
})
