import { useState, useEffect, createContext } from "react";
import Panel from "./Panel";
import Button from "../ui/Button";
import InfoMessage from "./InfoMessage";
import classes from "./InputPressupost.module.css";

export const PressupostContext = createContext();

const InputPressupost = (props) => {
  const currentUrl = new URL(window.location.href);
  const paramsString = currentUrl.search;
  const searchParams = new URLSearchParams(paramsString);

  const [pressupost, setPressupost] = useState({
    idNum: 0,
    total: parseInt(searchParams.get("total"))
      ? parseInt(searchParams.get("total"))
      : 0,
    numPaginas: parseInt(searchParams.get("numPaginas"))
      ? parseInt(searchParams.get("numPaginas"))
      : 0,
    numIdiomas: parseInt(searchParams.get("numIdiomas"))
      ? parseInt(searchParams.get("numIdiomas"))
      : 0,
    preuWeb: parseInt(searchParams.get("preuWeb"))
      ? parseInt(searchParams.get("preuWeb"))
      : 0,
    preuConsult: parseInt(searchParams.get("preuConsult"))
      ? parseInt(searchParams.get("preuConsult"))
      : 0,
    preuAds: parseInt(searchParams.get("preuAds"))
      ? parseInt(searchParams.get("preuAds"))
      : 0,
    nomPressupost: searchParams.get("nomPressupost")
      ? searchParams.get("nomPressupost")
      : "",
    nomClient: searchParams.get("nomClient")
      ? searchParams.get("nomClient")
      : "",
  });
  const [isPanel, setIsPanel] = useState(
    searchParams.get("numIdiomas") === "0" &&
      searchParams.get("numPaginas") === "0"
      ? false
      : true
  );
  const [showInfo, setShowInfo] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [count, setCount] = useState(props.arrPressupost.length);

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

  const storeLocalstorageItems = () => {
    for (let key in pressupost) {
      let value = pressupost[key];
      localStorage.setItem(key, value);
    }
  };

  const storeLocalStorageArray = (arr) => {
    localStorage.setItem("pressupostList", JSON.stringify(arr));
  };

  const generateURLRealtime = () => {
    const url = `?preuWeb=${pressupost.preuWeb}&numPaginas=${pressupost.numPaginas}&numIdiomas=${pressupost.numIdiomas}&preuConsult=${pressupost.preuConsult}&preuAds=${pressupost.preuAds}&total=${pressupost.total}&nomPressupost=${pressupost.nomPressupost}&nomClient=${pressupost.nomClient}`;
    window.history.pushState("Object", "Title", url);
  };

  useEffect(() => {
    storeLocalStorageArray(props.arrPressupost);
  }, [props.arrPressupost]);

  useEffect(
    () => {
      addTotalAmount();
      storeLocalstorageItems();
      generateURLRealtime();
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
              defaultChecked={Boolean(pressupost.preuWeb)}
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
              defaultChecked={Boolean(pressupost.preuConsult)}
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
              defaultChecked={Boolean(pressupost.preuAds)}
              onClick={valueHandlerAds}
            />
            <label htmlFor="ads">Una campaña de Google Ads (200&euro;)</label>
          </div>
          <p className={classes.preuTotal}>
            Preu: <span>{pressupost.total}&euro;</span>
          </p>
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
              defaultValue={pressupost.nomPressupost}
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
              defaultValue={pressupost.nomClient}
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
