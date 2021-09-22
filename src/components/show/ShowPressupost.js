import React, { useState, useEffect } from "react";
import ShowPressupostItem from "./ShowPressupostItem";
import styled from "styled-components";
import Button from "../ui/Button";

const ShowPressupostStyle = styled.div`
  background-color: rgba(255, 165, 0, 0.6);
  padding: 1% 3%;
  margin: 2% 1%;
  border-radius: 10px;
  flex-grow: 3;
`;

const ButtonsArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const SearchInputStyle = styled.div`
  margin: 3% 0;
  input {
    width: 300px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid orange;
  }
`;

const ShowPressupost = (props) => {
  const [orderKey, setOrderKey] = useState(0);
  const [searchWords, setSearchWords] = useState("");
  const [filteredArr, setFilteredArr] = useState([]);

  useEffect(
    () => {
      const sortArray = (key, arr) => {
        const keys = {
          az: "nomPressupost",
          totalAm: "total",
          reset: "idNum",
        };
        const sortProperty = keys[key];
        const sorted = [...arr].sort((item1, item2) => {
          let x = item1[sortProperty];
          let y = item2[sortProperty];
          return x < y ? -1 : x > y ? 1 : 0;
        });
        return sorted;
      };
      let sortedArr;
      if (filteredArr.length > 0) {
        sortedArr = sortArray(orderKey, filteredArr);
        setFilteredArr(sortedArr);
      } else {
        sortedArr = sortArray(orderKey, props.arrPressupost);
        props.setArrPressupost(sortedArr);
      }
    },
    // eslint-disable-next-line
    [orderKey]
  );

  const searchWordsHandler = (event) => {
    let words = event.target.value.toUpperCase();
    setSearchWords(words);
  };

  useEffect(
    () => {
      const filterArray = (words) => {
        const filtered = [...props.arrPressupost].filter((item) =>
          item.nomPressupost.includes(words)
        );
        setFilteredArr(filtered);
      };
      if (searchWords.length > 0) {
        filterArray(searchWords);
      } else {
        setFilteredArr([]);
      }
      return () => {};
    },
    // eslint-disable-next-line
    [searchWords]
  );

  return (
    <React.Fragment>
      {/* {props.arrPressupost.length > 0 &&  */}
      {/* ( */}
      <ShowPressupostStyle>
        <ButtonsArea>
          <Button
            type="button"
            value="az"
            onClick={(e) => setOrderKey(e.target.value)}
          >
            Ordenar por A-Z
          </Button>
          <Button
            type="button"
            value="totalAm"
            onClick={(e) => setOrderKey(e.target.value)}
          >
            Ordenar por &euro; Total
          </Button>
          <Button
            type="button"
            value="reset"
            onClick={(e) => setOrderKey(e.target.value)}
          >
            Ordenar por inicio
          </Button>
        </ButtonsArea>
        <SearchInputStyle>
          <input
            type="text"
            placeholder="Buscar presupuesto..."
            onChange={searchWordsHandler}
          />
        </SearchInputStyle>
        {filteredArr.length === 0
          ? props.arrPressupost.map((pressupost) => (
              <ShowPressupostItem
                key={pressupost.idNum}
                pressupost={pressupost}
              ></ShowPressupostItem>
            ))
          : filteredArr.map((pressupost) => (
              <ShowPressupostItem
                key={pressupost.idNum}
                pressupost={pressupost}
              ></ShowPressupostItem>
            ))}
      </ShowPressupostStyle>
      {/* ) */}
      {/* } */}
    </React.Fragment>
  );
};

export default ShowPressupost;
