import React from 'react';
import {useSelector} from "react-redux";

import "./currentWeatherPageContent.css";

const CurrentWeatherPageContent = () => {

    const {current} = useSelector(state => state.weather);
    const icon = current?.weather?.map(item => item.icon)
    const weather = current?.weather?.map(item => item.main)

    return (
        <div className="contentContainer">
            <div className="titleDiv">
                <div className="cityName">{current?.name}</div>
                <div className="weatherIcon"><img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/></div>
            </div>
            <div className="weather">{weather}</div>
            <div className="mainTemp">{Math.floor(current?.main?.temp)} °C</div>
            <div className="minMaxTemp">
                <div>Min {Math.floor(current?.main?.temp_min)} °C</div>
                <div>Max {Math.floor(current?.main?.temp_max)} °C</div>
            </div>
            <div className="pressureContainer">
                <div>Pressure {current?.main?.pressure}</div>
                <div>Wind Speed {current?.wind?.speed}</div>
            </div>
        </div>
    );
};

export default CurrentWeatherPageContent;