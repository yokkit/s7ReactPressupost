import { useState, useEffect, useContext } from "react";
import Panel from "../components/Panel";
import Button from "../components/Button";
import InfoMessage from "../components/InfoMessage";
import classes from "./InputPressupost.module.css";
import { PressupostContext } from "../application/Provider";

const InputPressupost = (props) => {
  const [pressupost, setPressupost] = useContext(PressupostContext);
  const [isPanel, setIsPanel] = useState(false);
  const [showInfo, setShowInfo] = useState();
  const [isSubmit, setIsSubmit] = useState(false);

  const valueHandlerWeb = (event) => {
    if (event.target.checked) {
      setPressupost({ ...pressupost, preuWeb: parseInt(event.target.value) });
      setIsPanel(true);
    } else {
      setPressupost({
        ...pressupost,
        preuWeb: 0,
        numPaginas: 0,
        numIdiomas: 0,
      });
      setIsPanel(false);
    }
  };

  const resetPressupost = () => {
    setPressupost({
      ...pressupost,
      total: 0,
      numPaginas: 0,
      numIdiomas: 0,
      preuWeb: 0,
      preuConsult: 0,
      preuAds: 0,
      nomPressupost: "",
      nomClient: "",
    });
  };
  const valueHandlerConsult = (event) => {
    if (event.target.checked) {
      setPressupost({
        ...pressupost,
        preuConsult: parseInt(event.target.value),
      });
    } else {
      setPressupost({ ...pressupost, preuConsult: 0 });
    }
  };
  const valueHandlerAds = (event) => {
    if (event.target.checked) {
      setPressupost({ ...pressupost, preuAds: parseInt(event.target.value) });
    } else {
      setPressupost({ ...pressupost, preuAds: 0 });
    }
  };

  const addTotalAmount = () => {
    let totalAmount =
      pressupost.preuWeb +
      pressupost.numPaginas * pressupost.numIdiomas * 30 +
      pressupost.preuConsult +
      pressupost.preuAds;
    setPressupost({ ...pressupost, total: totalAmount });
  };

  const storeLocalstorage = () => {
    for (let key in pressupost) {
        let value = pressupost[key];
        localStorage.setItem(key, value);
    }
  };

  useEffect(
    () => {
      addTotalAmount();
      storeLocalstorage();
    },
    // eslint-disable-next-line
    [
      pressupost.preuWeb,
      pressupost.numPaginas,
      pressupost.numIdiomas,
      pressupost.preuConsult,
      pressupost.preuAds,
      pressupost.total,
      pressupost.nomPressupost,
      pressupost.nomClient,
    ]
  );
  const closeHandler = () => {
    setShowInfo(null);
  };
  const nomHandler = (event) => {
    if (event.target.id === "nomPressupost") {
      setPressupost({ ...pressupost, nomPressupost: event.target.value });
    } else if (event.target.id === "nomClient") {
      setPressupost({ ...pressupost, nomClient: event.target.value });
    }
    return;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // Only save if input texts are not empty
    if (pressupost.nomClient && pressupost.nomPressupost && pressupost.total>0) {
      props.setArrPressupost((prevArr) => [...prevArr, pressupost]);
      console.log(props.arrPressupost);
      resetPressupost();
      event.target.reset();
      setIsPanel(false);
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }
  };

  return (
    <div className={classes.inputGeneral}>
      {showInfo && (
        <InfoMessage name={showInfo.name} onConfirm={closeHandler} />
      )}
      <form onSubmit={submitHandler}>
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
        {isPanel && <Panel setShowInfo={setShowInfo} />}
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
        <p className={classes.preuTotal}>Preu:{pressupost.total}&euro;</p>
        {(isSubmit&&!pressupost.total) && <p className={classes.warning}>***Por favor, indica peticiones</p>}
        <div>
          <label htmlFor="nomPressupost" className={classes.label}>
            Nombre de Presupuesto
          </label>
          <input
            type="text"
            id="nomPressupost"
            name="nomPressupost"
            onChange={nomHandler}
          />
          {(isSubmit&&!pressupost.nomPressupost) && <p className={classes.warning}>***Por favor, indica el nombre de presupuesto</p>} 
        </div>
        <div>
          <label htmlFor="nomClient" className={classes.label}>
            Nombre de Cliente
          </label>
          <input
            type="text"
            id="nomClient"
            name="nomClient"
            onChange={nomHandler}
          />
          {(isSubmit&&!pressupost.nomClient) && <p className={classes.warning}>***Por favor, indica el nombre del cliente</p>} 
        </div>
        <Button type="submit" className={classes.saveButton}>
          Guardar
        </Button>
      </form>
    </div>
  );
};

export default InputPressupost;
