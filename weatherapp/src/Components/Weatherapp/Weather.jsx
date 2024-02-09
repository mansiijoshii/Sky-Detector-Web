  import React, { useState } from "react";
  import './Weatherapp.css';

  import rain_icon from '../Assets/rain.png';
  import cloudy_icon from '../Assets/cloudy.png';
  import wind_icon from '../Assets/wind.png';
  import drizzle_icon from '../Assets/drizzle.png';
  import search_icon from '../Assets/searchi.png';
  import sunny_icon from '../Assets/sunny.png';
  import humidity_icon from '../Assets/humidity.png';
  

   const Weatherapp=()=> {

    let api_key="dfece7431082ca06d78b6ee024a06608";

    const[wicon,seticon]=useState(cloudy_icon);
    const search =async()=>{
      const element=document.getElementsByClassName("cityinput");
      if(element[0].value==="")
      {
        return 0;
      }
       let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

       let response=await fetch(url);
       let data=await response.json();
       const humidity=document.getElementsByClassName("humidity_percent");
       const windspeed=document.getElementsByClassName("wind_speed");
       const temperature=document.getElementsByClassName("temp");
       const location=document.getElementsByClassName("place");

       humidity[0].innerHTML=data.main.humidity; 
       windspeed[0].innerHTML=data.wind.speed;
       temperature[0].innerHTML=data.main.temp;
       location[0].innerHTML=data.name;

       if(data.weather[0].icon==='01d' || data.weather[0].icon==='01n')
       {
        seticon(sunny_icon);
       }
       else if(data.weather[0].icon==='09d' || data.weather[0].icon==='09n' || data.weather[0].icon==='10n' || data.weather[0].icon==='10d')
       {
        seticon(drizzle_icon);
       }
       else if(data.weather[0].icon==='11d' || data.weather[0].icon==='11n')
       {
        seticon(rain_icon);
       }
       else if(data.weather[0].icon==='02n' || data.weather[0].icon==='02d'|| data.weather[0].icon==='03n' || data.weather[0].icon==='03d' || data.weather[0].icon==='04n' || data.weather[0].icon==='04d')
       {
        seticon(cloudy_icon);
       }
    }
    return (
       <>
        <div className="container">
          <div className="topbar">
          <input type="text"className="cityinput" placeholder="search"></input>
            <div className="searchicon" onClick={()=>{search()}}>
            <img src={search_icon} alt="search"/>
            </div>
          </div>
          <div className="weatherimg">
            <img src={wicon} alt="img" />
          </div>
          <div className="temp">24C</div>
          <div className="place">INDIA</div>
          <div className="data_container">
            <div className="elements">
              <img src={humidity_icon} alt="himg" />
              <div className="data">
                <div className="humidity_percent">16%</div>
                <div className="text">Humidity</div>
              </div>
            </div>
            <div className="elements">
              <img src={wind_icon} alt="wimg" />
              <div className="data">
                <div className="wind_speed">16 km/hr</div>
                <div className="text">Wind speed</div>
              </div>
            </div>
          </div>
        </div>
        </>
    );
  }
  
  export default Weatherapp;