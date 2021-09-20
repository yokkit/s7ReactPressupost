import ShowPressupostItem from "./ShowPressupostItem";
import styled from "styled-components";

const ShowPressupostStyle = styled.div`
  background-color:rgba(255,165,0, .6);
  padding: 1% 3%;
  margin: 4% 2%;
  border-radius: 10px;
`;

const ShowPressupost = (props) => {
  return (
    <div>
    <ShowPressupostStyle>
      {props.arrPressupost.map((pressupost) => (
        <ShowPressupostItem key={"_" + Math.random().toString(36).substr(2, 9)} pressupost={pressupost}></ShowPressupostItem>
      ))}
    </ShowPressupostStyle>
    </div>
  );
}

export default ShowPressupost;

