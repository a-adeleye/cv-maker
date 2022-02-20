import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStorage } from "./localstorage";
import { Link } from "react-router-dom";
import typeOne from "../t1.png";
import typeTwo from "../t2.png";
import typeThree from "../t3.png";
import { chooseTemplate, selectTemplate } from "../resumeSlice";

function FormNavigation() {
  const template = useSelector(selectTemplate);
  return (
    <div className="formNavigation">
      <Link
        to="/cv-maker"
        style={{
          textDecoration: "none",
        }}
      >
        <button>BACK</button>
      </Link>
      {!template && 
        <button className="next">NEXT</button>
      }
      {template && <Link
        to="/cv-maker/resumeform/generaldetails"
        style={{
          textDecoration: "none",
        }}
      >
        <button className="next">NEXT</button>
      </Link>}
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

  React.useEffect(() => {
    let savedData = JSON.parse(localStorage.getItem("resumeState"));
    let newData = {...savedData, template: template}
    updateStorage(newData)
  },[template])

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

