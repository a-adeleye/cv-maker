import React from "react";

export default function Education(props) {
  const [education, setEducation] = React.useState([
    {
      id: "school 0",
      school: "",
      course: "",
      yearFrom: "",
      yearTo: "",
      cw: false,
    },
  ]);

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
          value={item.yearTo}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        I currently work here
        <input
          id={`school ${index}`}
          name="yearTo"
          type="checkbox"
          value={item.cw}
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
          ? { ...edu, [name]: type === "checkbox" ? "till date" : value }
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

  console.log(education);

  return (
    <div className="education">
      <fieldset>
        <legend>EDUCATION</legend>
        {educationInputs}
        <button className="addInputButton" onClick={addEducation}>
          Add another education
        </button>
      </fieldset>
    </div>
  );
}
