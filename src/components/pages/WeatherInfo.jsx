import React from 'react';
import styled from 'styled-components';


const WeatherInfo = props => {
    return (
        <WeatherInfoBody>
            <MainInfo>
                <CityName>

                </CityName>
                <TempValue>

                </TempValue>
                
            </MainInfo>
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


export default WeatherInfo;