import styled from "styled-components";

const States= styled.div`
  @media only screen and (max-width:550px){
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    margin-top: 20px;
    
    text-align: center;
}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0%;
  margin-top:70px;
  background-color: inherit;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 15px;
  height: auto;
  h2{
    margin: 0px;
  } 
  p{
    color: hsla(0, 0%, 100%, 0.6)
  }
 
  `

export default States
