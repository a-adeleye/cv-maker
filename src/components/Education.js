import React from "react";
import FormNavigation from "./FormNavigation";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

function EducationInputs(props) {
  const { handleChange, formData, addEducation } = props;

  return (
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
        <input
          name="yearFrom"
          type="date"
          value={formData.yearFrom}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        To
        <input
          name="yearTo"
          type="date"
          value={formData.yearTo}
          onChange={handleChange}
        ></input>
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
  );
}

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

  const [preview, setPreview] = React.useState(false);

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
      return {
        ...prevData,
        institution: "",
        course: "",
        yearFrom: "",
        yearTo: "",
        cs: false,
      };
    });
  }

  function EducationNavigation() {
    return (
      <div className="formNavigation">
        <Link to="/resumeform/profile" style={{ textDecoration: "none" }}>
          <button>BACK</button>
        </Link>
        <button className="next" onClick={previewEducation}>
          PREVIEW
        </button>
      </div>
    );
  }

  function previewEducation() {
    setPreview((prev) => (prev = !prev));
  }

  function EducationPreview(props) {
    const { institution, course, yearFrom, yearTo } = props;

    return (
      <fieldset className="educationPreview">
        <legend>EDUCATION</legend>
        <p>
          <strong>Institution</strong>: {institution}
        </p>
        <p>
          <strong>Course</strong>: {course}
        </p>
        <p>
          <strong>From</strong>: {yearFrom}
        </p>
        <p>
          <strong>To</strong>: {yearTo}
        </p>

        <button className="addInputButton" onClick={addEducation}>
          <i className="fas fa-plus"></i> add another education
        </button>
      </fieldset>
    );
  }

  const educationItems = education.map(edu => <EducationPreview institution = {edu.institution} course = {edu.course} yearFrom = {edu.yearFrom} yearTo = {edu.yearTo} />);

  return (
    <div className="education">
      {!preview && (
        <EducationInputs
          formData={formData}
          handleChange={handleChange}
          addEducation={addEducation}
        ></EducationInputs>
      )}
      {preview && educationItems}
      <EducationNavigation />
    </div>
  );
}

/*
 <FormNavigation
        back="/resumeform/profile"
        next="/resumeform/experience"
        text="NEXT"
      />

*/
