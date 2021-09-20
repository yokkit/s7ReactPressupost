import { useState } from "react";
import styled from "styled-components";
import InputPressupost from "../components/input/InputPressupost";
import ShowPressupost from "../components/show/ShowPressupost";

const PressupostStyle = styled.div`
  display: flex;
  align-text: left;
  @media (max-width: 720px) {
    flex-flow: column;
  }
`;
const Pressupost = () => {
  const [arrPressupost, setArrPressupost] = useState([]);
  return (
    <PressupostStyle>
      <InputPressupost
        arrPressupost={arrPressupost}
        setArrPressupost={setArrPressupost}
      />
      <ShowPressupost arrPressupost={arrPressupost} />
    </PressupostStyle>
  );
};

export default Pressupost;
