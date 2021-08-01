import {getTimeData} from './getTimeData';

export const mapWeatherData = data => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    return data.map((dataItem, index) => {
        return {
            icon: dataItem.weather[0].icon,
            temp: dataItem.temp.day ? Math.round(dataItem.temp.day - 273.15) : Math.round(dataItem.temp - 273.15),
            time: data.length > 7 ? getTimeData(dataItem.dt * 1000) : days[index],
            humidity: dataItem.humidity,
            pressure: Math.round(dataItem.pressure / 1.333)
        };
    });
};