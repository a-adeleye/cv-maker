import React from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Templates from "./components/Templates";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/templates" element={<Templates />}></Route>
        <Route path="/resumeform/*" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
