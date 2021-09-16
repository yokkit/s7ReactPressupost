import { useContext } from "react";
import PanelStyle from "./PanelStyle";
import { PressupostContext } from "../application/Provider";

const Panel = (props) => {
  const [pressupost, setPresspost] = useContext(PressupostContext);

  const countNumPaginas = (event) => {
    if (+event.target.value >= 0) {
      setPresspost({...pressupost, numPaginas:event.target.value});
      // props.setNumPaginas(event.target.value);
    }
  };
  const countNumIdiomas = (event) => {
    if (+event.target.value >= 0) {
      setPresspost({...pressupost, numIdiomas: event.target.value});
      // props.setNumIdiomas(event.target.value);
    }
  };
  const buttonPaginasPlusHandler = () => {
    setPresspost({...pressupost, numPaginas: +pressupost.numPaginas + 1});
    // props.setNumPaginas(+props.numPaginas + 1);
  };
  const buttonPaginasMinusHandler = () => {
    if (+pressupost.numPaginas > 0) {
      setPresspost({...pressupost, numPaginas: +pressupost.numPaginas - 1});
      // props.setNumPaginas(+props.numPaginas - 1);
    }
  };
  const showNumPaginasHandler = () => {
    return pressupost.numPaginas;
  };
  const buttonIdiomasPlusHandler = () => {
    setPresspost({...pressupost, numIdiomas: +pressupost.numIdiomas + 1});
    // props.setNumIdiomas(+props.numIdiomas + 1);
  };
  const buttonIdiomasMinusHandler = () => {
    if (+pressupost.numIdiomas > 0) {
      setPresspost({...pressupost, numIdiomas: +pressupost.numIdiomas - 1});
      // props.setNumIdiomas(+props.numIdiomas - 1);
    }
  };
  const showNumIdiomasHandler = () => {
    return pressupost.numIdiomas;
  };

  return(
  <PanelStyle>
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
          props.setShowInfo({ name: "número de la página" });
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
          props.setShowInfo({ name: "número de idiomas" });
        }}
      >
        &#8505;
      </div>
    </div>
  </PanelStyle>
)};

export default Panel;
