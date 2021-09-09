import React, {useState} from 'react';

const Pressupost = () =>{
    const [totalArr, setTotalArr] = useState(0)
    const valueHandler = (event)=>{
        if (event.target.checked){
        setTotalArr(totalArr + parseInt(event.target.value));
        } else {
        setTotalArr(totalArr - parseInt(event.target.value));
        }
    }
    return (
    <div>
        <p>¿Qué quieres hacer?</p>
        <div>
        <input type='checkbox' value='500' id='web' name='web' onClick={valueHandler}/>
        <label htmlFor='web'>Una pagina web (500&euro;)</label>
        </div>
        <div>
        <input type='checkbox' value='300' id='consult' name='consult' onClick={valueHandler} />
        <label htmlFor='consult'> Una consultoria SEO (300&euro;)</label>
        </div>
        <div>
        <input type='checkbox' value='200' id='ads' name='ads' onClick={valueHandler}/>
        <label htmlFor='ads'>Una campanya de Google Ads (200&euro;)</label>
        </div>
        <p>Preu:{totalArr}&euro;</p>
    </div>
    );
}

export default Pressupost;