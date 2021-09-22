import { useState } from "react";
import styled from "styled-components";
import InputPressupost from "../components/input/InputPressupost";
import ShowPressupost from "../components/show/ShowPressupost";

const PressupostStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 95%;
  margin: auto;
`;
const Pressupost = () => {
  const [arrPressupost, setArrPressupost] = useState(
    localStorage.getItem("pressupostList")
      ? JSON.parse(localStorage.getItem("pressupostList"))
      : []
  );

  return (
    <PressupostStyle>
      <InputPressupost
        arrPressupost={arrPressupost}
        setArrPressupost={setArrPressupost}
      />
      <ShowPressupost
        arrPressupost={arrPressupost}
        setArrPressupost={setArrPressupost}
      />
    </PressupostStyle>
  );
};

export default Pressupost;
