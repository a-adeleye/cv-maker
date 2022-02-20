import React from "react";
import "../styles/TypeOne.css";
import { useSelector, useDispatch } from "react-redux";
import { updateStorage } from "./localstorage";
import TypeOne from "./Templates/TypeOne";
import TypeTwo from "./Templates/TypeTwo";
import TypeThree from "./Templates/TypeThree";
import { Link } from "react-router-dom";
import { chooseTemplate, selectTemplate } from "../resumeSlice";

export default function Preview() {
  const template = useSelector(selectTemplate);
  const dispatch = useDispatch();

  function setActive(e) {
    const { name } = e.target;
    dispatch(chooseTemplate(name));
  }

  React.useEffect(() => {
    let savedData = JSON.parse(localStorage.getItem("resumeState"));
    let newData = { ...savedData, template: template };
    updateStorage(newData);
  }, [template]);

  function FormNavigation() {
    return (
      <div className="formNavigation">
        <Link
          to="/resumeform/skill"
          style={{
            textDecoration: "none",
          }}
        >
          <button>BACK</button>
        </Link>

        <button className="next">DOWNLOAD</button>
      </div>
    );
  }

  return (
    <div className="preview">
      <div className="previewNavigation">
        <p>Change template</p>
        <div className="buttons">
          {template !== "typeOne" && (
            <button
              className="secondary-button"
              name="typeOne"
              onClick={setActive}
            >
              Template One
            </button>
          )}
          {template !== "typeTwo" && (
            <button
              className="secondary-button"
              name="typeTwo"
              onClick={setActive}
            >
              Template Two
            </button>
          )}
          {template !== "typeThree" && (
            <button
              className="secondary-button"
              name="typeThree"
              onClick={setActive}
            >
              Template Three
            </button>
          )}
        </div>
      </div>
      {template === "typeOne" && <TypeOne />}
      {template === "typeTwo" && <TypeTwo />}
      {template === "typeThree" && <TypeThree />}

      <FormNavigation />
    </div>
  );
}
