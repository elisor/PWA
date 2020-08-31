import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '43b05d094e96d44927b25b795cc9359f';

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query, 
            units: 'metric',
            APPID: API_KEY
        }
    });

    return data;
}