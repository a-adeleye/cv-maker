import React from "react";
import FormNavigation from "./FormNavigation";
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
      responsibilities: [],
    },
  ]);

  const [tempResp, setTempResp] = React.useState({ id: "", text: "" });

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
    console.log(e.target.id !== tempResp.id && tempResp.text);
    const { value } = e.target;
    setTempResp((prevRes) => {
      return { ...prevRes, id: nanoid(), text: value };
    });
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
        responsibilities: [],
      },
    ]);
  }
  function addResponsibility(e) {
    const { id } = e.target;
    setExperience((prevExp) =>
      prevExp.map((exp) =>
        exp.id === id
          ? { ...exp, responsibilities: [...exp.responsibilities, tempResp] }
          : exp
      )
    );
  }

  console.log(experience);

  function value(e) {
    console.log(e.target.id !== tempResp.id && tempResp.text);
    return e.target.id !== tempResp.id && tempResp.text;
  }

  function deleteExperience(e) {
    setExperience((prevExp) => prevExp.filter((exp) => exp.id !== e.target.id));
  }
  
  function update(obj, name) {
    let newArr = obj.responsibilities;
    newArr.splice(name,1);
    return {...obj,responsibilities: newArr}
  }

  function deleteResponsibility(e) {
    const { id, name } = e.target;
    setExperience((prevExp) =>
      prevExp.map((item) =>
        item.id === id
          ? update(item,name) : item
      )
    );
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

      <div className="responsibilities">
        <label key={item.id}>
          Responsibility
          <input
            id={item.id}
            type="text"
            value={tempResp.text}
            onChange={handleResponsibility}
          ></input>
        </label>

        <button
          id={item.id}
          className="responsibility-button"
          onClick={addResponsibility}
        >
          <i className="fas fa-plus"></i> add responsibility
        </button>
        {item.responsibilities.map((responsibility, index) => (
          <li key={nanoid()} id={item.id}>
            {responsibility.text}
            <span id={item.id} name={index} onClick={deleteResponsibility}>
              <i className="fas fa-minus"></i> delete
            </span>
          </li>
        ))}
      </div>
    </div>
  ));

  console.log(experience.responsibilities)

  return (
    <section className="experience">
      <fieldset>
        <legend>EXPERIENCE</legend>
        {experienceInputs}
        <button className="addInputButton" onClick={addExperience}>
          <i className="fas fa-plus"></i> add another experience
        </button>
      </fieldset>
      <FormNavigation back="/resumeform/education" next="/resumeform/skill" text="NEXT"/>
    </section>
  );
}
