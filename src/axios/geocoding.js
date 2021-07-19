import axios from 'axios';


export const getGeoData = async city => {
    let geoData = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=8744ada665b095444259f2a3a6b4d0f4`);
    const {lat, lon} = geoData.data[0];
    return {
        lat,
        lon
    }
}