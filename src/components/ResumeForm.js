import React from "react";
import GeneralDetails from "./GeneralDetails";
import Profile from "./Profile";
import Education from "./Education";
import { Experience } from "./Experience";

function FormNavigation(props) {
  return (
    <div className="formNavigationButtons">
      {props.formElement !== 1 && <button onClick={props.back}>BACK</button>}
      <button onClick={props.next} className="next">
        NEXT
      </button>
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
      <FormNavigation
        formElement={formElement}
        back={back}
        next={next}
      ></FormNavigation>
    </section>
  );
}
