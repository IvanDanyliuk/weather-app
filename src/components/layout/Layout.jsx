import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import WebFont from 'webfontloader';


const Layout = ({children}) => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Nunito Sans', 'Fugaz One']
            }
        })
    }, [])
    
    return (
        <>
            <Header>
                <div className='logo'>w</div>
            </Header>
            <Content>
                {children}
            </Content>
        </>
    );
};


const Header = styled.header`
    padding: 0 15%;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Nunito Sans';
    background: rgb(107, 86, 253);
    color: rgb(255, 255, 255);
    box-sizing: border-box;
    .logo {
        font-family: 'Fugaz One';
        font-weight: 700;
        font-size: 46px;
    }
`;

const Content = styled.main`
    position: relative;
    padding: 0 15%;
    width: 100%;
    min-height: 90vh;
    font-family: 'Nunito Sans';
    background: rgb(107, 86, 253);
    color: rgb(255, 255, 255);
    box-sizing: border-box;
`;


export default Layout;