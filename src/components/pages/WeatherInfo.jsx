import React from 'react';
import styled from 'styled-components';
import WeatherDataItem from '../ui/WeatherDataItem';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const WeatherInfo = props => {
    return (
        <WeatherInfoBody>
            <CityName>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>{props.data.city}</span>
            </CityName>
            <MainInfo>
                <WeatherData>
                    <TempValue>
                        {props.data.temp} 
                    </TempValue>
                    <WeatherType>
                        {props.data.weatherType}
                    </WeatherType>
                </WeatherData>
                <WeatherImage>
                    <img src={`${process.env.PUBLIC_URL}/img/${props.data.icon}.png`} alt='img'></img>
                </WeatherImage>
            </MainInfo>
            <SunInfo>
                <div>Sunrise: <span>{props.data.sunrise}</span></div>
                <div>Sunset: <span>{props.data.sunset}</span></div>
            </SunInfo>
            <WeatherDetails>
                {props.data.keyIndicators.map(item => {
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
        </WeatherInfoBody>
    )
};


const WeatherInfoBody = styled.div`
    position: relative;
    padding: 10px 0;
    width: 100%;
    box-sizing: border-box;
`;

const MainInfo = styled.div`
    position: relative;
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

const CityName = styled.div`
    font-size: 20px;
    span {
        margin-left: 10px;
    }
`;

const WeatherData = styled.div`
    margin-right: 15px;
    padding-right: 20px;
    border-right: 1px solid rgb(255, 255, 255);
`;

const TempValue = styled.div`
    font-size: 56px;
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
    justify-content: space-between;
`;

const WeatherDetails = styled.ul`
    position: relative;
    width: 100%;
    margin: 0;
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;


export default WeatherInfo;