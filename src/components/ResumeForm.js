import React from "react";
import GeneralDetails from "./GeneralDetails";
import Profile from "./Profile";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preview from "./Preview";

function FormNavigation(props) {
  return (
    <div className="formNavigationButtons">
      {props.formElement !== 1 && <button onClick={props.back}>BACK</button>}
      {props.formElement !== 5 && (
        <button onClick={props.next} className="next">
          NEXT
        </button>
      )}
      <Link to="/preview" style={{textDecoration: "none"}}>
        {props.formElement === 5 && (
          <button onClick={props.next} className="next">
            PREVIEW
          </button>
        )}
      </Link>
    </div>
  );
}

export default function ResumeForm() {
  const [formElement, setFormElement] = React.useState(1);

  function next() {
    setFormElement((prev) => prev + 1);
  }

  function back() {
    setFormElement((prev) => prev - 1);
  }

  return (
    <section className="resumeform">
      <h1>Here</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/generaldetails" element={<GeneralDetails />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/experiences" element={<Experience />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/preview" element={<Preview />}></Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
}
