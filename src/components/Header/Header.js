import React from 'react';
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import {Link} from "react-router-dom";
import logo from "../../utils/images/weatherAppLogo_1.png"
import {useDispatch, useSelector} from "react-redux";
import {getInputValue, resetInput, selectHeaderInputValue} from "../../store/slices/headerInputSlice/headerInputSlice";
import {fetchGetWeather} from "../../store/slices/getWeatherSlice/getWeatherApi";

import "./header.css";

const Header = () => {

    const dispatch = useDispatch();
    const inputValue = useSelector(selectHeaderInputValue);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchGetWeather(inputValue))
        dispatch(resetInput())
    }

    return (
        <div>
            <header>
                <Link to="/" className="logoLink"><img src={logo} alt="Logo"/></Link>
                <HeaderNavBar/>
            </header>
            <div className="formContainer">
                <form className="homePageForm" onSubmit={handleSubmit}>
                    <input type="text"
                           value={inputValue}
                           placeholder="Write city name"
                           onChange={(e) => dispatch(getInputValue(e.target.value))}/>
                    <button>Show Weather</button>
                </form>
            </div>
        </div>
    );
};

export default Header;