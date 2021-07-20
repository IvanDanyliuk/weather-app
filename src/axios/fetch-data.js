import axios from 'axios';
import {getGeoData} from './geocoding';
import {getTimeData} from '../axios/getTimeData';
import {mapWeatherData} from './mapWeatherData';


export const fetchData = async city => {
    const geoData = await getGeoData(city);
    const data = {
        today: '',
        week: ''
    }

    let todayData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8744ada665b095444259f2a3a6b4d0f4`);
    let weekData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${geoData.lat}&lon=${geoData.lon}&appid=8744ada665b095444259f2a3a6b4d0f4`);

    console.log('Today from fetch-data.js', todayData.data)
    console.log('Week from fetch-data.js', weekData)

    data.today = {
        city: todayData.data.name,
        humidity: todayData.data.main.humidity,
        feelLike: Math.round(todayData.data.main.feels_like - 273.15),
        pressure: Math.round(todayData.data.main.pressure / 1.333),
        windSpeed: todayData.data.wind.speed,
        clouds: todayData.data.clouds.all,
        visibility: todayData.data.visibility,
        sunrise: getTimeData(todayData.data.sys.sunrise * 1000),
        sunset: getTimeData(todayData.data.sys.sunset * 1000),
        temp: Math.round(todayData.data.main.temp - 273.15),
        weatherDescr: todayData.data.weather[0].description,
        icon: todayData.data.weather[0].icon,
        hourly: mapWeatherData(weekData.data.hourly.slice(0, 24))
    }
    data.week = mapWeatherData(weekData.data.daily.slice(1));

    return data;
}