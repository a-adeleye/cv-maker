import React from "react";
import { nanoid } from "nanoid";

export default function Experience() {
  const [experience, setExperience] = React.useState([
    {
      id: nanoid(),
      role: "",
      company: "",
      yearFrom: "",
      yearTo: "",
      cw: false,
      responsibilities: [""],
    },
  ]);

  console.log(experience);

  function handleChange(e) {
    const { id, name, value, type } = e.target;
    setExperience((prevExp) =>
      prevExp.map((exp) =>
        exp.id === id
          ? { ...exp, [name]: type === "checkbox" ? "yet to graduate" : value }
          : exp
      )
    );
  }

  function handleResponsibility(e) {
    const { id, name, value } = e.target;

    function update(arr, name, value) {
      let newArray = [...arr.responsibilities];
      newArray.splice(name, 1, value);
      return newArray;
    }

    setExperience((prevExp) =>
      prevExp.map((exp) =>
        exp.id === id
          ? { ...exp, responsibilities: update(exp, name, value) }
          : exp
      )
    );
  }

  function addExperience(e) {
    setExperience((prevEx) => [
      ...prevEx,
      {
        id: nanoid(),
        role: "",
        company: "",
        yearFrom: "",
        yearTo: "",
        cw: false,
        responsibilities: [""],
      },
    ]);
  }

  function addResponsibility(e) {
    const { id } = e.target;
    setExperience((prevEx) =>
      prevEx.map((exp) =>
        exp.id === id
          ? { ...exp, responsibilities: [...exp.responsibilities, ""] }
          : exp
      )
    );
  }

  function deleteExperience(e) {
    setExperience((prevExp) => 
    prevExp.filter((exp) => exp.id !== e.target.id));
  }

  const experienceInputs = experience.map((item) => (
    <div key={item.id} className="experienceInputs">
      <label>
        Role
        <input
          id={item.id}
          name="role"
          type="text"
          value={item.role}
          onChange={handleChange}
          placeholder="Chief Executive Officer"
        ></input>
      </label>
      <label>
        Company
        <input
          id={item.id}
          name="company"
          type="text"
          value={item.company}
          onChange={handleChange}
          placeholder="Google"
        ></input>
      </label>

      <label>
        From
        <input
          id={item.id}
          name="yearFrom"
          type="date"
          onChange={handleChange}
        ></input>
      </label>
      <label>
        To
        <input
          id={item.id}
          name="yearTo"
          type="date"
          onChange={handleChange}
        ></input>
      </label>
      <label>
        I presently work here
        <input
          id={item.id}
          name="yearTo"
          type="checkbox"
          value={item.cw}
          onChange={handleChange}
        ></input>
      </label>

      <span id={item.id} onClick={deleteExperience}>
        <i className="fas fa-minus"></i> delete experience
      </span>
    </div>
  ));

  return (
    <section className="experience">
      <fieldset>
        <legend>EXPERIENCE</legend>
        {experienceInputs}
        <button className="addInputButton" onClick={addExperience}>
          <i className="fas fa-plus"></i> add another experience
        </button>
      </fieldset>
    </section>
  );
}
