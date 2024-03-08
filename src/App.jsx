import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const [calvalue, setCalValue] = useState("");

 const onButtonClick = (buttonText) => {
      if (buttonText === 'C') {

        setCalValue("")
        
      }else if(buttonText === '='){
        const result = eval(calvalue)
        setCalValue(result)
      }else{
        const newDiplayvalue  = calvalue+buttonText
        setCalValue(newDiplayvalue)
      }
  }
  return (
    <>
      <div className="main-container">
        <Display calvalue={calvalue}></Display>
        <Button  onButtonClick={onButtonClick}></Button>
      </div>
    </>
  );
}

export default App;
