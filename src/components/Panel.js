import styled from "styled-components";

const Panel = styled.div`
    width:300px;
    background-color: beige;
    border-radius: 5px;
    border: solid black 2px;
    margin: .5rem;
    padding: 1rem;
    display: flex-start;
    align-items:center;
    .numPaginasItem, .numIdiomasItem {
        button {
            border: 1px solid orange;
            border-radius: 5px;
            color : white;
            background-color: orange;
            margin:.5rem;
            width: 30px;
            height: 30px;
            font-size: 20px;
        }
        input {
            width: 35px;
            height: 20px;
            border: none;
            background-color: transparent;
        }
    }
`;

export default Panel;
