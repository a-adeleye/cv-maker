import React from "react";
import "../../styles/TypeTwo.css";
import { useSelector } from "react-redux";
import {
  selectProfile,
  selectEducation,
  selectSkills,
  selectExperience,
  selectGeneralDetails,
} from "../../resumeSlice";
import { nanoid } from "nanoid";

// TOP SECTION

function Top() {
  const generalDetails = useSelector(selectGeneralDetails);
  return (
    <section className="typeTwo-top">
      <div className="typeTwo-name-box">
        <h2>
          <span className="orange"> {generalDetails.firstName}</span>{" "}
          {generalDetails.lastName}
        </h2>
      </div>
      <p className="typeThree-title">{generalDetails.title}</p>
    </section>
  );
}

function Left() {
  return (
    <section className="typeTwo-left">
      <Contact />
      <Education />
      <Skills />
    </section>
  );
}

function Right(){
    return(
        <div className="typeTwo-right">
            <Profile />
            <Experience />
        </div>
    )
}

function Profile() {
  const profile = useSelector(selectProfile);

  return (
    <div className="typeTwo-profile">
      <h2>PROFILE</h2>
      <p>{profile}</p>
    </div>
  );
}

function Bottom() {
  const generalDetails = useSelector(selectGeneralDetails);
  return (
    <div className="typeTwo-bottom">
      <Left />
      <Right />
    </div>
  );
}

function Contact() {
  const generalDetails = useSelector(selectGeneralDetails);
  return (
    <div className="typeTwo-contact">
      <h2>CONTACT</h2>
      <p>
        <i className="fas fa-envelope"></i>
        {generalDetails.email}
      </p>
      <p>
        <i className="fas fa-map-marker-alt"></i>
        {generalDetails.address}
      </p>
      <p>
        <i className="fas fa-phone"></i>
        {generalDetails.phone}
      </p>
    </div>
  );
}

function Education() {
  const education = useSelector(selectEducation);
  const educationList = education.map((edu) => (
    <div className="typeTwo-education-details" key={nanoid()}>
      <h4 className="course-name">{edu.course}</h4>
      <h4 className="institution-name">{edu.institution}</h4>
      <p className="education-year">{edu.graduationYear}</p>
    </div>
  ));

  return (
    <section className="typeTwo-education">
      <h2>EDUCATION</h2>
      {educationList}
    </section>
  );
}

function Skills() {
  const skills = useSelector(selectSkills);
  const skillsList = skills.map((skill) => (
    <li key={nanoid()}>{skill.text}</li>
  ));
  return (
    <section>
      <h2>SKILLS</h2>
      <div className="typeTwo-skill-details">
        <ul>{skillsList}</ul>
      </div>
    </section>
  );
}

function Experience() {
  const experience = useSelector(selectExperience);
  const experienceList = experience.map((exp) => (
    <div className="experience-details" key={nanoid()}>
      <h4 className="role">{exp.role}</h4>
      <h4 className="company-name">{exp.company}</h4>
      <p className="experience-date">
        &nbsp; | <strong>{exp.fromDate}</strong> to{" "}
        <strong>{exp.toDate}</strong>
      </p>
      <ul>
        {exp.responsibilities.map((responsibility) => (
          <li key={nanoid()}>{responsibility}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <section className="typeTwo-experience">
      <h2>EXPERIENCE</h2>
      {experienceList}
    </section>
  );
}

export default function TypeThree() {
  return (
    <div className="resume">
      <Top />
      <Bottom />
    </div>
  );
}
