import React from "react";

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

export default function Right() {
  return (
    <div className="right">
      <Contact />
      <Profile />
      <Experience />
    </div>
  );
}
