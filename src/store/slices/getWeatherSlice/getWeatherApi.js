import {createAsyncThunk} from "@reduxjs/toolkit";
import {CITY_TO_COORDINATE_URL, GET_FIVE_DAYS_WEATHER_URL, GET_WEATHER_URL} from "../../../api/url/url";

export const fetchGetWeather = createAsyncThunk(
    "getWeather/fetchGetWeather",
            async function(inputValue){

                const coordinateResult = await fetch(CITY_TO_COORDINATE_URL(inputValue))
                const coordinateJson = await coordinateResult.json()
                let data = [
                    ...coordinateJson?.map((item) => ({
                            lat: item.lat,
                            lon: item.lon
                        })
                    )
                ]

                const current = await fetch(GET_WEATHER_URL(data[0].lat, data[0].lon))
                const currentJson = await current.json()
                const fiveDays = await fetch(GET_FIVE_DAYS_WEATHER_URL(data[0].lat, data[0].lon))
                const fiveDaysJson = await fiveDays.json()

                return ({
                    current: currentJson,
                    fiveDays: fiveDaysJson
                })
            }
)