import React from "react";

export default function Skills() {
  const [skills, setSkills] = React.useState([{ id: "skill 0", value: "" }]);

  function handleChange(e) {
    const { id, value } = e.target;
    setSkills((prevSkill) =>
      prevSkill.map((skill) =>
        skill.id === id ? { ...skill, value: value } : skill
      )
    );
  }

  function addSkill() {
    setSkills((prevSkill) => [
      ...prevSkill,
      { id: `skill ${skills.length}`, value: "" },
    ]);
  }

  const skillInputs = skills.map((item, index) => (
    <label  key={index}>
      Skill
      <input
        id={`skill ${index}`}
        type="text"
        value={item.value}
        onChange={handleChange}
      ></input>
    </label>
  ));

console.log(skills)

  return (
    <section className="skills">
      <fieldset>
        <legend>SKILLS</legend>
        {skillInputs}
        <button className="addInputButton" onClick={addSkill}>
          <i className="fas fa-plus"></i> add another skill
        </button>
      </fieldset>
    </section>
  );
}
