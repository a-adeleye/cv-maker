import React from "react";

export function Experience() {
  const [experience, setExperience] = React.useState([
    {
      id: "experience 0",
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
    const { id, name, value, type } = e.target;

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
        id: `experience ${experience.length}`,
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

  const experienceInputs = experience.map((item, index) => (
    <div key={index} className="experienceInputs">
      <label>
        Role
        <input
          id={`experience ${index}`}
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
          id={`experience ${index}`}
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
          id={`experience ${index}`}
          name="yearFrom"
          type="date"
          onChange={handleChange}
        ></input>
      </label>
      <label>
        To
        <input
          id={`experience ${index}`}
          name="yearTo"
          type="date"
          onChange={handleChange}
        ></input>
      </label>
      <label>
        I presently work here
        <input
          id={`experience ${index}`}
          name="yearTo"
          type="checkbox"
          value={item.cw}
          onChange={handleChange}
        ></input>
      </label>

      <div className="responsibilities">
        <h4>RESPONSIBILITIES</h4>
        <div className="responsibilityInputs">
          {item.responsibilities.map((x, index) => (
            <label key={index}>
              Responsibility
              <input
                type="text"
                value={x.value}
                id={`experience ${experience.length - 1}`}
                name={index}
                onChange={handleResponsibility}
              ></input>
            </label>
          ))}
          <button
            id={`experience ${experience.length - 1}`}
            className="responsibility-button"
            onClick={addResponsibility}
          >
            <i className="fas fa-plus"></i> add responsibility
          </button>
        </div>
      </div>
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

function Responsibilities() {
  return (
    <div>
      <input
        type="text"
        id="to"
        name="to"
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing"
        value=""
        onChange=""
        required
      ></input>
      <button type="button" className="responsibility--button">
        <i class="fas fa-plus"> Add responsibility</i>
      </button>
    </div>
  );
}
