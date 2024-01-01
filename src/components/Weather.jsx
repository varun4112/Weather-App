import { useState } from 'react'
import React from 'react'
import './weather.css'

function Weather() {
  const [temp,setTemp]=useState(0);
  const [humidity,setHumidity]=useState(0);
  const [wind,setWind]=useState(0);
  const [location,setLocation]=useState("Select Your City")
  const [icon,setIcon]=useState("/Assets/01d.png")
  let api_key="d757173066345d0cc1b70fa2d4131f7d";

  const search= async ()=>{
    let element=document.getElementsByClassName("cityInput");
    console.log(element[0].value);
    if(element[0].value===""){
      return 0; 
    }
    else{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`
    
    console.log(url);
    let response=await fetch(url)
    let data=await response.json()
    // let humi=document.getElementsByClassName("wind-rate");
    // let wind=document.getElementsByClassName("humidity-rate");
    // // let temp=document.getElementsByClassName("weather-temp");
    // let location=document.getElementsByClassName("weather-location");
    
    setHumidity(data.main.humidity)
    setWind(data.wind.speed)
    setTemp(data.main.temp)
    setLocation(data.name);
    setIcon(`Assets/${data.weather[0].icon}.png`)
    }
  }


  return (

    <div className='container'>
        <div className="top-bar">
          <form action="">
          <input type="text" className='cityInput'
            placeholder='Search Your City' />
            <button className='btn btn-dark' type='reset' onClick={()=>{search()}}> <i className="fa-solid fa-magnifying-glass"></i></button>
          </form>
            
        </div>
        <div className="weather-image">
        <img src={icon} alt="Coudy Sunny" />

        </div>
        <div className="weather-temp">
          <h1>{Math.floor(temp)}°C</h1>
        </div>
        <div className="weather-location"><h2>{location}</h2></div>
        <div className="element">
        <div className="wind-speed">
          <img src="/Assets/wind_icon.png" alt="" />
          <p><b>Wind Speed</b></p>
          <p className='wind-rate'>{wind}Kmph</p>
        </div>
        <div className='humidity'>
          <img src="/Assets/humidity_icon.png" alt="" />
          <p><b>Humidity</b></p>
          <p className='humidity-rate'>{humidity}%</p>
        </div>
        </div>
        
    </div>
  )
}

export default Weather