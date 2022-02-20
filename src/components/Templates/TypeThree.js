import React from "react";
import "../../styles/TypeThree.css";
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
  return (
    <div className="top">
      <div className="contact-title">
        <strong>CONTACT</strong>
      </div>
      <div className="top-inner">
        <div className="typeThree--initials">
          <h4>JD</h4>
        </div>
      </div>
      <Name />
    </div>
  );
}

function Name() {
  const generalDetails = useSelector(selectGeneralDetails);
  return (
    <section className="typeThree-name-section">
      <h2>{generalDetails.lastName}</h2>
      <h1>{generalDetails.firstName}</h1>
      <p className="typeThree-title">{generalDetails.title}</p>
    </section>
  );
}

function Middle() {
  const profile = useSelector(selectProfile);
  const generalDetails = useSelector(selectGeneralDetails);
  return (
    <div className="middle">
      <div className="typeThree-profile">
        <h2>PROFILE</h2>
        <p>{profile}</p>
      </div>
      <div className="typeThree-contact">
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
    </div>
  );
}

function Bottom() {
  return (
    <div className="bottom">
      <Experience />
      <div className="typeThree-left">
        <Education />
        <Skills />
      </div>
    </div>
  );
}

function Education() {
  const education = useSelector(selectEducation);
  const educationList = education.map((edu) => (
    <div className="education-details" key={nanoid()}>
      <h4 className="course-name">{edu.course}</h4>
      <h4 className="institution-name">{edu.institution}</h4>
      <p className="education-year">{edu.graduationYear}</p>
    </div>
  ));

  return (
    <section className="education-section">
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
    <section className="skills-section">
      <h2>SKILLS</h2>
      <div className="skill-details">
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
    <section className="typeThree-experience">
      <h2>EXPERIENCE</h2>
      {experienceList}
    </section>
  );
}

export default function TypeThree() {
  return (
    <div className="resume">
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}
