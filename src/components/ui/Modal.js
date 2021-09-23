import styled from "styled-components";

const BackgroundScreenStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
`;

const MessageNameStyle = styled.div`
  position: fixed;
  border-radius: 5px;
  border: 2px solid black;
  padding: 2.5% 5%;
  top: 40vh;
  left: 10%;
  width: 50%;
  z-index: 100;
  overflow: hidden;
  background-color: beige;
  span {
    color: red;
  }
`;

export const BackgroundScreen = (props) => {
  return <BackgroundScreenStyle onClick={props.onConfirm}>{props.children}</BackgroundScreenStyle>;
};
export const MainMessage = (props) => {
  return <MessageNameStyle>{props.children}</MessageNameStyle>;
};
