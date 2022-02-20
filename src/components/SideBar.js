import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <section className="sidebar">
      <NavLink to="/cv-maker/templates" className="link">
        Template
      </NavLink>
      <NavLink to="generaldetails" className="link">
        General details
      </NavLink>
      <NavLink to="profile" className="link">
        Profile
      </NavLink>
      <NavLink to="education" className="link">
        Education
      </NavLink>
      <NavLink to="experience" className="link">
        Experience
      </NavLink>
      <NavLink to="skill" className="link">
        Skills
      </NavLink>
      <NavLink to="certifications" className="link">
        Certifications
      </NavLink>
      <NavLink to="preview" className="link">
        Preview
      </NavLink>
    </section>
  );
}
