import React, { useState } from 'react';
import styled from 'styled-components';
import WeatherDataItem from '../ui/WeatherDataItem';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Forecast from './Forecast';


const WeatherInfo = props => {
    return (
        <WeatherInfoBody>
            <CityName>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>{props.data.today.city}</span>
            </CityName>
            <MainInfo>
                <WeatherData>
                    <TempValue>
                        {props.data.today.temp}
                        <span>&deg;C</span> 
                    </TempValue>
                    <WeatherType>
                        {props.data.today.weatherType}
                    </WeatherType>
                </WeatherData>
                <WeatherImage>
                    <img src={`${process.env.PUBLIC_URL}/img/${props.data.today.icon}.png`} alt='img'></img>
                </WeatherImage>
            </MainInfo>
            <SunInfo>
                <div>Sunrise: <span>{props.data.today.sunrise}</span></div>
                <div>Sunset: <span>{props.data.today.sunset}</span></div>
            </SunInfo>
            <WeatherDetails>
                {props.data.today.keyIndicators.map(item => {
                    return (
                        <WeatherDataItem
                            key={uuidv4()}
                            value={item.value} 
                            title={item.title} 
                            units={item.units}
                        />
                    )
                })}
            </WeatherDetails>
            <Forecast data={props.data} />
        </WeatherInfoBody>
    )
};


const WeatherInfoBody = styled.div`
    position: relative;
    padding: 10px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`;

const MainInfo = styled.div`
    position: relative;
    margin: 20px 0;
    width: 50%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: linear-gradient(90deg, rgba(109,191,212,1) 0%, rgba(40,127,199,1) 100%);
    color: rgb(255, 255, 255);
    box-sizing: border-box;
`;

const CityName = styled.div`
    font-size: 20px;
    color: rgb(231, 20, 92);
    span {
        margin-left: 5px;
        color: rgb(101, 109, 112);
    }
`;

const WeatherData = styled.div`
    margin: 0 15px;
    padding-right: 20px;
    border-right: 1px solid rgb(255, 255, 255);
`;

const TempValue = styled.div`
    font-size: 56px;
    font-weight: 600;
    line-height: 56px;
`;

const WeatherType = styled.div`
    font-size: 26px;
`;

const WeatherImage = styled.div`
    img {
        width: 100px;
    }
`;

const SunInfo = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

const WeatherDetails = styled.ul`
    position: relative;
    width: 100%;
    margin: 20px 0;
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    background: rgb(236, 236, 236);
`;


export default WeatherInfo;