import React from 'react';
import styled  from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faCompass } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';


const ForecastDataList = props => {
    return (
        <ForecastDataListBody>
            {props.data.map(item => {
                return (
                    <li key={uuidv4()}>
                        <div>{item.time}</div>
                        <div>{item.temp} &deg;C</div>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/img/${item.icon}.png`} alt='img'></img>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTint} />
                            {` ${item.humidity} %`}
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCompass} />
                            {` ${item.pressure} mm.m`}
                        </div>
                    </li>
                )
            })}
        </ForecastDataListBody>
    );
};


const ForecastDataListBody = styled.ul`
    position: relative;
    width: 100%;
    margin: 0;
    padding: 20px;
    list-style: none;
    font-size: 14px;
    color: rgb(255, 255, 255);
    box-sizing: border-box;

    li {
        position: relative;
        display: flex;
        justify-content: space-between;
        
        div {
            text-align: left;
            &:first-child {
                width: 20%;
            }
        }
        img {
            height: 26px;
        }
    }
`;

export default ForecastDataList;