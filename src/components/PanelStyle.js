import styled from "styled-components";

const PanelStyle = styled.div`
  width: 300px;
  background-color: beige;
  border-radius: 5px;
  border: solid black 2px;
  margin: 0.5rem;
  padding: 1rem;
  display: flex-start;
  align-items: center;
  .numPaginasItem,
  .numIdiomasItem {
    button {
      border: 1px solid orange;
      border-radius: 5px;
      color: white;
      background-color: orange;
      margin: 0.5rem;
      width: 30px;
      height: 30px;
      font-size: 20px;
      cursor: pointer;
      cursor: hand;
    }
    input {
      width: 35px;
      height: 20px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      cursor: hand;
    }
  }
  .infoIcon {
    display: inline-block;
    color: beige;
    border: 1px grey solid;
    background-color: grey;
    padding: 0 8px;
    border-radius: 10px;
    text-align: center;
    position: relative;
    font-size: 15px;
    cursor: pointer;
    cursor: hand;
    &::after {
      content: "";
      position: absolute;
      margin: 0;
      bottom: -3px;
      left: -2px;
      width: 0;
      height: 0;
      border-top: 7px solid grey;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      transform: rotate(30deg);
    }
  }
`;

export default PanelStyle;
