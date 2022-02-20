import React from "react";
import "../../styles/TypeTwo.css";
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
  const generalDetails = useSelector(selectGeneralDetails);
  return (
    <section className="t2-top">
      <div className="t2-name-box">
        <h2 className="t2-titles">
          <span className="orange"> {generalDetails.firstName}</span>{" "}
          {generalDetails.lastName}
        </h2>
      </div>
      <p className="">{generalDetails.title}</p>
    </section>
  );
}

function Left() {
  return (
    <section className="t2-left">
      <Contact />
      <Education />
      <Skills />
      <Certifications />
    </section>
  );
}

function Right() {
  return (
    <div className="t2-right">
      <Profile />
      <Experience />
    </div>
  );
}

function Profile() {
  const profile = useSelector(selectProfile);

  return (
    <div className="t2-profile">
      <h2 className="t2-titles">PROFILE</h2>
      <p>{profile}</p>
    </div>
  );
}

function Bottom() {
  const generalDetails = useSelector(selectGeneralDetails);
  return (
    <div className="t2-bottom">
      <Left />
      <Right />
    </div>
  );
}

function Contact() {
  const generalDetails = useSelector(selectGeneralDetails);
  return (
    <div className="t2-contact">
      <h2 className="t2-titles">CONTACT</h2>
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
    <div className="t2-education-details" key={nanoid()}>
      <h4 className="course-name">{edu.course}</h4>
      <h4 className="institution-name">{edu.institution}</h4>
      <p className="education-year">{edu.graduationYear}</p>
    </div>
  ));

  return (
    <section className="t2-education">
      <h2 className="t2-titles">EDUCATION</h2>
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
      <h2 className="t2-titles">SKILLS</h2>
      <div className="t2-skill-details">
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
    <section className="t2-experience">
      <h2 className="t2-titles">EXPERIENCE</h2>
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
      <h2 className="t2-titles">CERTIFICATIONS</h2>
      {certificationList}
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
