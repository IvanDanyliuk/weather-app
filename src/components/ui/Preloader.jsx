import React from 'react';
import styled from 'styled-components';


const Preloader = () => {
    return (
        <PreloaderBody>
            <img src={`${process.env.PUBLIC_URL}/img/preloader.gif`} alt='Loading...' />
        </PreloaderBody>
    );
};

const PreloaderBody = styled.div`
    width: 100%;
    
`;

export default Preloader;