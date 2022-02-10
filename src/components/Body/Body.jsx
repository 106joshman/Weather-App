import React, { useState } from "react";
import axios from "axios";

const Body = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});

  const api = {
    base: "https://api.openweathermap.org/data/2.5/",
    key: "9ad0b189287d876d57d8ecf0fb0c07ed",
  };

  
    const search = (evt) => {
      if (evt.key ==="Enter"){
        axios
        .get(`${api.base}weather?q=${location}&units=metric&appid=${api.key}`)
        .then((res) => {
          setWeather(res.data)
          setLocation('')
          console.log(res.data);
        })
        .catch((err) => {
          setWeather(err)
        })
      }
    };
    const dateWork = (d) => {
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
      let days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date}, ${month} ${year}`;
      // return ( day + date + "," + month + year )
    };

    // show time
    let time = new Date();
    let hour = time.getHours();
    if(hour < 10) {
      hour = "0" + hour
    }
    let mins = time.getMinutes();
    if(mins < 10) {
      mins = "0" + mins
    }
    time = (hour + ":" + mins);

    let icon = "http://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png";

  return (
    <main className="">
      {/* header search box */}
      <div className="header">
        <div className="search-box">
          <input 
            type="text" 
            name="search-box" 
            className="Search"
            value={location}
            onKeyPress={search}
            onChange={(e) => setLocation(e.target.value)}
            id="search-box" 
            placeholder="Enter city or location..."
          />
        </div>
      </div>
      {(typeof weather.main != "undefined") ? (
        <div>
          <div className="weather-display">
            {/* time & date display */}
            <div className="wrapper">
              {/* location */}
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              {/* Exact date  */}
              <div className="date">
                {dateWork(new Date())}
              </div>
              {/* Exact time */}
              <div className="time">
                {time}
              </div>
            </div>
            <div className="temps">
              {/* weather report */}
              <div className="degree">
                {Math.round(weather.main.temp)}°C
              </div>
              {/* weather image */}
              <div className="icon">
                <img src={icon} alt="weather icon" srcset="" />
              </div>
              {/* cloudy state */}
              <div className="mood">
                {weather.weather[0].description}
              </div>
            </div>
            {/*  temperature statistics */}
            <div className="temp">
              <div className="high">
                {weather.main.temp_max}°
                <p className="">Temp high</p>
              </div>
              <div className="low">
                {weather.main.temp_min}°
                <p className="">Temp low</p>
              </div>
              <div className="wind">
                {Math.round(weather.wind.speed)}mph
                <p className="">Wind speed</p>
              </div>
              <div className="humidity">
                {weather.main.humidity}%
                <p className="">humidity</p>
              </div>
            </div>
        </div>
      </div>
      ) : (
        <div className="weather-display">
          {/* time & date display */}
          <div className="wrapper">
            {/* location */}
            <div className="location">
              Lagos, Ng
            </div>
            {/* Exact date  */}
            <div className="date">
              {dateWork(new Date())}
            </div>
            {/* Exact time */}
            <div className="time">
              {time}
            </div>
          </div>
          <div className="display">
            <div className="temps">
              {/* weather report */}
              <div className="degree">
                27°C
              </div>
              {/* cloudy state */}
              <div className="mood">
                Sunny day &#9787;
              </div>
            </div>
            {/*  temperature statistics */}
            <div className="temp">
              <div className="high">
                37°C
              </div>
              <div className="lows">
                18°C
              </div>
              <div className="wind">
                5mph
              </div>
              <div className="humidity">
                6%
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Body;
