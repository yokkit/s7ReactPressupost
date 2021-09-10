import {useState, useEffect} from 'react';
import Panel from './Panel';

const Pressupost = () =>{
    const [total, setTotal] = useState(0);
    const [isPanel, setIsPanel] = useState(false);
    const [preuWeb, setPreuWeb] = useState(0);
    const [numPaginas, setNumPaginas] = useState(0);
    const [numIdiomas, setNumIdiomas] = useState(0);
    const [preuConsult, setPreuConsult] = useState(0);
    const [preuAds, setPreuAds] = useState(0);
    const [isRedWeb, setIsRedWeb] = useState(false);
    const [isRedIdiomas, setIsRedIdiomas] = useState(false);

    const valueHandlerWeb = (event)=>{
        if (event.target.checked){
            setPreuWeb(event.target.value);
            setIsPanel(true);
        } else {
            setPreuWeb(0);
            setNumPaginas(0);
            setNumIdiomas(0);
            setIsPanel(false);
        }
    }
    const valueHandlerConsult = (event)=>{
        if (event.target.checked){
            setPreuConsult(event.target.value);
        } else {
            setPreuConsult(0);
        }
    }
    const valueHandlerAds = (event)=>{
        if (event.target.checked){
            setPreuAds(event.target.value);
        } else {
            setPreuAds(0);
        }
    }
    const countNumPaginas = (event) =>{
        if(+event.target.value>=0){
            setIsRedWeb(false);
            setNumPaginas(event.target.value);
        } else {
            setIsRedWeb(true);
        }
    }
    const countNumIdiomas = (event) =>{
        if(+event.target.value>=0){
            setIsRedIdiomas(false);
            setNumIdiomas(event.target.value);
        } else {
            setIsRedIdiomas(true);
        }
    }
    useEffect(()=>{
        let totalAmount = parseInt(preuWeb)+parseInt((numPaginas*numIdiomas*30))
        +parseInt(preuConsult)+parseInt(preuAds)
        setTotal(totalAmount);
    }, [preuWeb, numPaginas, numIdiomas, preuConsult, preuAds]);

    return (
    <div>
        <p>¿Qué quieres hacer?</p>
        <div>
        <input type='checkbox' value='500' id='web' name='web' onClick={valueHandlerWeb}/>
        <label htmlFor='web'>Una pagina web (500&euro;)</label>
        </div>
        {isPanel&& 
        <Panel>
            <div>
            <label htmlFor='num_paginas'>Numero de paginas</label>
            <input type='number' id='num_paginas' name='num_paginas' defaultValue = '0' onChange={countNumPaginas}/>
            {isRedWeb && <p>Introduzxa el numero positivo</p>}
            </div>
            <div>
            <label htmlFor='num_idiomas'>Numero de idiomas</label>
            <input type='number' id='num_idiomas' name='num_idiomas' defaultValue = '0' onChange={countNumIdiomas}/>
            {isRedIdiomas && <p>Introduzxa el numero positivo</p>}
            </div>
        </Panel>}
        <div>
        <input type='checkbox' value='300' id='consult' name='consult' onClick={valueHandlerConsult} />
        <label htmlFor='consult'> Una consultoria SEO (300&euro;)</label>
        </div>
        <div>
        <input type='checkbox' value='200' id='ads' name='ads' onClick={valueHandlerAds}/>
        <label htmlFor='ads'>Una campanya de Google Ads (200&euro;)</label>
        </div>
        <p>Preu:{total}&euro;</p>
    </div>
    );
}

export default Pressupost;