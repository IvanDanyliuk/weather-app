import React, { useState } from 'react';
import styled from 'styled-components';
import WeatherDataItem from '../ui/WeatherDataItem';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ForecastDataList from './ForecastDataList';


const WeatherInfo = ({ data }) => {
    const {today, week} = data;
    const [isDay, setIsDay] = useState(true);
    const handleWeatherData = () => {
        setIsDay(!isDay);
    };

    return (
        <WeatherInfoBody>
            <CityName>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>{today.city}</span>
            </CityName>
            <MainInfo>
                <WeatherData>
                    <TempValue>
                        {today.temp}
                        <span>&deg;C</span> 
                    </TempValue>
                    <WeatherType>
                        {today.weatherType}
                    </WeatherType>
                </WeatherData>
                <WeatherImage>
                    <img src={`${process.env.PUBLIC_URL}/img/${today.icon}.png`} alt='img'></img>
                </WeatherImage>
            </MainInfo>
            <SunInfo>
                <div>Sunrise: <span>{today.sunrise}</span></div>
                <div>Sunset: <span>{today.sunset}</span></div>
            </SunInfo>
            <WeatherDetails>
                {today.keyIndicators.map(item => {
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
            <Forecast>
                <ForecastNav>
                    <h3>{isDay ? 'Next 24 hours' : 'Week'}</h3>
                    <button onClick={handleWeatherData}>{isDay ? 'Show week forecast' : 'Show current forecast'}</button>
                </ForecastNav>
                <ForecastDataList data={isDay ? today.hourly : week} />
            </Forecast>
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
    width: 100%;
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

const Forecast = styled.div`
    position: relative;
    padding: 20px;
    width: 100%;
    border-radius: 5px;
    background: linear-gradient(90deg, rgba(109,191,212,1) 0%, rgba(40,127,199,1) 100%);
    box-sizing: border-box;
`;

const ForecastNav = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    h3 {
        margin: 0;
        font-size: 26px;
        color: rgb(255, 255, 255);
    }

    button {
        height: 30px;
    }
`;


export default WeatherInfo;