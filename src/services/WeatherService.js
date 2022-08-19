const API_KEY = "0eff76b0b82a967eea464ca430e53c5d";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const getWeatherData = (infoType, searchParams) => {
    const url = new URL (BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY}
        )
        return fetch(url).then((res) => res.json());
}