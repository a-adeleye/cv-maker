import React from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Templates from "./components/Templates";
import ResumeForm from "./components/ResumeForm";
import GeneralDetails from "./components/GeneralDetails";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Preview from "./components/Preview";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter basename="/">
      <Header />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="templates" element={<Templates />}></Route>
          <Route path="generaldetails" element={<GeneralDetails />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="education" element={<Education />}></Route>
          <Route path="experience" element={<Experience />}></Route>
          <Route path="skills" element={<Skills />}></Route>
          <Route path="preview" element={<Preview />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
