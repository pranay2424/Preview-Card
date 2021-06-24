import styled from 'styled-components';


const DesktopView = styled.div`

@media only screen and (max-width:550px){
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 100vh;
 
    
    
}
  
    display: flex;
    height: 100vh;
    width: 100vw;
    padding: 0%;
    margin: 0%;
    align-items: center;
    justify-content: center;
    background-color:hsl(233, 47%, 7%)
`

export default DesktopView;