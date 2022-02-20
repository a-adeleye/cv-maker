import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStorage } from "./localstorage";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import {
  selectEducation,
  addEducations,
  saveEditedEducation,
  deleteEducations,
} from "../resumeSlice";

function EducationInputs(props) {
  const { handleChange, formData, addEducation } = props;

  function generateArrayOfYears() {
    var max = new Date().getFullYear();
    var min = max - 50;
    var years = [];

    for (var i = max; i >= min; i--) {
      years.push(i);
    }
    return years;
  }

  const years = generateArrayOfYears();

  return (
    <fieldset className="one-column">
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
          <select
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}
          ><option>...select</option>
            {years.map((year) => (
              <option key={nanoid()}>{year}</option>
            ))}
          </select>
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
  );
}

export default function Education() {
  const education = useSelector(selectEducation);
  const dispatch = useDispatch();

  const [formData, setFormData] = React.useState({
    id: nanoid(),
    institution: "",
    course: "",
    graduationYear: "",
    cs: false,
  });

  const [editingOn, setEditingOn] = React.useState(false);
  const [preview, setPreview] = React.useState(false);

  React.useEffect(() => {
    let savedData = JSON.parse(localStorage.getItem("resumeState"));
    let newData = { ...savedData, education: education };
    updateStorage(newData);
  }, [education]);

  function deleteEducation(e) {
    dispatch(deleteEducations(e.target.id));
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
    if (education.length) {
      return true;
    }
    if (
      formData.institution === "" ||
      formData.course === "" ||
      formData.graduationYear === ""
    ) {
      return false;
    }
    return true;
  }

  function saveEdit() {
    dispatch(saveEditedEducation(formData));
    reset();
    toggleEditing();
  }

  function addEducation() {
    if (validate()) {
      dispatch(addEducations(formData));
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
        {!validate() && <button className="next">NEXT</button>}
        {validate() && (
          <button className="next" onClick={previewEducation}>
            NEXT
          </button>
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
    if (validate() && !formData.institution) {
      setPreview((prev) => (prev = !prev));
      return;
    }
    if (validate()) {
      editingOn ? saveEdit() : addEducation();
      setPreview((prev) => (prev = !prev));
    }
  }

  function EducationPreview(props) {
    const { institution, course, graduationYear, id, number } = props;

    return (
      <div className="three-columns">
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
      key={nanoid()}
      id={edu.id}
      institution={edu.institution}
      course={edu.course}
      graduationYear={edu.graduationYear}
      number={index + 1}
    />
  ));

  const educationItems = (
    <fieldset>
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
          addEducation={editingOn ? saveEdit : addEducation}
        ></EducationInputs>
      )}
      {preview && educationItems}
      {!preview && <EducationNavigation validate={validate} />}
      {preview && <PreviewNavigation />}
    </div>
  );
}
