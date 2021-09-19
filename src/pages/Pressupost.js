import { useState } from "react";
import styled from "styled-components";
import Provider from "../application/Provider";
import InputPressupost from "./InputPressupost";
import ShowPressupost from "./ShowPressupost";

const PressupostStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-text: left;
  margin: 5% 10%;
  @media (max-width: 450px) {
    flex-flow: column;
  }
`;
const Pressupost = () => {
  const [arrPressupost, setArrPressupost] = useState([]);
  return (
    <Provider>
      <PressupostStyle>
        <InputPressupost arrPressupost={arrPressupost} setArrPressupost={setArrPressupost}/>
        <ShowPressupost arrPressupost={arrPressupost}/>
      </PressupostStyle>
    </Provider>
  );
};

export default Pressupost;
