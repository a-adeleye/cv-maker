import React from "react";
import FormNavigation from "./FormNavigation";
import { nanoid } from "nanoid";

export default function Education() {
  const [education, setEducation] = React.useState([]);

  const [formData, setFormData] = React.useState({
    id: nanoid(),
    institution: "",
    course: "",
    yearFrom: "",
    yearTo: "",
    cs: false,
  });

  function deleteEducation(e) {
    setEducation((prevEdu) => prevEdu.filter((edu) => edu.id !== e.target.id));
  }

  console.log(formData);
  console.log(education);

  function handleChange(e) {
    const { value, type, name } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? "still schooling" : value,
      };
    });
  }

  function addEducation() {
    setEducation((prevEdu) => [...prevEdu, formData]);
    reset();
  }

  function reset() {
    setFormData((prevData) => {
      return {...prevData, institution: "", course: "", yearFrom: "", yearTo: "", cs: false };
    });
  }

  return (
    <div className="education">
      <fieldset className="educationInputs">
        <legend>EDUCATION</legend>

        <label>
          Institution
          <input
            name="institution"
            type="text"
            value={formData.institution}
            onChange={handleChange}
            placeholder="Havard"
          ></input>
        </label>
        <label>
          Course
          <input
            name="course"
            type="text"
            value={formData.course}
            onChange={handleChange}
            placeholder="Computer Engineering"
          ></input>
        </label>

        <label>
          From
          <input name="yearFrom" type="date" value={formData.yearFrom} onChange={handleChange}></input>
        </label>
        <label>
          To
          <input name="yearTo" type="date" value={formData.yearTo} onChange={handleChange}></input>
        </label>
        <label>
          I've not graduated
          <input
            name="yearTo"
            type="checkbox"
            value={formData.cs}
            onChange={handleChange}
          ></input>
        </label>

        <button className="addInputButton" onClick={addEducation}>
          <i className="fas fa-plus"></i> add another education
        </button>
      </fieldset>
      <FormNavigation
        back="/resumeform/profile"
        next="/resumeform/experience"
        text="NEXT"
      />
    </div>
  );
}
