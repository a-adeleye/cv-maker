import React from "react";
import "../styles/TypeOne.css";
import { useSelector, useDispatch } from "react-redux";
import TypeOne from "./Templates/TypeOne";
import TypeTwo from "./Templates/TypeTwo";
import TypeThree from "./Templates/TypeThree";
import { Link } from "react-router-dom";
import { selectTemplate } from "../resumeSlice";

export default function Preview() {
  const template = useSelector(selectTemplate);

  function FormNavigation() {
    return (
      <div className="formNavigation">
        <Link
          to="/resumeform/skills"
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

  const style = {
    height: "3em",
    fontSize: "0.8em",
    padding: "1em 2em",
    width: "11em",
  };

  return (
    <div className="preview">
      <div className="previewNavigation">
        <p>Change template</p>
        <div className="buttons">
          {template !== "typeOne" && (
            <button className="secondary-button">Template One</button>
          )}
          {template !== "typeTwo" && (
            <button className="secondary-button">Template Two</button>
          )}
          {template !== "typeThree" && (
            <button className="secondary-button">Template Three</button>
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
