import React from "react";
import "../styles/TypeOne.css";
import { useSelector, useDispatch } from 'react-redux';
import { selectTemplate, selectProfile, selectEducation, selectSkills, selectExperience, selectGeneralDetails } from "../resumeSlice";


// LEFT SECTION


function Address() {
  const generalDetails = useSelector(selectGeneralDetails);
  return (
    <section className="address-section">
      <div className="address--column">
        <i className="fas fa-map-marker-alt"></i>
      </div>
      <div className="address">
        <p>{generalDetails.address}</p>
      </div>
    </section>
  );
}

function Name() {
  const generalDetails = useSelector(selectGeneralDetails);
  return (
    <section className="name-section">
      <h1 className="name">{`${generalDetails.firstName} ${generalDetails.lastName}`}</h1>
      <p className="title">
        <span>&#9871;</span> {generalDetails.title}
      </p>
    </section>
  );
}

function Education() {
  return (
    <section className="education-section">
      <h2>EDUCATION</h2>
      <hr></hr>
      <div className="education-details">
        <h5 className="course-name">Course</h5>
        <h5 className="institution-name">University name</h5>
        <p className="education-year">2013 - 2018</p>
      </div>
      <div className="education-details">
        <h5 className="course-name">Course</h5>
        <h5 className="institution-name">University name</h5>
        <p className="education-year">2013 - 2018</p>
      </div>
      <div className="education-details">
        <h5 className="course-name">Course</h5>
        <h5 className="institution-name">University name</h5>
        <p className="education-year">2013 - 2018</p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills-section">
      <h2>SKILLS</h2>
      <hr></hr>
      <div className="skill-details">
        <ul>
          <li>Web design</li>
          <li>Web design</li>
          <li>Web design</li>
          <li>Web design</li>
          <li>Web design</li>
          <li>Web design</li>
        </ul>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="certifications-section">
      <h2>CERTIFICATIONS</h2>
      <hr></hr>
      <div className="certification-details">
        <h5 className="certification-name">AWS Cloud Practioner Associate</h5>
        <p className="certification-year">2013 - 2018</p>
      </div>
      <div className="certification-details">
        <h5 className="certification-name">AWS Cloud Practioner Associate</h5>
        <p className="certification-year">2013 - 2018</p>
      </div>
      <div className="certification-details">
        <h5 className="certification-name">AWS Cloud Practioner Associate</h5>
        <p className="certification-year">2013 - 2018</p>
      </div>
    </section>
  );
}


// RIGHT SECTION

function Contact() {
  const generalDetails = useSelector(selectGeneralDetails);

  function generateInitials() {
    let firstNameInitial = generalDetails.firstName.charAt(0);
    let secondNameInitial = generalDetails.lastName.charAt(0);
    return `${firstNameInitial}${secondNameInitial}`
  }

  return (
    <section className="contact-section">
      <div className="initials">
        <h4>{generateInitials()}</h4>
      </div>
      <div className="contact-details">
        <p>
          <i className="fas fa-envelope"></i>{generalDetails.email}
        </p>
        <p>
          <i className="fas fa-mobile"></i> {generalDetails.phone}
        </p>
        <p>
          <i className="fas fa-globe"></i>{generalDetails.website}
        </p>
      </div>
    </section>
  );
}

function Profile() {
  const profile = useSelector(selectProfile);
  return (
    <section className="profile-section">
      <h2>PROFILE</h2>
      <hr></hr>
      <p>
        {profile}
      </p>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section">
      <h2>EXPERIENCE</h2>
      <hr></hr>
      <div className="experience-details">
        <h5 className="role">CHIEF EXECUTIVE OFFICER</h5>
        <h5 className="company-name">LEATRA LTD</h5>
        <p className="experience-date">
          &nbsp; | <strong>2030</strong> to <strong>Present</strong>
        </p>

        <ul>
          <li>aboris nisi ut aliquip ex ea commodo consequat. </li>
          <li>
            empor incididunt ut labore et dolore magna aliqua. Ut enim ad mini
          </li>
          <li>
            bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco
          </li>
        </ul>
      </div>
      <div className="experience-details">
        <h5 className="role">CHIEF EXECUTIVE OFFICER</h5>
        <h5 className="company-name">LEATRA LTD</h5>
        <p className="experience-date">
          &nbsp; | <strong>2030</strong> to <strong>Present</strong>
        </p>

        <ul>
          <li>aboris nisi ut aliquip ex ea commodo consequat. </li>
          <li>
            empor incididunt ut labore et dolore magna aliqua. Ut enim ad mini
          </li>
          <li>
            bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco
          </li>
        </ul>
      </div>
      <div className="experience-details">
        <h5 className="role">CHIEF EXECUTIVE OFFICER</h5>
        <h5 className="company-name">LEATRA LTD</h5>
        <p className="experience-date">
          &nbsp; | <strong>2030</strong> to <strong>Present</strong>
        </p>

        <ul>
          <li>aboris nisi ut aliquip ex ea commodo consequat. </li>
          <li>
            empor incididunt ut labore et dolore magna aliqua. Ut enim ad mini
          </li>
          <li>
            bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco
          </li>
        </ul>
      </div>
    </section>
  );
}



export default function Preview() {

const templateName = useSelector(selectTemplate);


const education = useSelector(selectEducation);
const skills = useSelector(selectSkills);
const experience = useSelector(selectExperience);

console.log(templateName)
console.log(skills)
console.log(education)
console.log(experience)
//console.log(generalDetails)

  return (
    <div className="preview">
      <div className="left">
        <Address />
        <Name name={"name"} title="Fullstack developer"/>
        <Education />
        <Skills />
        <Certifications />
      </div>

      <div className="right">
        <Contact />
        <Profile />
        <Experience />
      </div>
    </div>
  );
}
