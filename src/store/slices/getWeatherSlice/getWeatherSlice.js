import {createSlice} from "@reduxjs/toolkit";
import {fetchGetWeather} from "./getWeatherApi";

export const getWeatherSlice = createSlice({
    name: "getWeather",
    initialState: {
        current: {},
        fiveDays: {}
    },
    reducers: {},
    extraReducers: {
        [fetchGetWeather.pending]:(state) => {
            console.log("pending...")
        },
        [fetchGetWeather.fulfilled]:(state, {payload}) => {
            state.current = payload.current
            state.fiveDays = payload.fiveDays
        },
        [fetchGetWeather.rejected]:(state) => {
            console.log("weather error")
        }
    }
})

export const selectGetWeather = state => state.getWeather

export const getWeatherReducer = getWeatherSlice.reducer