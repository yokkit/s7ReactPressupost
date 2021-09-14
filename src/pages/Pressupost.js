import { useState, useEffect } from "react";
import Panel from "../components/Panel";
import InfoMessage from "../components/InfoMessage";

const Pressupost = () => {
  const [total, setTotal] = useState(0);
  const [isPanel, setIsPanel] = useState(false);
  const [numPaginas, setNumPaginas] = useState(0);
  const [numIdiomas, setNumIdiomas] = useState(0);
  const [preuWeb, setPreuWeb] = useState(0);
  const [preuConsult, setPreuConsult] = useState(0);
  const [preuAds, setPreuAds] = useState(0);
  const [showInfo, setShowInfo] = useState();

  const valueHandlerWeb = (event) => {
    if (event.target.checked) {
      setPreuWeb(event.target.value);
      setIsPanel(true);
    } else {
      setPreuWeb(0);
      setNumPaginas(0);
      setNumIdiomas(0);
      setIsPanel(false);
    }
  };
  const valueHandlerConsult = (event) => {
    if (event.target.checked) {
      setPreuConsult(event.target.value);
    } else {
      setPreuConsult(0);
    }
  };
  const valueHandlerAds = (event) => {
    if (event.target.checked) {
      setPreuAds(event.target.value);
    } else {
      setPreuAds(0);
    }
  };

  useEffect(() => {
    let totalAmount =
      parseInt(preuWeb) +
      parseInt(numPaginas * numIdiomas * 30) +
      parseInt(preuConsult) +
      parseInt(preuAds);
    setTotal(totalAmount);
    const pressupostNou = {
      "Una página web": preuWeb,
      "Número de páginas": numPaginas,
      "Número de idiomas": numIdiomas,
      "Una consultoria SEO": preuConsult,
      "Una campaña de Google Ads": preuAds,
      "Precio total": total,
    };
    for (let key in pressupostNou) {
      if (pressupostNou.hasOwnProperty(key)) {
        let value = pressupostNou[key];
        localStorage.setItem(key, value);
      }
    }
  }, [preuWeb, numPaginas, numIdiomas, preuConsult, preuAds, total]);
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
          numPaginas={numPaginas}
          numIdiomas={numIdiomas}
          showInfo={showInfo}
          setNumIdiomas={setNumIdiomas}
          setNumPaginas={setNumPaginas}
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
      <p>Preu:{total}&euro;</p>
    </div>
  );
};

export default Pressupost;
