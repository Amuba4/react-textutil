import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componants/Navbar";
import TextForm from "./componants/TextForm"
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="Mywebsite" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextForm heading="Enter the text below"/>
      </div>

    </>
  );
}

export default App;
