import React from "react";

export default function Education(props) {
  const [education, setEducation] = React.useState([
    {
      id: "school 0",
      school: "",
      course: "",
      yearFrom: "",
      yearTo: "",
      cs: false,
    },
  ]);

  console.log(education)

  const educationInputs = education.map((item, index) => (
    <div key={index} className="educationInputs">
      <label>
        Institution
        <input
          id={`school ${index}`}
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
          id={`school ${index}`}
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
          id={`school ${index}`}
          name="yearFrom"
          type="date"
          onChange={handleChange}
        ></input>
      </label>
      <label>
        To
        <input
          id={`school ${index}`}
          name="yearTo"
          type="date"
          onChange={handleChange}
        ></input>
      </label>
      <label>
        I've not graduated
        <input
          id={`school ${index}`}
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
        id: `school ${education.length}`,
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
        <i className="fas fa-plus"></i>  add another education
        </button>
      </fieldset>
    </div>
  );
}
