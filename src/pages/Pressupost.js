import { useState, useEffect } from "react";
import Panel from "../components/Panel";
import InfoMessage from "../components/InfoMessage";

const Pressupost = () => {
  const [total, setTotal] = useState(0);
  const [isPanel, setIsPanel] = useState(false);
  const [preuWeb, setPreuWeb] = useState(0);
  const [numPaginas, setNumPaginas] = useState(0);
  const [numIdiomas, setNumIdiomas] = useState(0);
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
  const countNumPaginas = (event) => {
    if (+event.target.value >= 0) {
      setNumPaginas(event.target.value);
    }
  };
  const countNumIdiomas = (event) => {
    if (+event.target.value >= 0) {
      setNumIdiomas(event.target.value);
    }
  };
  const buttonPaginasPlusHandler = () => {
    setNumPaginas(+numPaginas + 1);
  };
  const buttonPaginasMinusHandler = () => {
    if (+numPaginas > 0) {
      setNumPaginas(+numPaginas - 1);
    }
  };
  const showNumPaginasHandler = () => {
    return numPaginas;
  };
  const buttonIdiomasPlusHandler = () => {
    setNumIdiomas(+numIdiomas + 1);
  };
  const buttonIdiomasMinusHandler = () => {
    if (+numIdiomas > 0) {
      setNumIdiomas(+numIdiomas - 1);
    }
  };
  const showNumIdiomasHandler = () => {
    return numIdiomas;
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
        <Panel>
          <div className="numPaginasItem">
            <label htmlFor="num_paginas">Número de páginas</label>
            <button type="button" onClick={buttonPaginasPlusHandler}>
              +
            </button>
            <input
              type="text"
              id="num_paginas"
              name="num_paginas"
              maxLength="5"
              value={showNumPaginasHandler()}
              onChange={countNumPaginas}
            />
            <button type="button" onClick={buttonPaginasMinusHandler}>
              -
            </button>
            <div
              className="infoIcon"
              onClick={(e) => {
                e.stopPropagation();
                setShowInfo({ name: "número de la página" });
              }}
            >
              &#8505;
            </div>
          </div>
          <div className="numIdiomasItem">
            <label htmlFor="num_idiomas">Número de idiomas</label>
            <button type="button" onClick={buttonIdiomasPlusHandler}>
              +
            </button>
            <input
              type="text"
              id="num_idiomas"
              name="num_idiomas"
              maxLength="5"
              value={showNumIdiomasHandler()}
              onChange={countNumIdiomas}
            />
            <button type="button" onClick={buttonIdiomasMinusHandler}>
              -
            </button>
            <div
              className="infoIcon"
              onClick={(e) => {
                e.stopPropagation();
                setShowInfo({ name: "número de idiomas" });
              }}
            >
              &#8505;
            </div>
          </div>
        </Panel>
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
