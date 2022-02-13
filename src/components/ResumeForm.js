import React from "react";
import GeneralDetails from "./GeneralDetails";
import Profile from "./Profile";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import { Link } from "react-router-dom";

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
      {formElement === 1 && <GeneralDetails />}
      {formElement === 2 && <Profile />}
      {formElement === 3 && <Education />}
      {formElement === 4 && <Experience />}
      {formElement === 5 && <Skills />}
      <FormNavigation
        formElement={formElement}
        back={back}
        next={next}
      ></FormNavigation>
    </section>
  );
}
