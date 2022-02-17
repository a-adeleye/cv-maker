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

  function validate() {
    if (
      formData.institution === "" ||
      formData.course === "" ||
      formData.yearFrom === "" ||
      formData.yearTo === ""
    ) {
      return false;
    } return true;
  }

  function navCheck() {
    if(validate() || education.length !== 0){
      return true;
    } return false;
  }

  function addEducation() {
    if (validate()) {
      setEducation((prevEdu) => [...prevEdu, formData]);
      reset();
    }
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

  function EducationNavigation(props) {
    const { validate} = props;
    return (
      <div className="formNavigation">
        <Link to="/resumeform/profile" style={{ textDecoration: "none" }}>
          <button>BACK</button>
        </Link>
        {validate && (
          <button className="next" onClick={previewEducation}>
            NEXT
          </button>
        )}
        {!validate && (
          <Link to="/resumeform/experience" style={{ textDecoration: "none" }}>
            <button className="next">NEXT</button>
          </Link>
        )}
      </div>
    );
  }

  function PreviewNavigation() {
    return (
      <div className="formNavigation">
        <button onClick={previewEducation}>BACK</button>
        <Link to="/resumeform/experience" style={{ textDecoration: "none" }}>
          <button>NEXT</button>
        </Link>
      </div>
    );
  }

  function previewEducation() {
    if (validate()) {
      addEducation();
    }
    setPreview((prev) => (prev = !prev));
  }

  function EducationPreview(props) {
    const { institution, course, yearFrom, yearTo, id } = props;

    return (
      <div>
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
      </div>
    );
  }

  const educationItems = (
    <fieldset className="educationPreview">
      <legend>EDUCATION</legend>
      {education.map((edu) => (
        <EducationPreview
          key={edu.id}
          institution={edu.institution}
          course={edu.course}
          yearFrom={edu.yearFrom}
          yearTo={edu.yearTo}
        />
      ))}
      <button className="addInputButton" onClick={previewEducation}>
        <i className="fas fa-plus"></i> add another education
      </button>
    </fieldset>
  );
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
      {!preview && <EducationNavigation validate={navCheck()} education={education}/>}
      {preview && <PreviewNavigation />}
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
