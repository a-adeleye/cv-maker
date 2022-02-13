import React from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Templates from "./components/Templates";
import ResumeForm from "./components/ResumeForm";

function App() {

  const [typeOne, setTypeOne] = React.useState(true);

  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="templates" element={<Templates />}></Route>
          <Route path="resumeform" element={<ResumeForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
