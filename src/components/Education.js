import React from "react";
import FormNavigation from "./FormNavigation";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

function EducationInputs(props) {
  const { handleChange, formData, addEducation } = props;

  return (
    <div className="educationInputs">
      <fieldset>
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5em",
            flexBasis: "45%",
          }}
        >
          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="date"
              value={formData.graduationYear}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Still enrolled
            <input
              name="graduationYear"
              type="checkbox"
              value={formData.cs}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <label>
          &nbsp;
          <button className="addInputButton" onClick={addEducation}>
            <i className="fas fa-plus"></i> add another education
          </button>
        </label>
      </fieldset>
    </div>
  );
}

export default function Education() {
  const [education, setEducation] = React.useState([]);

  const [formData, setFormData] = React.useState({
    id: nanoid(),
    institution: "",
    course: "",
    graduationYear: "",
    cs: false,
  });

  const [editingOn, setEditingOn] = React.useState(false);

  const [preview, setPreview] = React.useState(false);

  function deleteEducation(e) {
    setEducation((prevEdu) => prevEdu.filter((edu) => edu.id !== e.target.id));
  }

  function toggleEditing() {
    setEditingOn((prevEdit) => (prevEdit = !prevEdit));
  }

  function editEducation(e) {
    const { id } = e.target;
    setPreview((prev) => (prev = !prev));
    toggleEditing();
    let newArray = education.filter((edu) => edu.id === id);
    setFormData(
      (prevData) =>
        (prevData = {
          ...formData,
          id: newArray[0].id,
          institution: newArray[0].institution,
          course: newArray[0].course,
          graduationYear: newArray[0].graduationYear,
          cs: newArray[0].cs,
        })
    );
  }

  function handleChange(e) {
    const { value, type, name } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? "still enrolled" : value,
      };
    });
  }

  function validate() {
    if (
      formData.institution === "" ||
      formData.course === "" ||
      formData.graduationYear === ""
    ) {
      return false;
    }
    return true;
  }

  function navCheck() {
    if (validate() || education.length !== 0) {
      return true;
    }
    return false;
  }

  function saveEditEducation() {
    setEducation((prevEdu) =>
      prevEdu.map((edu) =>
        edu.id === formData.id
          ? {
              ...edu,
              id: formData.id,
              institution: formData.institution,
              course: formData.course,
              graduationYear: formData.graduationYear,
              cs: formData.cs,
            }
          : edu
      )
    );
    reset();
    toggleEditing();
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
        id: nanoid(),
        institution: "",
        course: "",
        graduationYear: "",
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
          <button className="next">NEXT</button>
        </Link>
      </div>
    );
  }

  function previewEducation() {
    if (validate()) {
      editingOn ? saveEditEducation() : addEducation();
    }
    setPreview((prev) => (prev = !prev));
  }

  function EducationPreview(props) {
    const { institution, course, graduationYear, id, number } = props;

    return (
      <div className="education-preview">
        <h4>{number}</h4>
        <div>
          <p>
            <strong>Institution</strong>: {institution}
          </p>
          <p>
            <strong>Course</strong>: {course}
          </p>
          <p>
            <strong>Graduation year</strong>: {graduationYear}
          </p>
        </div>
        <div>
          <span onClick={editEducation}>
            <i className="fas fa-edit" id={id}></i>
          </span>
          <span onClick={deleteEducation}>
            <i className="fas fa-trash" id={id}></i>
          </span>
        </div>
      </div>
    );
  }

  const educationList = education.map((edu, index) => (
    <EducationPreview
      key={edu.id}
      id={edu.id}
      institution={edu.institution}
      course={edu.course}
      graduationYear={edu.graduationYear}
      number={index + 1}
    />
  ));

  const educationItems = (
    <fieldset className="educationPreview">
      <legend>EDUCATION</legend>
      {educationList}
      <button className="addInputButton" onClick={previewEducation}>
        <i className="fas fa-plus"></i> add more education
      </button>
    </fieldset>
  );
  return (
    <div className="education">
      {!preview && (
        <EducationInputs
          formData={formData}
          handleChange={handleChange}
          addEducation={editingOn ? saveEditEducation : addEducation}
        ></EducationInputs>
      )}
      {preview && educationItems}
      {!preview && (
        <EducationNavigation validate={navCheck()} />
      )}
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
