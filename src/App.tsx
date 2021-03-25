import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CustomInput from "./components/custom-input/"

function App() {
  const [name, setName] = useState("Hugo")
  const [lastName, setLastName] = useState("Diaz")
  const customStyle = {background: "red", color: "white"};
  const customStyle2 = {background: "orange", color: "black"};

  const handleChangeName = (event:any) => 
    setName(event.target.value.toUpperCase())

  const handleChangeLastName = (event:any) => 
    setLastName(event.target.value.toLowerCase())

  return (
    <div className="App">
      <h1> Hola {name} {lastName}!</h1>
      <CustomInput value={name} onChange={handleChangeName} customStyle={customStyle}></CustomInput>
      <CustomInput value={lastName} onChange={handleChangeLastName} customStyle={customStyle2}></CustomInput>
    </div>
  );
}

export default App;
