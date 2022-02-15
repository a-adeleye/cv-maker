import { NavLink } from "react-router-dom"
import typeOne from "../t1.jpg";
import typeTwo from "../t2.jpg";
import typeThree from "../t3.jpg";

export default function Templates() {

  let selectedTemplate = "typeOne";

  function setActive(e) {
    selectedTemplate = e.target.name;
  }

  const activeStyle = { color: "#fbec5c"};

  return (
    <section className="templates">
      <p className="templates--title ">Choose a template</p>
      <div className="templates-container">
        <NavLink to="/generaldetails" className='templates-link' name="typeOne" onClick={setActive} style = {selectedTemplate === "typeOne" ? activeStyle: null}>
          <div className="template">
            <p className="template--title">Type One</p>
            <img src={typeOne} alt="" />
          </div>
        </NavLink>
        <NavLink to="/generaldetails" className='templates-link' name="typeTwo" onClick={setActive} style = {selectedTemplate === "typeTwo" ? activeStyle: null}>
          <div className="template">
            <p className="template--title">Type Two</p>
            <img src={typeTwo} alt="" />
          </div>
        </NavLink>
        <NavLink to="/generaldetails" className='templates-link' name="typeThree" onClick={setActive} style = {selectedTemplate === "typeThree" ? activeStyle: null}>
          <div className="template">
            <p className="template--title">Type Three</p>

            <img src={typeThree} alt="" />
          </div>
        </NavLink>
      </div>
    </section>
  );
}
