import styled from "styled-components";

const PanelStyle = styled.div`
  width: 300px;
  background-color: beige;
  border-radius: 5px;
  border: solid black 2px;
  margin: 0.5rem;
  padding: 1rem;
  display: flex-start;
  align-items: center;
  .numPaginasItem,
  .numIdiomasItem {
    button {
      border: 1px solid orange;
      border-radius: 5px;
      color: white;
      background-color: orange;
      margin: 0.5rem;
      width: 30px;
      height: 30px;
      font-size: 20px;
      cursor: pointer;
      cursor: hand;
    }
    input {
      width: 35px;
      height: 20px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      cursor: hand;
    }
  }
  .infoIcon {
    display: inline-block;
    color: beige;
    border: 1px grey solid;
    background-color: grey;
    padding: 0 8px;
    border-radius: 10px;
    text-align: center;
    position: relative;
    font-size: 15px;
    cursor: pointer;
    cursor: hand;
    &::after {
      content: "";
      position: absolute;
      margin: 0;
      bottom: -3px;
      left: -2px;
      width: 0;
      height: 0;
      border-top: 7px solid grey;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      transform: rotate(30deg);
    }
  }
`;

const Panel = (props) => {
  const countNumPaginas = (event) => {
    if (+event.target.value >= 0) {
      props.setNumPaginas(event.target.value);
    }
  };
  const countNumIdiomas = (event) => {
    if (+event.target.value >= 0) {
      props.setNumIdiomas(event.target.value);
    }
  };
  const buttonPaginasPlusHandler = () => {
    props.setNumPaginas(+props.numPaginas + 1);
  };
  const buttonPaginasMinusHandler = () => {
    if (+props.numPaginas > 0) {
      props.setNumPaginas(+props.numPaginas - 1);
    }
  };
  const showNumPaginasHandler = () => {
    return props.numPaginas;
  };
  const buttonIdiomasPlusHandler = () => {
    props.setNumIdiomas(+props.numIdiomas + 1);
  };
  const buttonIdiomasMinusHandler = () => {
    if (+props.numIdiomas > 0) {
      props.setNumIdiomas(+props.numIdiomas - 1);
    }
  };
  const showNumIdiomasHandler = () => {
    return props.numIdiomas;
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
