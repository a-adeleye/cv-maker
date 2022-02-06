import React from "react";
import "../styles/TypeOne.css";

// LEFT SECTION

function Address() {
  return (
    <section className="address-section">
      <div className="address--column">
        <i className="fas fa-map-marker-alt"></i>
      </div>
      <div className="address">
        <p>Sports City, Dubai</p>
      </div>
    </section>
  );
}

function Name() {
  return (
    <section className="name-section">
      <h1 className="name">Smith Anderson</h1>
      <p className="title">
        <span>&#9871;</span> UX/UI designer
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

function Left() {
  return (
    <div className="left">
      <Address />
      <Name />
      <Education />
      <Skills />
      <Certifications />
    </div>
  );
}

// RIGHT SECTION

function Contact() {
  return (
    <section className="contact-section">
      <div className="initials">
        <h4>SA</h4>
      </div>
      <div className="contact-details">
        <p>
          <i className="fas fa-envelope"></i>adeleyeadeyemib@gmail.com
        </p>
        <p>
          <i className="fas fa-mobile"></i> 0588121250
        </p>
        <p>
          <i className="fas fa-globe"></i>www.adeleyeadeyemi.com
        </p>
      </div>
    </section>
  );
}

function Profile() {
  return (
    <section className="profile-section">
      <h2>PROFILE</h2>
      <hr></hr>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco
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

function Right() {
  return (
    <div className="right">
      <Contact />
      <Profile />
      <Experience />
    </div>
  );
}

export default function TypeOne() {
  return (
    <div className="container">
      <Left />
      <Right />
    </div>
  );
}
