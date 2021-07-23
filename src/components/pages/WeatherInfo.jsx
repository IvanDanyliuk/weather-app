import React from 'react';
import styled from 'styled-components';
import WeatherDataItem from '../ui/WeatherDataItem';
import {v4 as uuidv4} from 'uuid';


const WeatherInfo = props => {
    return (
        <WeatherInfoBody>
            <MainInfo>
                <CityName>
                    {props.data.city}
                </CityName>
                <TempValue>
                    {props.data.temp}
                </TempValue>
                <WeatherImage>
                    <img src={`http://openweathermap.org/img/w/${props.data.icon}.png`} alt="img" />
                </WeatherImage>
            </MainInfo>
            <OtherInfo>
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
            </OtherInfo>
        </WeatherInfoBody>
    )
};


const WeatherInfoBody = styled.div`

`;

const MainInfo = styled.div`

`;

const CityName = styled.div`

`;

const TempValue = styled.div`

`;

const WeatherImage = styled.div`

`;

const OtherInfo = styled.ul`
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;


export default WeatherInfo;