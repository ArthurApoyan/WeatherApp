export const CITY_TO_COORDINATE_URL = (cityName) => {
    console.log(cityName, "+++++++++++++")
    return `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=d29a483b3a54e6bd035eb0fecd0209b6`
}

export const GET_WEATHER_URL = (lat, lon) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d29a483b3a54e6bd035eb0fecd0209b6`
}

export const GET_FIVE_DAYS_WEATHER_URL = (lat, lon) => {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=d29a483b3a54e6bd035eb0fecd0209b6`
}