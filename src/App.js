import React, { useRef, useState, useEffect } from "react";
import SearchContainer from "./Components/SearchContainer/SearchContainer";
import ColorContainer from "./Components/ColorContainer/ColorContainer";
import AllColorsContainer from "./Components/AllColorsContainer/AllColorsContainer";
import { Fragment } from "react";
import Values from "values.js";

function App() {
 
  const [color,setColor] = useState("");
  const [colorList, setColorList] = useState([]);
  const colorRef = useRef("");

  const searchColor = () => {
    setColor(colorRef.current.value);
    colorRef.current.value = "";
  }

  const clickColor = (event) => {
    setColor(event.target.value);
  }

  useEffect(()=>{
    try{
      if(color.length > 0){
        const list = new Values(color);
        setColorList(list.all(10));
      }
    } catch (error){
      alert("Color Not Found!");
    }
  },[color])

  return (
    <Fragment>
      <h1 style={{margin: '1rem'}}>Color-Picker:</h1>
      <SearchContainer ref={colorRef} onClick={()=>searchColor()}/>
      <ColorContainer onClick={(event)=>clickColor(event)}/>
      <AllColorsContainer list={colorList}/>
    </Fragment>
  );
}

export default App;
