import React from 'react';
import {Route, Routes} from "react-router";
import Layout from "../../pages/Layout/Layout";
import CurrentWeatherPage from "../../pages/CurrentWeatherPage/CurrentWeatherPage";
import FiveDayPage from "../../pages/FiveDayPage/FiveDayPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<CurrentWeatherPage/>}/>
                <Route path="/fiveDay" element={<FiveDayPage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;