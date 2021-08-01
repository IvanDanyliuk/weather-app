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
    };

    let todayData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8744ada665b095444259f2a3a6b4d0f4`);
    let weekData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${geoData.lat}&lon=${geoData.lon}&appid=8744ada665b095444259f2a3a6b4d0f4`);

    const { name, main, wind, visibility, sys, weather } = todayData.data;
    const { hourly, daily } = weekData.data;

    data.today = {
        city: name,
        weatherType: weather[0].main,
        keyIndicators: [
            {title: 'Humidity', value: main.humidity, units: '%'},
            {title: 'Pressure', value: Math.round(main.pressure / 1.333), units: 'mm.m'},
            {title: 'Wind Speed', value: Math.round((wind.speed * 10) / 2.237), units: 'm/s'},
            {title: 'Wind Direction', value: convertWindDirection(wind.deg), units: ''},
            {title: 'Feels Like', value: Math.round(main.feels_like - 273.15), units: 'C'},
            {title: 'Visibility', value: visibility / 1000, units: 'km'}
        ],
        sunrise: getTimeData(sys.sunrise * 1000),
        sunset: getTimeData(sys.sunset * 1000),
        temp: Math.round(main.temp - 273.15),
        weatherDescr: weather[0].description,
        icon: weather[0].icon,
        hourly: mapWeatherData(hourly.slice(0, 24))
    };

    data.week = mapWeatherData(daily.slice(1));

    return data;
};