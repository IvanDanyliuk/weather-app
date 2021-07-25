import axios from 'axios';
import {getGeoData} from './geocoding';
import {getTimeData} from '../axios/getTimeData';
import {mapWeatherData} from './mapWeatherData';
import {convertWindDirection} from '../axios/convertWindDirection';


export const fetchData = async city => {
    const geoData = await getGeoData(city);
    const data = {
        today: '',
        week: ''
    }

    let todayData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8744ada665b095444259f2a3a6b4d0f4`);
    let weekData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${geoData.lat}&lon=${geoData.lon}&appid=8744ada665b095444259f2a3a6b4d0f4`);

    console.log('Today', todayData);
    console.log('Week', weekData);

    data.today = {
        city: todayData.data.name,
        weatherType: todayData.data.weather[0].main,
        keyIndicators: [
            {title: 'Humidity', value: todayData.data.main.humidity, units: '%'},
            {title: 'Pressure', value: Math.round(todayData.data.main.pressure / 1.333), units: 'mm.m'},
            {title: 'Wind Speed', value: Math.round((todayData.data.wind.speed * 10) / 2.237), units: 'm/s'},
            {title: 'Wind Direction', value: convertWindDirection(todayData.data.wind.deg), units: ''},
            {title: 'Feels Like', value: Math.round(todayData.data.main.feels_like - 273.15), units: 'C'},
            {title: 'Visibility', value: todayData.data.visibility / 1000, units: 'km'}
        ],
        sunrise: getTimeData(todayData.data.sys.sunrise * 1000),
        sunset: getTimeData(todayData.data.sys.sunset * 1000),
        temp: Math.round(todayData.data.main.temp - 273.15),
        weatherDescr: todayData.data.weather[0].description,
        icon: todayData.data.weather[0].icon,
        hourly: mapWeatherData(weekData.data.hourly.slice(0, 24))
    }
    data.week = mapWeatherData(weekData.data.daily.slice(1));

    console.log(data);
    return data;
}