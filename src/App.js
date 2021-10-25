import {createGlobalStyle} from "styled-components";
import Background from "./components/background/index";
import ProfileCard from "./containers/ProfileCard/index"
import "./App.css"


const Global = createGlobalStyle`

  * {
    font-family: 'Kumbh Sans', sans-serif;
    box-sizing: border-box;
  }

  body,
  .root {
    background-color: hsl(185, 75%, 39%);
    display: flex;
    flex-direction: column;
    align-items: center;
    vertical-align: center;
    overflow: hidden;
  }

`


function App() {
    return (
        <>
            <Global/>
            <Background/>
            <ProfileCard/>
        </>
    );
}

export default App;
