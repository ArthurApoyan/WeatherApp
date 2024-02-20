import {configureStore} from "@reduxjs/toolkit";
import {headerInputReducer} from "./slices/headerInputSlice/headerInputSlice";
import {getWeatherReducer} from "./slices/getWeatherSlice/getWeatherSlice";

export const store = configureStore({
    reducer: {
        headerInputValue: headerInputReducer,
        weather: getWeatherReducer,
    },
    middleware:(getDefaultMiddleware) =>[...getDefaultMiddleware(),]
})