import React from "react";
import { nanoid } from "nanoid";

export default function Education(props) {
  const [education, setEducation] = React.useState([
    {
      id: nanoid(),
      school: "",
      course: "",
      yearFrom: "",
      yearTo: "",
      cs: false,
    },
  ]);

  function deleteEducation(e) {
    setEducation((prevEdu) => 
    prevEdu.filter((edu) => edu.id !== e.target.id));
  }

  console.log(education);

  const educationInputs = education.map((item, index) => (
    <div key={index} className="educationInputs">
      <label>
        Institution
        <input
          id={item.id}
          name="school"
          type="text"
          value={item.school}
          onChange={handleChange}
          placeholder="Havard"
        ></input>
      </label>
      <label>
        Course
        <input
          id={item.id}
          name="course"
          type="text"
          value={item.course}
          onChange={handleChange}
          placeholder="Computer Engineering"
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
        <span id={item.id} onClick={deleteEducation}>
          <i className="fas fa-minus"></i> delete education
        </span>
      </label>
      <label>
        I've not graduated
        <input
          id={item.id}
          name="yearTo"
          type="checkbox"
          value={item.cs}
          onChange={handleChange}
        ></input>
      </label>
    </div>
  ));

  function handleChange(e) {
    const { id, name, value, type } = e.target;
    setEducation((prevEdu) =>
      prevEdu.map((edu) =>
        edu.id === id
          ? { ...edu, [name]: type === "checkbox" ? "yet to graduate" : value }
          : edu
      )
    );
  }

  function addEducation() {
    setEducation((prevEdu) => [
      ...prevEdu,
      {
        id: nanoid(),
        school: "",
        course: "",
        yearFrom: "",
        yearTo: "",
      },
    ]);
  }

  return (
    <div className="education">
      <fieldset>
        <legend>EDUCATION</legend>
        {educationInputs}
        <button className="addInputButton" onClick={addEducation}>
          <i className="fas fa-plus"></i> add another education
        </button>
      </fieldset>
    </div>
  );
}
