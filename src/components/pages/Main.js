import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {fetchWeatherData} from '../../redux/actions/fetchWeatherData';
import store from '../../redux/store';


const Main = props => {
    const [city, setCity] = useState('');

    useEffect(() => {

    })

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