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
    setSkills((prevSkill) =>
      prevSkill.filter((skill) => skill.id !== e.target.id)
    );
  }

  console.log(skills);

  const skillList = skills.map((skill,) => (
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
