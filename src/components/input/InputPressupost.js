import { useState, useEffect, createContext } from "react";
import Panel from "./Panel";
import Button from "../ui/Button";
import InfoMessage from "./InfoMessage";
import classes from "./InputPressupost.module.css";

export const PressupostContext = createContext();

const InputPressupost = (props) => {
  const [pressupost, setPressupost] = useState({
    idNum: 0,
    total: 0,
    numPaginas: 0,
    numIdiomas: 0,
    preuWeb: 0,
    preuConsult: 0,
    preuAds: 0,
    nomPressupost: "",
    nomClient: "",
  });
  const [isPanel, setIsPanel] = useState(false);
  const [showInfo, setShowInfo] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [count, setCount] = useState(0);

  const valueHandlerWeb = (event) => {
    if (event.target.checked) {
      setPressupost((prevState) => {
        return { ...prevState, preuWeb: parseInt(event.target.value) };
      });
      setIsPanel(true);
    } else {
      setPressupost((prevState) => {
        return {
          ...prevState,
          preuWeb: 0,
          numPaginas: 0,
          numIdiomas: 0,
        };
      });
      setIsPanel(false);
    }
  };

  const resetPressupost = () => {
    setPressupost((prevState) => {
      return {
        ...prevState,
        idNum: 0,
        total: 0,
        numPaginas: 0,
        numIdiomas: 0,
        preuWeb: 0,
        preuConsult: 0,
        preuAds: 0,
        nomPressupost: "",
        nomClient: "",
      };
    });
  };
  const valueHandlerConsult = (event) => {
    if (event.target.checked) {
      setPressupost((prevState) => {
        return {
          ...prevState,
          preuConsult: parseInt(event.target.value),
        };
      });
    } else {
      setPressupost((prevState) => {
        return { ...prevState, preuConsult: 0 };
      });
    }
  };
  const valueHandlerAds = (event) => {
    if (event.target.checked) {
      setPressupost((prevState) => {
        return { ...prevState, preuAds: parseInt(event.target.value) };
      });
    } else {
      setPressupost((prevState) => {
        return { ...prevState, preuAds: 0 };
      });
    }
  };

  const addTotalAmount = () => {
    let totalAmount =
      pressupost.preuWeb +
      pressupost.numPaginas * pressupost.numIdiomas * 30 +
      pressupost.preuConsult +
      pressupost.preuAds;
    setPressupost((prevState) => {
      return { ...prevState, total: totalAmount };
    });
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

  useEffect(
    () => {
      setPressupost((prevState) => {
        return { ...prevState, idNum: count };
      });
    },
    // eslint-disable-next-line
    [count]
  );

  const closeHandler = () => {
    setShowInfo(null);
  };
  const nomHandler = (event) => {
    if (event.target.id === "nomPressupost") {
      setPressupost((prevState) => {
        return {
          ...prevState,
          nomPressupost: event.target.value.toUpperCase(),
        };
      });
    } else if (event.target.id === "nomClient") {
      setPressupost((prevState) => {
        return { ...prevState, nomClient: event.target.value.toUpperCase() };
      });
    }
    return;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // Only save if input texts are not empty
    if (
      pressupost.nomClient &&
      pressupost.nomPressupost &&
      pressupost.total > 0
    ) {
      setCount((count) => count + 1);
      props.setArrPressupost((prevArr) => [...prevArr, pressupost]);
      resetPressupost();
      event.target.reset();
      setIsPanel(false);
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }
  };

  return (
    <PressupostContext.Provider value={[pressupost, setPressupost]}>
      {showInfo && (
        <InfoMessage name={showInfo.name} onConfirm={closeHandler} />
      )}
      <div className={classes.inputGeneral}>
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
          <p className={classes.preuTotal}>Preu: <span>{pressupost.total}&euro;</span></p>
          {isSubmit && !pressupost.total && (
            <p className={classes.warning}>***Por favor, indica peticiones</p>
          )}
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
            {isSubmit && !pressupost.nomPressupost && (
              <p className={classes.warning}>
                ***Por favor, indica el nombre de presupuesto
              </p>
            )}
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
            {isSubmit && !pressupost.nomClient && (
              <p className={classes.warning}>
                ***Por favor, indica el nombre del cliente
              </p>
            )}
          </div>
          <Button type="submit" className={classes.saveButton}>
            Guardar
          </Button>
        </form>
      </div>
    </PressupostContext.Provider>
  );
};

export default InputPressupost;
