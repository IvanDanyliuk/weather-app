import {getTimeData} from './getTimeData';

export const mapWeatherData = data => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    return data.map((dataItem, index) => {
        const { weather, temp, dt, humidity, pressure } = dataItem;
        return {
            icon: weather[0].icon,
            temp: temp.day ? Math.round(temp.day - 273.15) : Math.round(temp - 273.15),
            time: data.length > 7 ? getTimeData(dt * 1000) : days[index],
            humidity: humidity,
            pressure: Math.round(pressure / 1.333)
        };
    });
};