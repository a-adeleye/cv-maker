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

  const generalDetails = useSelector(selectGeneralDetails);

  function generateInitials() {
    let firstNameInitial = generalDetails.firstName.charAt(0);
    let secondNameInitial = generalDetails.lastName.charAt(0);
    return `${firstNameInitial}${secondNameInitial}`;
  }

  return (
    <div className="top">
      <div className="contact-title">
        <strong>CONTACT</strong>
      </div>
      <div className="top-inner">
        <div className="t3-initials">
          <h4>{generateInitials()}</h4>
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
      <h2 className="t3-titles">{generalDetails.lastName}</h2>
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
        <h2 className="t3-titles">PROFILE</h2>
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
      <h2 className="t3-titles">EDUCATION</h2>
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
      <h2 className="t3-titles">SKILLS</h2>
      <div className="skill-details">
        <ul>{skillsList}</ul>
      </div>
    </section>
  );
}

function Experience() {
  const experience = useSelector(selectExperience);
  
  function formatDate(date) {
    if(date === 'present'){
      return date;
    }
    const dateObj = new Date(date);
    const monthNumber = dateObj.getUTCMonth() + 1;
    const year = dateObj.getUTCFullYear();
    let month;
    switch(monthNumber){
      case 1:
        month = 'JAN';
        break;
      case 2:
        month = 'FEB';
        break;
      case 3:
        month = 'MAR';
        break;
      case 4:
        month = 'APR';
        break;
      case 5:
        month = 'MAY';
        break;
      case 6:
        month = 'JUN';
        break;
      case 7:
        month = 'JUL';
        break;
      case 8:
        month = 'AUG';
        break;
      case 9:
        month = 'SEP';
        break;
      case 10:
        month = 'OCT';
        break;
      case 11:
        month = 'SEP';
        break;
      case 12:
        month = 'DEC';
        break;
      default:
        month = 'MON';

    }
    return `${month} ${year}`
  }


  const experienceList = experience.map((exp) => (
    <div key={nanoid()}>
      <h4 className="t3-role">{exp.role}</h4>
      <h4 className="t3-company">{exp.company} </h4>
      <span>
       {" "} | <strong>{formatDate(exp.fromDate)}</strong> to <strong>{formatDate(exp.toDate)}</strong>
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
      <h2 className="t3-titles">EXPERIENCE</h2>
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
      <h2 className="t3-titles">CERTIFICATIONS</h2>
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
