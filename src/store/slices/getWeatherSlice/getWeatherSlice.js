import {createSlice} from "@reduxjs/toolkit";
import {fetchGetWeather} from "./getWeatherApi";

export const getWeatherSlice = createSlice({
    name: "getWeather",
    initialState: {
        current: null,
        fiveDays: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetWeather.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchGetWeather.fulfilled, (state, {payload}) => {
                state.current = payload.current
                state.fiveDays = payload.fiveDays
                state.isLoading = false
            })
            .addCase(fetchGetWeather.rejected, (state) => {
                console.log("weather error")
            })
    }
})

export const getWeatherReducer = getWeatherSlice.reducer