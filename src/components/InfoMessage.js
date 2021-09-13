import React from 'react';
import classes from './InfoMessage.module.css';

const InfoMessage = props =>{
    const BackgroundScreen = props =>{
        return <div className={classes.backgroundScreen} onClick={props.onConfirm}></div>
    }
    const MainMassage = props =>{
        return (
            <div className={classes.messageName}>
                <p>En este componente debe indicar el <span>{props.name}</span> que tendrá su sitio web.</p>
            </div>
        )
    }
    return (
        <React.Fragment>
            <BackgroundScreen onConfirm={props.onConfirm}/>
            <MainMassage onConfirm={props.onConfirm} name={props.name}/>
        </React.Fragment>
    );
}

export default InfoMessage;
