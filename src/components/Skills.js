import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStorage } from "./localstorage";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { addSkills, selectSkills, deleteSkills } from "../resumeSlice";

export default function Skills() {
  const skills = useSelector(selectSkills);
  const dispatch = useDispatch();

  const [tempSkills, setTempSkills] = React.useState({ id: "", text: "" });

  function handleChange(e) {
    const { value } = e.target;
    setTempSkills((prevSkill) => {
      return { id: nanoid(), text: value };
    });
  }

  function addSkill() {
    if (tempSkills.text !== "") {
      dispatch(addSkills(tempSkills));
      reset();
    }
  }

  React.useEffect(() => {
    let savedData = JSON.parse(localStorage.getItem("resumeState"));
    let newData = {...savedData, skills: skills}
    updateStorage(newData)
  },[skills])

  function deleteSkill(e) {
    dispatch(deleteSkills(e.target.id));
  }

  function reset() {
    setTempSkills((prevSkill) => {
      return { id: nanoid(), text: "" };
    });
  }

  function FormNavigation() {
    return (
      <div className="formNavigation">
        <Link
          to="/resumeform/experience"
          style={{
            textDecoration: "none",
          }}
        >
          <button>BACK</button>
        </Link>

        <Link
          to="/resumeform/certifications"
          style={{
            textDecoration: "none",
          }}
        >
          <button className="next">NEXT</button>
        </Link>
      </div>
    );
  }

  const skillList = skills.map((skill) => (
    <li key={nanoid()} id={skill.id} className="list-item">
      {skill.text}
      <span id={skill.id} onClick={deleteSkill}>
        <i className="fas fa-trash"></i>
      </span>
    </li>
  ));

  return (
    <section className="skills">
      <fieldset className="one-column">
        <legend>SKILLS</legend>
        <label>
          Skill
          <input
            type="text"
            value={tempSkills.text}
            onChange={handleChange}
          ></input>
        </label>
        <ul>
          {skillList}
        </ul>
        <button className="addInputButton" onClick={() => addSkill()}>
          <i className="fas fa-plus"></i> add skill
        </button>
      </fieldset>
      <FormNavigation />
    </section>
  );
}
