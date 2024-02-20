import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchGetWeather} from "../../store/slices/getWeatherSlice/getWeatherApi";
import FiveDayPageContent from "../../components/FiveDayPageContent/FiveDayPageContent";
import Loading from "../../components/Loading/Loading";

const FiveDayPage = () => {

    const dispatch = useDispatch();
    const {isLoading} = useSelector(state => state.weather);
    const inputValue = useSelector(state => state.headerInputValue)

    useEffect(() => {
        dispatch(fetchGetWeather(inputValue))
    }, [dispatch])

    return (
        <div>
            {
                isLoading ? <Loading/>
                    : <FiveDayPageContent/>
            }
        </div>
    );
};

export default FiveDayPage;