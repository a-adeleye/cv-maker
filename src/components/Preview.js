import React from "react";
import "../styles/TypeOne.css";
import { useSelector, useDispatch } from "react-redux";
import { updateStorage } from "./localstorage";
import TypeOne from "./Templates/TypeOne";
import TypeTwo from "./Templates/TypeTwo";
import TypeThree from "./Templates/TypeThree";
import { Link } from "react-router-dom";
import { chooseTemplate, selectTemplate, selectGeneralDetails } from "../resumeSlice";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default function Preview() {
  const template = useSelector(selectTemplate);
  const generalDetails = useSelector(selectGeneralDetails);
  const dispatch = useDispatch();

  function setActive(e) {
    const { name } = e.target;
    dispatch(chooseTemplate(name));
  }

  /*function screenshot() {
    html2canvas(document.querySelector(".resume")).then(function(canvas) {
      document.body.appendChild(canvas);
  });
  }
*/
  React.useEffect(() => {
    let savedData = JSON.parse(localStorage.getItem("resumeState"));
    let newData = { ...savedData, template: template };
    updateStorage(newData);
  }, [template]);

  function FormNavigation() {
    function getPDF() {
      let resume = document.querySelector(".resume");
      html2canvas(resume).then((canvas) => {
        const myImage = canvas.toDataURL("image/png");
        let pdf;
  
        if (canvas.width > canvas.height) {
          pdf = new jsPDF("l", "pt", [canvas.width - 250, canvas.height - 300], "a4");
        } else {
          pdf = new jsPDF("p", "pt", [canvas.height - 300, canvas.width - 250], "a4");
        }

        pdf.addImage(myImage, "png", 0, 0); 
        pdf.save(`${generalDetails.firstName} ${generalDetails.lastName} resume.pdf`);
        //screenshot();
      });
    }

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

        <button className="next" onClick={getPDF}>
          DOWNLOAD
        </button>
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
