import React from "react";

function GeneralDetails() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    website: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }

  return (
    <div className="general-details">
      <fieldset>
        <legend>GENERAL DETAILS</legend>

        <label>
          First name
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
          ></input>
        </label>
        <label>
          Last name
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
          ></input>
        </label>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Full stack developer"
          ></input>
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
          ></input>
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0123456789"
          ></input>
        </label>
        <label>
          Address
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Roosvelt, Addis Ababa"
          ></input>
        </label>
        <label>
          Website
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="www.example.com"
          ></input>
        </label>
      </fieldset>
    </div>
  );
}

function Profile() {
  const [profile, setProfile] = React.useState("");

  function handleChange(e) {
    setProfile((prev) => (prev = e.target.value));
  }

  return (
    <div className="profile">
      <fieldset>
        <legend>PROFILE</legend>
        <textarea
          name="profile"
          rows="9"
          cols="10"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
          onChange={handleChange}
        ></textarea>
      </fieldset>
    </div>
  );
}

function Education(props) {
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
        <button className="addInputButton" onClick={addEducation}>Add another education</button>
      </fieldset>
    </div>
  );
}

export default function ResumeForm() {
  const [formElement, setFormElement] = React.useState(1);

  function next() {
    setFormElement((prev) => prev + 1);
  }

  function back() {
    setFormElement((prev) => prev - 1);
  }

  function handleChange(e) {
    const { name, value } = e.target;
  }

  console.log(formElement);

  return (
    <section className="resumeform">
      {formElement === 1 && (
        <GeneralDetails
          handleClick={next}
          handleChange={handleChange}
        ></GeneralDetails>
      )}
      {formElement === 2 && <Profile handleClick={next} />}
      {formElement === 3 && <Education handleClick={next} />}
      <div className="formNavigationButtons">
        {formElement !== 1 && <button onClick={back}>BACK</button>}
        <button onClick={next} className="next">
          NEXT
        </button>
      </div>
    </section>
  );
}
