import React, { useState, useEffect } from "react";
import ShowPressupostItem from "./ShowPressupostItem";
import styled from "styled-components";
import Button from "../ui/Button";

const ShowPressupostStyle = styled.div`
  background-color: rgba(255, 165, 0, 0.6);
  padding: 1% 3%;
  margin: 2% 1%;
  border-radius: 10px;
  flex-grow: 2;
`;

const ButtonsArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ShowPressupost = (props) => {
  const [orderKey, setOrderKey] = useState(0);

  useEffect(() => {
    const sortArray = (key) => {
      const keys = {
        "az": "nomPressupost",
        "totalAm": "total",
        "reset": "idNum",
      };
      const sortProperty = keys[key];
      const sorted = [...props.arrPressupost].sort((item1, item2) => {
        let x = item1[sortProperty];
        let y = item2[sortProperty];
        return x < y ? -1 : x > y ? 1 : 0;
      });
      props.setArrPressupost(sorted);
    };
    sortArray(orderKey);
  },
  // eslint-disable-next-line
  [orderKey]);


  return (
    <React.Fragment>
      {props.arrPressupost.length > 0 && (
        <ShowPressupostStyle>
          <ButtonsArea>
            <Button type="button" value="az" onClick={e => setOrderKey(e.target.value)}>
              Ordenar por A-Z
            </Button>
            <Button type="button" value="totalAm" onClick={e => setOrderKey(e.target.value)}>
              Ordenar por &euro; Total
            </Button>
            <Button type="button" value="reset" onClick={e => setOrderKey(e.target.value)}>
              Ordenar por inicio
            </Button>
          </ButtonsArea>
          {props.arrPressupost.map((pressupost) => (
            <ShowPressupostItem
              key={pressupost.idNum}
              pressupost={pressupost}
            ></ShowPressupostItem>
          ))}
        </ShowPressupostStyle>
      )}
    </React.Fragment>
  );
};

export default ShowPressupost;
