import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import {
  addExperiences,
  deleteExperiences,
  saveEditedExperience,
  selectExperience,
} from "../resumeSlice";

function ExperienceInput(props) {
  const {
    handleChange,
    handleResponsibility,
    addExperience,
    addResponsibility,
    responsibility,
    deleteResponsibility,
    data,
  } = props;

  const responsibilityList = data.responsibilities.map((resp, index) => (
    <li key={data.id + index} id={index} className="list-item">
      {resp}
      <span>
        <i
          className="fas fa-trash"
          id={index}
          onClick={deleteResponsibility}
        ></i>
      </span>
    </li>
  ));

  return (
    <fieldset className="two-columns">
      <legend>EXPERIENCE</legend>
      <label>
        Role
        <input
          name="role"
          type="text"
          value={data.role}
          onChange={handleChange}
          placeholder="Chief Executive Officer"
        ></input>
      </label>
      <label>
        Company
        <input
          name="company"
          type="text"
          value={data.company}
          onChange={handleChange}
          placeholder="Google"
        ></input>
      </label>

      <label>
        From
        <input
          name="fromDate"
          type="date"
          value={data.fromDate}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        To
        <input
          name="toDate"
          type="date"
          value={data.toDate}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        I currently work here
        <input name="toDate" type="checkbox" onChange={handleChange}></input>
      </label>

      <div className="responsibilities">
        <label>
          Responsibility
          <input
            type="text"
            value={responsibility}
            onChange={handleResponsibility}
          ></input>
        </label>
      </div>
      <div className="responsibilities">
        <div>
          <ul>{responsibilityList}</ul>
        </div>
        <button className="responsibility-button" onClick={addResponsibility}>
          <i className="fas fa-plus"></i> add responsibility
        </button>
      </div>
      <button className="addInputButton" onClick={addExperience}>
        <i className="fas fa-plus"></i> add another experience
      </button>
    </fieldset>
  );
}

export default function Experience() {
  const experience = useSelector(selectExperience);
  const dispatch = useDispatch();

  const [formData, setFormData] = React.useState({
    id: nanoid(),
    role: "",
    company: "",
    fromDate: "",
    toDate: "",
    cw: false,
    responsibilities: [],
  });

  const [responsibility, setResponsibility] = React.useState("");

  const [editingOn, setEditingOn] = React.useState(false);

  function handleChange(e) {
    const { name, value, type } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? "present" : value,
      };
    });
  }

  function handleResponsibility(e) {
    const { value } = e.target;
    setResponsibility((prevData) => (prevData = value));
  }

  function addExperience() {
    if (validate()) {
      dispatch(addExperiences(formData));
      resetFormData();
    }
  }

  function addResponsibility(e) {
    setFormData((prevData) => {
      return {
        ...prevData,
        responsibilities: [...prevData.responsibilities, responsibility],
      };
    });
    resetResponsibility();
  }

  function resetResponsibility() {
    setResponsibility((prev) => (prev = ""));
  }

  function resetFormData() {
    setFormData(
      (prevData) =>
        (prevData = {
          id: nanoid(),
          role: "",
          company: "",
          fromDate: "",
          toDate: "",
          cw: false,
          responsibilities: [],
        })
    );
  }

  function validate() {
    const { role, company, fromDate, toDate } = formData;
    if (role === "" || company === "" || fromDate === "" || toDate === "") {
      return false;
    }
    return true;
  }

  function deleteExperience(e) {
    dispatch(deleteExperiences(e.target.id));
  }

  function editExperience(e) {
    const { id } = e.target;
    setPreview((prev) => (prev = !prev));
    toggleEditing();
    let newArray = experience.filter((exp) => exp.id === id);
    setFormData(
      (prevData) =>
        (prevData = {
          ...formData,
          id: newArray[0].id,
          role: newArray[0].role,
          company: newArray[0].company,
          fromDate: newArray[0].fromDate,
          toDate: newArray[0].toDate,
          cw: newArray[0].cw,
          responsibilities: newArray[0].responsibilities,
        })
    );
  }

  function saveEditExperience() {
    dispatch(saveEditedExperience(formData));
    resetFormData();
    toggleEditing();
  }

  function toggleEditing() {
    setEditingOn((prevEdit) => (prevEdit = !prevEdit));
  }

  function deleteResponsibility(e) {
    const { id } = e.target;
    let newArray = [...formData.responsibilities];
    newArray.splice(id, 1);
    setFormData((prevData) => {
      return { ...prevData, responsibilities: newArray };
    });
  }

  const [preview, setPreview] = React.useState(false);

  function PreviewExperience(props) {
    const { role, company, from, to, responsibilities, number, id } = props;
    return (
      <div className="three-columns">
        <h4>{number}</h4>
        <details>
          <summary>
            <strong>{role}</strong>
          </summary>
          <p>
            <small>{company}</small>
          </p>
          <p>
            <small>
              {from} to {to}
            </small>
          </p>
          <ul>
            {responsibilities.map((responsibility, index) => (
              <li key={id + responsibility} id={index}>
                {responsibility}
              </li>
            ))}
          </ul>
        </details>
        <div>
          <span>
            <i className="fas fa-edit" id={id} onClick={editExperience}></i>
          </span>
          <span>
            <i className="fas fa-trash" id={id} onClick={deleteExperience}></i>
          </span>
        </div>
      </div>
    );
  }

  const experienceList = experience.map((exp, index) => (
    <PreviewExperience
      key={exp.id}
      id={exp.id}
      role={exp.role}
      company={exp.company}
      from={exp.fromDate}
      to={exp.toDate}
      responsibilities={exp.responsibilities}
      number={index + 1}
    />
  ));

  function ExperienceItems() {
    return (
      <fieldset>
        <legend>EXPERIENCE</legend>
        {experienceList}
        <button className="addInputButton" onClick={previewExperience}>
          <i className="fas fa-plus"></i> add more experience
        </button>
      </fieldset>
    );
  }

  function ExperienceNavigation() {
    return (
      <div className="formNavigation">
        <Link to="/resumeform/education" style={{ textDecoration: "none" }}>
          <button>BACK</button>
        </Link>

        {validate && (
          <button className="next" onClick={previewExperience}>
            NEXT
          </button>
        )}

        {!validate && (
          <Link to="/resumeform/skill" style={{ textDecoration: "none" }}>
            <button className="next">NEXT</button>
          </Link>
        )}
      </div>
    );
  }

  function PreviewNavigation() {
    return (
      <div className="formNavigation">
        <button onClick={previewExperience}>BACK</button>
        <Link to="/resumeform/skill" style={{ textDecoration: "none" }}>
          <button className="next">NEXT</button>
        </Link>
      </div>
    );
  }

  function previewExperience() {
    if (validate()) {
      editingOn ? saveEditExperience() : addExperience();
    }
    setPreview((prev) => (prev = !prev));
  }

  return (
    <section className="experience">
      {!preview && (
        <ExperienceInput
          data={formData}
          handleChange={handleChange}
          handleResponsibility={handleResponsibility}
          addResponsibility={addResponsibility}
          responsibility={responsibility}
          addExperience={editingOn ? saveEditExperience : addExperience}
          deleteResponsibility={deleteResponsibility}
        ></ExperienceInput>
      )}
      {preview && <ExperienceItems />}
      {!preview && <ExperienceNavigation />}
      {preview && <PreviewNavigation />}
    </section>
  );
}
