import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {selectGetWeather} from "../../store/slices/getWeatherSlice/getWeatherSlice";
import {fetchGetWeather} from "../../store/slices/getWeatherSlice/getWeatherApi";
import {resetInput, selectHeaderInputValue} from "../../store/slices/headerInputSlice/headerInputSlice";

import "./fiveDayPageContent.css";


const FiveDayPageContent = () => {

    const dispatch = useDispatch()
    const inputValue = useSelector(selectHeaderInputValue)
    const getWeather = useSelector(selectGetWeather)
    const fiveDayForecast = getWeather.fiveDays

    useEffect(() => {
        dispatch(fetchGetWeather(inputValue))
        dispatch(resetInput())
    }, [])

    return (
        <div className="fiveDayContentContainer">
            <h2>{fiveDayForecast?.city?.name}</h2>
            <div className="allDaysContainer">
                {
                    fiveDayForecast?.list?.map((item) => {
                        return (
                            <div key={item.dt} className="oneDayDiv">
                                <p>{item.dt_txt}</p>
                                <div className="dayTitle">
                                    <div>{item.weather[0].main}</div>
                                    <div><img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="icon"/></div>
                                </div>
                                <div className="fiveDayMainTemp">{Math.floor(item.main.temp)} °C</div>
                                <div>
                                    <div>Min {Math.floor(item.main.temp_min)} °C</div>
                                    <div>Max {Math.floor(item.main.temp_max)} °C</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FiveDayPageContent;