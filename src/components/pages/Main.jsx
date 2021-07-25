import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {fetchWeatherData} from '../../redux/actions/fetchWeatherData';
import MainPageMessage from '../ui/MainPageMessage';
import WeatherInfo from './WeatherInfo';


const Main = props => {
    const [city, setCity] = useState('');

    const onHandleInput = event => {
        setCity(event.target.value);
    }

    const submitCity = () => {
        if(city) {
            props.fetchWeatherData(city);
            setCity('');
        }
    };

    return (
        <MainBody>
            <Form>
                <input onChange={onHandleInput} value={city} />
                <button type='button' onClick={submitCity}>OK</button>
            </Form>
            {props.today && props.week ?
                <WeatherInfo data={props.today} /> :
                <MainPageMessage data={props.today} />
            }
        </MainBody>
    );
}

const mapStateToProps = state => {
    return {
        today: state.weather.today,
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
        &:focus {
            outline-width: 0;
        }
    }
    button {
        width: 50px;
        border: none;
        border-radius: 0 3px 3px 0;
        font-size: 18px;
        &:hover {
            cursor: pointer;
        }
    }
`;


export default connect(mapStateToProps, {fetchWeatherData})(Main);