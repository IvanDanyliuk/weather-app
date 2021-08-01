import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fetchWeatherData} from '../../redux/actions/fetchWeatherData';
import MainPageMessage from '../ui/MainPageMessage';
import WeatherInfo from './WeatherInfo';


const Main = ({weather, fetchWeatherData}) => {
    const [city, setCity] = useState('');

    const onHandleInput = event => {
        setCity(event.target.value);
    }

    const submitCity = () => {
        if(city) {
            fetchWeatherData(city);
            setCity('');
        }
    };

    return (
        <MainBody>
            <Form>
                <input onChange={onHandleInput} value={city} placeholder='location' />
                <button type='button' onClick={submitCity}>
                    <FontAwesomeIcon icon={faCheck} />
                </button>
            </Form>
            {weather.today && weather.week ?
                <WeatherInfo data={weather} /> :
                <MainPageMessage data={weather} />
            }
        </MainBody>
    );
}

const mapStateToProps = state => {
    return {
        weather: state.weather,
        week: state.weather.week
    }
}


const MainBody = styled.section`
    position: relative;
    width: 100%;
`;

const Form = styled.form`
    position: relative;
    display: flex;
    justify-content: center;
    

    input {
        width: 50%;
        height: 20px;
        padding: 10px 15px;
        border: none;
        border-radius: 3px 0 0 3px;
        font-size: 18px;
        background: rgb(236, 236, 236);
        &:focus {
            outline-width: 0;
        }
    }
    button {
        width: 50px;
        border: none;
        border-radius: 0 3px 3px 0;
        font-size: 18px;
        color: rgb(98, 161, 253);
        &:hover {
            cursor: pointer;
        }
    }
`;


export default connect(mapStateToProps, {fetchWeatherData})(Main);