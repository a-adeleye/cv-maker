import React from "react";
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
    setSkills((prevSkill) => [...prevSkill, tempSkills]);
  }

  function deleteSkill(e) {
    console.log(typeof(skills[0].id));
    setSkills((prevSkill) =>
      prevSkill.filter((skill) => skill.id != e.target.id)
    );
  }

  console.log(skills);

  const skillInputs = skills.map((item, index) => (
    <label key={index}>
      Skill
      <input
        id={`skill ${skills.length}`}
        type="text"
        value={tempSkills.text}
        onChange={handleChange}
      ></input>
      <span id={`skill ${skills.length - 1}`} onClick={deleteSkill}>
        <i className="fas fa-minus"></i> delete{" "}
      </span>
    </label>
  ));

  const skillList = skills.map((skill, index) => (
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
        <ul className="skills-list">{skillList}</ul>
        <span></span>

        <button className="addInputButton" onClick={() => addSkill()}>
          <i className="fas fa-plus"></i> add skill
        </button>
      </fieldset>
    </section>
  );
}
