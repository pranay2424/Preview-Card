import styled from "styled-components";

const Wording = styled.div`
  @media only screen and (max-width:550px){
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content:center;

}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  margin-top: 70px;
  padding: 0%;
  margin: 0%;
  background-color: inherit;
  font-family: sans-serif;
  font-weight: 400;
  height: calc(80% - 70px);
  h2{
      color: #fff
  }
  p {
    color: hsla(0, 0%, 100%, 0.75);
    font-size: 15px;
    flex-wrap: wrap;
    font-family: sans-serif;
    font-weight: 400;
    
    text-align: center;
  }
  `;

export default Wording;
