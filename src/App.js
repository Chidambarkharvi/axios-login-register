import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import React from "react";

import Error from "./components/Error";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";



function App() {
  return (
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route  path="/" element={<Login />}/>
          <Route  path="/home" element={<Home />} />
          <Route  path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
