import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTint, faCompass, faWind, faLocationArrow, faTemperatureLow, faEye } from '@fortawesome/free-solid-svg-icons';


const WeatherDataItem = props => {
    const imageData = {
        'Humidity': faTint,
        'Pressure': faCompass,
        'Wind Speed': faWind,
        'Wind Direction': faLocationArrow,
        'Feels Like': faTemperatureLow,
        'Visibility': faEye
    };

    return (
        <WeatherDataItemBody>
            <WeatherDataIcon>
                <FontAwesomeIcon icon={imageData[props.title]} />
            </WeatherDataIcon>
            <WeatherDataValue>
                {props.value}
                <span> {props.units}</span>
            </WeatherDataValue>
            <WeatherDataTitle>
                {props.title}
            </WeatherDataTitle>
        </WeatherDataItemBody>
    );
};


const WeatherDataItemBody = styled.li`
    position: relative;
    padding: 20px 0;
    width: 30%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

const WeatherDataIcon = styled.div`
    font-size: 20px;
`;

const WeatherDataValue = styled.h5`
    margin: 0;
    padding: 10px 0;
    font-size: 18px;
    font-weight: 200;
`;

const WeatherDataTitle = styled.h6`
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 200;
`;


export default WeatherDataItem;