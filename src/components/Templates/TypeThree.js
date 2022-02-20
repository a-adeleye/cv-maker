import React from "react";
import "../../styles/TypeThree.css";
import { useSelector } from "react-redux";
import {
  selectProfile,
  selectEducation,
  selectSkills,
  selectExperience,
  selectCertification,
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
        <div className="t3-initials">
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
    <section className="t3-name">
      <h2>{generalDetails.lastName}</h2>
      <h1>{generalDetails.firstName}</h1>
      <p className="t3-title">{generalDetails.title}</p>
    </section>
  );
}

function Middle() {
  const profile = useSelector(selectProfile);
  const generalDetails = useSelector(selectGeneralDetails);
  return (
    <div className="middle">
      <div className="t3-contact">
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
      <div className="t3-profile">
        <h2>PROFILE</h2>
        <p>{profile}</p>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="bottom">
      <div className="t3-left">
        <Education />
        <Skills />
        <Certifications />
      </div>
      <div className="t3-right">
        <Experience />
      </div>
    </div>
  );
}

function Education() {
  const education = useSelector(selectEducation);
  const educationList = education.map((edu) => (
    <div className="t3-education" key={nanoid()}>
      <h4 className="course-name">{edu.course}</h4>
      <h4 className="institution-name">{edu.institution}</h4>
      <p className="education-year">{edu.graduationYear}</p>
    </div>
  ));

  return (
    <section className="t3-education-section">
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
    <section className="t3-skills-section">
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
    <div key={nanoid()}>
      <h4 className="t3-role">{exp.role}</h4>
      <h4 className="t3-company">{exp.company} </h4>
      <span>
       {" "} | <strong>{exp.fromDate}</strong> to <strong>{exp.toDate}</strong>
      </span>

      <ul className="t3-list">
        {exp.responsibilities.map((responsibility) => (
          <li key={nanoid()}>{responsibility}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <section className="t3-experience">
      <h2>EXPERIENCE</h2>
      {experienceList}
    </section>
  );
}

function Certifications() {
  const certifications = useSelector(selectCertification);
  const certificationList = certifications.map((certification) => (
    <div className="certification-details" key={nanoid()}>
      <h5 className="certification-name">{certification.name}</h5>
      <p className="certification-year">
        {certification.achievedYear} {certification.expirationYear && "-"}{" "}
        {certification.expirationYear}
      </p>
    </div>
  ));
  return (
    <section className="certifications-section">
      <h2>CERTIFICATIONS</h2>
      {certificationList}
    </section>
  );
}

export default function T3() {
  return (
    <div className="resume">
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}
