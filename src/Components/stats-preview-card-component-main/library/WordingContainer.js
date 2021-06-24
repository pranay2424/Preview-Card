import styled from "styled-components";

const WordingContainer = styled.div`
  @media only screen and (max-width:550px){
    display: flex;
    width: 100%;
    align-items: center;
    justify-content:center;
    margin-top: 20px;

}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  padding: 0%;
  margin: 0%;
  background-color: inherit;
  font-family: sans-serif;
  font-weight: 400, 700;
 
  h1 {
    margin: 0%;
    color: hsl(0, 0%, 100%);  
    text-align: center;
  }
  span {
    color: purple;  
  }
`;

export default WordingContainer;
