import { useState, useEffect, useContext} from "react";
import Panel from "../components/Panel";
import InfoMessage from "../components/InfoMessage";
import { PressupostContext } from "../application/Provider";

const InputPressupost = () => {
    const [pressupost, setPressupost] = useContext(PressupostContext);
    const [isPanel, setIsPanel] = useState(false);
    const [showInfo, setShowInfo] = useState();
  
    const valueHandlerWeb = (event) => {
      if (event.target.checked) {
        setPressupost({...pressupost, preuWeb: parseInt(event.target.value)});
        setIsPanel(true);
      } else {
        setPressupost({...pressupost, preuWeb: 0, numPaginas:0, numIdiomas:0});
        setIsPanel(false);
      }
    };
    const valueHandlerConsult = (event) => {
      if (event.target.checked) {
        setPressupost({...pressupost, preuConsult:parseInt(event.target.value)});
      } else {
        setPressupost({...pressupost, preuConsult:0});
      }
    };
    const valueHandlerAds = (event) => {
      if (event.target.checked) {
        setPressupost({...pressupost, preuAds:parseInt(event.target.value)});
      } else {
        setPressupost({...pressupost, preuAds: 0});
      }
    };

    const addTotalAmount = () =>{
      let totalAmount = pressupost.preuWeb +
      (pressupost.numPaginas * pressupost.numIdiomas * 30) +
      pressupost.preuConsult +
      pressupost.preuAds;
      setPressupost({...pressupost, total: totalAmount});
    }
    
    const storeLocalstorage = () =>{
      for (let key in pressupost) {
        if (pressupost.hasOwnProperty(key)) {
          let value = pressupost[key];
          localStorage.setItem(key, value);
        }
      }
    }
  
    useEffect(() => {
      addTotalAmount();
      storeLocalstorage();
    }, 
    [pressupost.preuWeb, pressupost.numPaginas, pressupost.numIdiomas, pressupost.preuConsult, pressupost.preuAds, pressupost.total]
    );
    const closeHandler = () => {
      setShowInfo(null);
    };
  
    return (
      <div>
        {showInfo && (
          <InfoMessage name={showInfo.name} onConfirm={closeHandler} />
        )}
        <p>¿Qué quieres hacer?</p>
        <div>
          <input
            type="checkbox"
            value="500"
            id="web"
            name="web"
            onClick={valueHandlerWeb}
          />
          <label htmlFor="web">Una página web (500&euro;)</label>
        </div>
        {isPanel && (
          <Panel
            showInfo={showInfo}
            setShowInfo={setShowInfo}
          />
        )}
        <div>
          <input
            type="checkbox"
            value="300"
            id="consult"
            name="consult"
            onClick={valueHandlerConsult}
          />
          <label htmlFor="consult">Una consultoria SEO (300&euro;)</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="200"
            id="ads"
            name="ads"
            onClick={valueHandlerAds}
          />
          <label htmlFor="ads">Una campaña de Google Ads (200&euro;)</label>
        </div>
        <p>Preu:{pressupost.total}&euro;</p>
        {/* <div>
        <label htmlFor="nomPressupost">Nombre de Presupuesto</label>
        <input type="text" id="nomPressupost" />
        </div>
        <div>
        <label htmlFor="nomClient">Nombre de Cliente</label>
        <input type="text" id="nomClient" />
        </div>
        <button type="button">Guardar</button> */}
        
      </div>
    );
  };
  
  export default InputPressupost;
  