import React from 'react';
import Button from '../components/Button';

const Welcome = ({history}) =>{
    const clickHandler = ()=>{
        history.replace('/pressupost');
    }
    return (
    <div>
    <h1>Welcome!</h1>
    <p>
    La aplicación para calcular el prespuesto de una pàgina web
    </p>
    <Button onClick={clickHandler}>Comenzar</Button>
    </div>
    )}

export default Welcome;
