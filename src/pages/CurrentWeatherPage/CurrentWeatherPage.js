import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CurrentWeatherPageContent from "../../components/CurrentWeatherPageContent/CurrentWeatherPageContent";
import Loading from '../../components/Loading/Loading';
import {fetchGetWeather} from "../../store/slices/getWeatherSlice/getWeatherApi";

const CurrentWeatherPage = () => {

    const dispatch = useDispatch();
    const {isLoading} = useSelector(state => state.weather);
    const inputValue = useSelector(state => state.headerInputValue)

    console.log(inputValue)

    useEffect(() => {
        dispatch(fetchGetWeather(inputValue))
    }, [dispatch])

    return (
        <div className="homePage">
            {
                isLoading ? <Loading/> 
                          : <CurrentWeatherPageContent/>
            }
        </div>
    );
};

export default CurrentWeatherPage;