import React from "react";
import FormNavigation from "./FormNavigation";
import { nanoid } from "nanoid";

export default function Skills() {
  const [skills, setSkills] = React.useState([]);

  const [tempSkills, setTempSkills] = React.useState({ id: "", text: "" });

  function handleChange(e) {
    const { value } = e.target;
    setTempSkills((prevSkill) => {
      return { id: nanoid(), text: value };
    });
  }

  function addSkill() {
    if (tempSkills.text !== "") {
      setSkills((prevSkill) => [...prevSkill, tempSkills]);
      reset();
    }
  }

  function deleteSkill(e) {
    setSkills((prevSkill) =>
      prevSkill.filter((skill) => skill.id !== e.target.id)
    );
  }

  function reset() {
    setTempSkills((prevSkill) => {
      return { id: nanoid(), text: "" };
    });
  }

  const skillList = skills.map((skill) => (
    <li key={skill.id} id={skill.id}>
      {skill.text}
      <span id={skill.id} onClick={deleteSkill}>
        <i className="fas fa-minus"></i> delete
      </span>
    </li>
  ));

  return (
    <section className="skills">
      <fieldset>
        <legend>SKILLS</legend>
        <label>
          Skill
          <input
            type="text"
            value={tempSkills.text}
            onChange={handleChange}
          ></input>
        </label>
        <ul className="skills-list">
          {skills.length !== 0 && <label>Added skills</label>}
          {skillList}
        </ul>
        <span></span>

        <button className="addInputButton" onClick={() => addSkill()}>
          <i className="fas fa-plus"></i> add skill
        </button>
      </fieldset>
      <FormNavigation
        back="/resumeform/experience"
        next="/resumeform/preview"
        text="PREVIEW"
      />
    </section>
  );
}
