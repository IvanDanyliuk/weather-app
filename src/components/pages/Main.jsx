import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {fetchWeatherData} from '../../redux/actions/fetchWeatherData';


const Main = props => {
    const [city, setCity] = useState('');

    const onHandleInput = event => {
        setCity(event.target.value)
    }
    const submitCity = () => {
        props.fetchWeatherData(city);
        setCity('');
    }

    return (
        <MainBody>
            <Form>
                <input onChange={onHandleInput} value={city} />
                <button type='button' onClick={submitCity}>OK</button>
            </Form>
            {props.today && props.week ?
                <div>City: {props.today.city}</div> :
                <div>Choose the city</div>
            }
            {/* <img src={`http://openweathermap.org/img/w/${props.today.icon}.png`} alt="icon" /> */}
            {/* <div>Sunrise: {props.today.sunrise}</div> */}
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

`;

const Form = styled.form`

`;


export default connect(mapStateToProps, {fetchWeatherData})(Main);