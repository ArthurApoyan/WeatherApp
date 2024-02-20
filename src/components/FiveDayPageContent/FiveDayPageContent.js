import React, {useRef} from 'react';
import {useSelector} from "react-redux";

import "./fiveDayPageContent.css";


const FiveDayPageContent = () => {

    const {fiveDays} = useSelector(state => state.weather)
    const scrollableDivRef = useRef(null);

    const handleWheelScroll = (event) => {
        if (event.deltaY !== 0) {
            scrollableDivRef.current.scrollLeft += event.deltaY;
            event.preventDefault();
        }
    }

    return (
        <div className="fiveDayContentContainer">
            <h2>{fiveDays?.city?.name}</h2>
            <div className="allDaysContainer" ref={scrollableDivRef} onWheel={handleWheelScroll}>
                {
                    fiveDays?.list?.map((item) => {
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