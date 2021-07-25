import React from 'react';
import styled from 'styled-components';


const MainPageMessage = props => {
    return (
        <MessageBody>
            {props.data === null ? 'Choose the city...' : 'City name is incorrect!'}
        </MessageBody>
    )
}

const MessageBody = styled.div`
    padding: 20px 0;
    font-size: 26px;
`;

export default MainPageMessage;