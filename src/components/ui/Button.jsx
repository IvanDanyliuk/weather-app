import React from 'react';
import styled from 'styled-components';


const Button = ({isDay}) => {
    return (
        <ButtonBody>
            {isDay ? 'Show week forecast' : 'Show current forecast'}
        </ButtonBody>
    );
};


const ButtonBody = styled.button`
    cursor: pointer;
    width: 150px;
    height: 30px;
    border: none;
    border-radius: 5px;
`;

export default Button;