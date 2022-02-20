import React from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Templates from "./components/Templates";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  
  return (
    <BrowserRouter basename="/">
       <div className="App">
       <Header />
      <Routes>
       
        <Route path="/cv-maker" element={<Landing />}></Route>
        <Route path="/templates" element={<Templates />}></Route>
        <Route path="/resumeform/*" element={<Layout />}></Route>
        
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
