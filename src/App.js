import './App.css';
import { useState } from 'react';
import Home from './Components/Home';
import Register from './Components/Register';
import React from 'react';

const App=()=> {

  const [register,setRegister]=useState(false)

  return (
    <>
      <Home />
      
    </>
  );
}

export default App;
