import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectGetWeather} from "../../store/slices/getWeatherSlice/getWeatherSlice";
import {fetchGetWeather} from "../../store/slices/getWeatherSlice/getWeatherApi";
import {resetInput, selectHeaderInputValue} from "../../store/slices/headerInputSlice/headerInputSlice";

import "./currentWeatherPageContent.css";

const CurrentWeatherPageContent = () => {

    const dispatch = useDispatch();
    const inputValue = useSelector(selectHeaderInputValue)
    const getWeather = useSelector(selectGetWeather);
    const current = getWeather?.current
    const icon = current?.weather?.map(item => item.icon)
    const weather = current?.weather?.map(item => item.main)

    console.log(getWeather)

    useEffect(() => {
        dispatch(fetchGetWeather(inputValue))
        dispatch(resetInput())
    }, [])

    //xndir ka

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