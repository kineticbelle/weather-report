//Wave 1
"use strict";

//Wave 2
let currentTemp = 0;
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
        tempNumber.style.color = 'blue';
        landscapeImg.src = 'assets/perfect 2.jpg';
    } else if (currentTemp >= 50) {
        tempNumber.style.color ='green';
        landscapeImg.src = 'assets/cool .jpeg';
    } else {
        tempNumber.style.color = 'teal';
        landscapeImg.src = 'assets/Very Cold.jpg';
    }
}

//Wave 3 & 4
const currentCity = document.getElementById('current-city');
const cityName = document.getElementById('city-name');
const cityButton = document.getElementById('city-button');

cityButton.addEventListener('click',()=>{
    currentCity.textContent = cityName.value;
    getCityRealTimeTemp(cityName.value);
})

//Wave 4
//http://127.0.0.1:5000/weather?lat=47.6038321&lon=-122.330062
//http://127.0.0.1:5000/location?q=Seattle

const realtimeTemperature = document.getElementById('realtime-temperature');
const kelvinToFahrenheit = (k) => Math.round((k - 273.15) * 9/5 + 32);
const getCityRealTimeTemp = (city) => {
    axios
        .get('http://127.0.0.1:5000/location', {
            params: {
                q: city, 
            },
        })

        .then((response) => {
            const firstResponse = response.data[0]; 

            const lat = firstResponse.lat;
            const lon = firstResponse.lon;

            // console.log(`lat = ${lat}`)
            // console.log(`lon = ${lon}`)

            return axios.get('http://127.0.0.1:5000/weather', {
                params: {
                    lat: lat,
                    lon: lon,
                    // units: 'imperial',
                },
            });
        })

        .then((response) => {
            const cityTemp = kelvinToFahrenheit(response.data.main.temp); 
            //console.log(`temp = ${cityTemp}`)
            currentTemp = cityTemp;
            tempNumber.textContent = cityTemp;
            changeTempColor();
        })

        .catch((error) => {
            console.log('error!', error.response.data);
        });
}

realtimeTemperature.addEventListener('click',()=>{
    getCityRealTimeTemp(currentCity.textContent);
})

//Wave 5
const skySelect = document.getElementById('sky-select');
const skyEmoji = document.getElementById('sky-emoji');

skySelect.addEventListener("change", (event) => {
    if(event.target.value == 'Sunny'){skyEmoji.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';}
    else if(event.target.value == 'Cloudy'){skyEmoji.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';}
    else if (event.target.value == 'Rainy'){skyEmoji.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';}
    else {skyEmoji.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';}
});

//Wave 6
const resetCity = document.getElementById('reset-city');

resetCity.addEventListener('click', () => {
    currentCity.textContent = 'Seattle';
    cityName.value = ''; 
    getCityRealTimeTemp('Seattle');
});


//set default temp to Seattle's temp
getCityRealTimeTemp('Seattle');