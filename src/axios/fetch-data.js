import axios from 'axios';
import {getGeoData} from './geocoding';


export const fetchData = async city => {
    const geoData = await getGeoData(city);
    const data = {
        today: '',
        week: ''
    }

    let todayData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8744ada665b095444259f2a3a6b4d0f4`);
    let weekData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${geoData.lat}&lon=${geoData.lon}&appid=8744ada665b095444259f2a3a6b4d0f4`);

    data.today = todayData;
    data.week = weekData;

    return data;
}