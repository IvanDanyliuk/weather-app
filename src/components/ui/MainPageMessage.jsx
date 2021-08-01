import React from 'react';
import styled from 'styled-components';


const MainPageMessage = ({ data }) => {
    return (
        <MessageBody>
            {data.today === null ? 'Search for a location...' : 'Location name is incorrect!'}
        </MessageBody>
    )
}

const MessageBody = styled.div`
    padding: 20px 0;
    font-size: 26px;
`;

export default MainPageMessage;