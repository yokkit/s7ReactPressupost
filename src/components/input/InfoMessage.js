import React from "react";
import { BackgroundScreen, MainMessage } from "../ui/Modal";

const InfoMessage = (props) => {
  return (
    <React.Fragment>
      <BackgroundScreen onConfirm={props.onConfirm}></BackgroundScreen>
      <MainMessage name={props.name}>
        <p>
          En este componente debe indicar el <span>{props.name}</span> que
          tendrá su sitio web.
        </p>
      </MainMessage>
    </React.Fragment>
  );
};

export default InfoMessage;
