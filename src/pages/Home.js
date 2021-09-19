import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';

const WelcomeStyle= styled.div`
    margin: 2% 5%;
`;

const Welcome = ({history}) =>{
    const clickHandler = ()=>{
        history.replace('/pressupost');
    }
    return (
    <WelcomeStyle>
    <h1>Welcome!</h1>
    <p>
    La aplicación para calcular el prespuesto de una pàgina web
    </p>
    <Button onClick={clickHandler}>Comenzar</Button>
    </WelcomeStyle>
    )}

export default Welcome;
