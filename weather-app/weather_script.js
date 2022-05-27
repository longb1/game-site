const forecastContainer=document.getElementById("forecast")
const submitFormBtn=document.querySelector('[data-submit-btn]')
submitFormBtn.addEventListener('click',submitForm);

function submitForm(e){ //Take form inputs
    e.preventDefault();
    const forecastLocation = document.querySelector("[data-location]").value
    const forecastUnit= document.querySelector("[data-unit]").value
    document.forms[0].reset(); //wipe form inputs
    getWeather(forecastLocation, forecastUnit)
}


async function getWeather(location, unit){
    try{
        forecastContainer.innerHTML='loading...';

        const weatherAPI = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&APPID=a5d36dfa6b83adaf401640da392db25c`, {mode: 'cors'})
        const weatherData= await weatherAPI.json();
        const temperature=weatherData.main.temp
        forecastContainer.textContent=`The temperature is ${weatherData.main.temp} ${unit}`;

    }catch(error){
        forecastContainer.textContent='Please enter a valid location!';
        throw new Error(error);
    }
    
}