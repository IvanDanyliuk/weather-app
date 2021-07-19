import {FETCH_DATA} from '../types/types';


const weatherReducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                today: {
                    city: action.payload.today.data.name,
                    humidity: action.payload.today.data.main.humidity,
                    feelLike: action.payload.today.data.main.feels_like,
                    pressure: action.payload.today.data.main.pressure,
                    windSpeed: action.payload.today.data.wind.speed,
                    clouds: action.payload.today.data.clouds.all,
                    visibility: action.payload.today.data.visibility,
                    sunrise: action.payload.today.data.sys.sunrise,
                    sunset: action.payload.today.data.sys.sunset,
                    temp: action.payload.today.data.main.temp,
                    weatherDescr: action.payload.today.data.weather[0].description
                },
                week: action.payload.week.data.daily
            }
        default:
            return state;
    }
};

export default weatherReducer;