import React from "react";
import GeneralDetails from "./GeneralDetails";
import Profile from "./Profile";
import Education from "./Education";

export default function ResumeForm() {
  const [formElement, setFormElement] = React.useState(1);

  function next() {
    setFormElement((prev) => prev + 1);
  }

  function back() {
    setFormElement((prev) => prev - 1);
  }

  function handleChange(e) {
    const { name, value } = e.target;
  }

  console.log(formElement);

  return (
    <section className="resumeform">
      {formElement === 1 && (
        <GeneralDetails
          handleClick={next}
          handleChange={handleChange}
        ></GeneralDetails>
      )}
      {formElement === 2 && <Profile handleClick={next} />}
      {formElement === 3 && <Education handleClick={next} />}
      <div className="formNavigationButtons">
        {formElement !== 1 && <button onClick={back}>BACK</button>}
        <button onClick={next} className="next">
          NEXT
        </button>
      </div>
    </section>
  );
}
