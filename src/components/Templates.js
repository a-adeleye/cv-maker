import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import typeOne from "../t1.jpg";
import typeTwo from "../t2.jpg";
import typeThree from "../t3.jpg";
import { chooseTemplate, selectTemplate } from "../resumeSlice";

function FormNavigation() {
  return (
    <div className="formNavigation">
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <button>BACK</button>
      </Link>
      <Link
        to="/resumeform/generaldetails"
        style={{
          textDecoration: "none",
        }}
      >
        <button className="next">NEXT</button>
      </Link>
    </div>
  );
}

export default function Templates() {
  const template = useSelector(selectTemplate);
  const dispatch = useDispatch();

  function setActive(e) {
    const { id, name } = e.target;
    dispatch(chooseTemplate(id || name));
  }

  const activeStyle = { color: "#fbec5c", fontWeight: "bold" };

  return (
    <section className="templates">
      <p className="templates--title ">Choose a template</p>
      <div className="templates-container">
        <div
          className="template"
          onClick={setActive}
          style={template === "typeOne" ? activeStyle : null}
        >
          <p
            className={template === "typeOne" ? "active" : "template--title"}
            id="typeOne"
          >
            Type One
          </p>
          <img name="typeOne" src={typeOne} alt="" />
        </div>

        <div
          className="template"
          onClick={setActive}
          style={template === "typeTwo" ? activeStyle : null}
        >
          <p
            id="typeTwo"
            className={template === "typeTwo" ? "active" : "template--title"}
          >
            Type Two
          </p>
          <img name="typeTwo" src={typeTwo} alt="" />
        </div>

        <div
          className="template"
          onClick={setActive}
          style={template === "typeThree" ? activeStyle : null}
        >
          <p
            id="typeThree"
            className={template === "typeThree" ? "active" : "template--title"}
          >
            Type Three
          </p>
          <img name="typeThree" src={typeThree} alt="" />
        </div>
      </div>
      <FormNavigation />
    </section>
  );
}
