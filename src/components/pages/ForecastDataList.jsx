import React from 'react';
import styled  from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faCompass } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';


const ForecastDataList = ({ data }) => {
    return (
        <ForecastDataListBody>
            {data.map(item => {
                const { time, temp, icon, humidity, pressure } = item;
                return (
                    <li key={uuidv4()}>
                        <div className='time'>{time}</div>
                        <div>{temp} &deg;C</div>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/img/${icon}.png`} alt='img'></img>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTint} />
                            {` ${humidity} %`}
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCompass} />
                            {` ${pressure} mm.m`}
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
    padding: 0;
    list-style: none;
    font-size: 14px;
    color: rgb(255, 255, 255);
    box-sizing: border-box;

    li {
        position: relative;
        margin: 10px 0;
        padding: 5px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        background: rgba(255, 255, 255, .15);

        &:last-child {
            margin-bottom: 0;
        }

        div {
            text-align: left;
            &:first-child {
                width: 20%;

                @media (max-width: 768px) {
                    width: 25%;
                }
            }
        }
        img {
            height: 34px;

            @media (max-width: 320px) {
                height: 26px;
            }
        }

        .time {
            font-weight: 700;
        }

        @media (max-width: 320px) {
            font-size: 10px;
        }
    }
`;

export default ForecastDataList;