import React from "react";
import "../../styles/TypeOne.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTemplate,
  selectProfile,
  selectEducation,
  selectSkills,
  selectExperience,
  selectCertification,
  selectGeneralDetails,
} from "../../resumeSlice";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

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
      <hr></hr>
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
      <hr></hr>
      <div className="skill-details">
        <ul>{skillsList}</ul>
      </div>
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
      <hr></hr>
      {certificationList}
    </section>
  );
}

// RIGHT SECTION

function Contact() {
  const generalDetails = useSelector(selectGeneralDetails);

  function generateInitials() {
    let firstNameInitial = generalDetails.firstName.charAt(0);
    let secondNameInitial = generalDetails.lastName.charAt(0);
    return `${firstNameInitial}${secondNameInitial}`;
  }

  return (
    <section className="contact-section">
      <div className="initials">
        <h4>{generateInitials()}</h4>
      </div>
      <div className="contact-details">
        <p>
          <i className="fas fa-envelope"></i>
          {generalDetails.email}
        </p>
        <p>
          <i className="fas fa-mobile"></i> {generalDetails.phone}
        </p>
        <p>
          <i className="fas fa-globe"></i>
          {generalDetails.website}
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
      <p>{profile}</p>
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
    <section className="experience-section">
      <h2>EXPERIENCE</h2>
      <hr></hr>

      {experienceList}
    </section>
  );
}

export default function TypeOne() {
  const template = useSelector(selectTemplate);

  return (
    <div className="resume">
      <div className="left">
        <Address />
        <Name name={"name"} title="Fullstack developer" />
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
