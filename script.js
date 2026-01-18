const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

const apikey="8bea980a4e44ca84357b5df7ec66bae9";

async function checkweather(city){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const response= await fetch(url);  
     if(response.status == 404){
 error.style.display="block";
  weather.style.display="none";
     }
     else{
let data= await response.json();
    console.log(data);
    cityName.innerHTML=data.name;
    temperature.innerHTML=Math.round(data.main.temp)+"°C";
    humidity.innerHTML=data.main.humidity+"%";
    wind.innerHTML=(data.wind.speed*3.6).toFixed(1)+"Km/hr";
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/cloudy.png";
    }
    else if(data.weather[0].main=="Clear"){
         weatherIcon.src="images/sun.png";
    }
    else if(data.weather[0].main=="Rain"){
         weatherIcon.src="images/rainy-day.png";
    }
     else if(data.weather[0].main=="Mist"){
         weatherIcon.src="images/overcast_12276595.png";
    }
     else{
         weatherIcon.src="images/drizzle.png"
    }
    weather.style.display="block";
     }
    
}    
searchBtn.addEventListener("click",()=>{
checkweather(searchBox.value);

});
