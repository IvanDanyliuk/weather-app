import {FETCH_DATA} from '../types/types';
import {fetchData} from '../../axios/fetch-data';


export const fetchWeatherData = city => dispatch => {
    fetchData(city)
        .then(response => {
            console.log(response)
            dispatch({
                type: FETCH_DATA,
                payload: response
            })
        })
        .catch(error => {
            dispatch({
                type: FETCH_DATA,
                payload: error.message
            })
        })
};