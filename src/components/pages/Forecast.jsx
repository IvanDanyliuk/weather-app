import React, { useState } from 'react';
import styled from 'styled-components';


const Forecast = props => {
    const [isDay, setIsDay] = useState(true);

    const handleWeatherData = () => {
        setIsDay(!isDay);
    };

    return (
        <WeatherPeriodBody>
            <PeriodMenu>
                <button onClick={handleWeatherData}>{isDay ? 'Show week forecast' : 'Show current forecast'}</button>
            </PeriodMenu>
            <WeatherData>
                {/* {isDay ? } */}
            </WeatherData>
        </WeatherPeriodBody>
    );
};


const WeatherPeriodBody = styled.section`
    position: relative;
    width: 100%;

    background: linear-gradient(90deg, rgba(109,191,212,1) 0%, rgba(40,127,199,1) 100%);
`;

const PeriodMenu = styled.div`
    
`;

const WeatherData = styled.ul`

`;

export default Forecast;