import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStorage } from "./localstorage";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { selectCertification, addCertifications, saveEditedCertification, deleteCertifications} from "../resumeSlice";

function CertificationInputs(props) {
  const { handleChange, formData, addCertification } = props;

  function generateArrayOfYears() {
    var max = new Date().getFullYear()
    var min = max - 50;
    var years = []
  
    for (var i = max; i >= min; i--) {
      years.push(i)
    }
    return years
  }

  const years = generateArrayOfYears();

  return (
    
      <fieldset className="one-column">
        <legend>CERTIFICATIONS</legend>

        <label>
          Name
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="AWS Cloud Practitioner"
          ></input>
        </label>
        <label>
          Year achieved
          <select
            name="achievedYear"
            value={formData.achievedYear}
            onChange={handleChange}
          >
            { years.map(year => <option key={nanoid()}>{year}</option>)}
          </select>
        </label>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5em",
            flexBasis: "45%",
          }}
        >
          <label>
            Expiration year
            <select
              name="expirationYear"
              value={formData.expirationYear}
              onChange={handleChange}
            >
              { years.map(year => <option key={nanoid()}>{year}</option>)}
            </select>
          </label>
          <label>
            Does not expire
            <input
              name="expirationYear"
              type="checkbox"
              value={formData.exp}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <label>
          &nbsp;
          <button className="addInputButton" onClick={addCertification}>
            <i className="fas fa-plus"></i> add another certification
          </button>
        </label>
      </fieldset>
  );
}

export default function Certification() {
  const certifications = useSelector(selectCertification);
  const dispatch = useDispatch();

  const [formData, setFormData] = React.useState({
    id: nanoid(),
    name: "",
    achievedYear: "",
    expirationYear: "",
    exp: false,
  });

  const [editingOn, setEditingOn] = React.useState(false);
  const [preview, setPreview] = React.useState(false);

  React.useEffect(() => {
    let savedData = JSON.parse(localStorage.getItem("resumeState"));
    let newData = {...savedData, certifications: certifications}
    updateStorage(newData)
  },[certifications])

  function deleteCertification(e) {
    dispatch(deleteCertifications(e.target.id))
  }

  function toggleEditing() {
    setEditingOn((prevEdit) => (prevEdit = !prevEdit));
  }

  function editCertification(e) {
    const { id } = e.target;
    setPreview((prev) => (prev = !prev));
    toggleEditing();
    let newArray = certifications.filter((cert) => cert.id === id);
    setFormData(
      (prevData) =>
        (prevData = {
          ...formData,
          id: newArray[0].id,
          name: newArray[0].name,
          achievedYear: newArray[0].achievedYear,
          expirationYear: newArray[0].expirationYear,
          exp: newArray[0].exp,
        })
    );
  }

  function handleChange(e) {
    const { value, type, name } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? "" : value,
      };
    });
  }

  function validate() {
    if(certifications.length){
      return true;
    }
    if (
      formData.name === "" ||
      formData.achievedYear === ""
    ) {
      return false;
    }
    return true;
  }

  function saveEdit() {
  dispatch(saveEditedCertification(formData))
    reset();
    toggleEditing();
  }

  function addCertification() {
    if (validate()) {
      dispatch(addCertifications(formData))
      reset();
    }
  }

  function reset() {
    setFormData((prevData) => {
      return {
        ...prevData,
        id: nanoid(),
        name: "",
        achievedYear: "",
        expirationYear: "",
        exp: false,
      };
    });
  }

  function CertificationNavigation() {

    return (
      <div className="formNavigation">
        <Link to="/resumeform/skill" style={{ textDecoration: "none" }}>
          <button>BACK</button>
        </Link>
        {validate() && (
          <button className="next" onClick={previewCertification}>
            NEXT
          </button>
        )}
        {!validate() && (
          <Link to="/resumeform/preview" style={{ textDecoration: "none" }}>
            <button className="next">NEXT</button>
          </Link>
        )}
      </div>
    );
  }

  function PreviewNavigation() {
    return (
      <div className="formNavigation">
        <button onClick={previewCertification}>BACK</button>
        <Link to="/resumeform/preview" style={{ textDecoration: "none" }}>
          <button className="next">NEXT</button>
        </Link>
      </div>
    );
  }

  function previewCertification() {
    if(validate() && !formData.name){
      setPreview((prev) => (prev = !prev));
      return;
    }
    if (validate()) {
      editingOn ? saveEdit() : addCertification();
    }
    setPreview((prev) => (prev = !prev));
  }

  function CertificationPreview(props) {
    const { name,achievedYear, expirationYear, id, number } = props;

    return (
      <div className="three-columns">
        <h4>{number}</h4>
        <div>
          <p>
            <strong>Certification name</strong>: {name}
          </p>
          <p>
            <strong>Achieved year</strong>: {achievedYear}
          </p>
          <p>
            <strong>Expiration year</strong>: {expirationYear}
          </p>
        </div>
        <div>
          <span onClick={editCertification}>
            <i className="fas fa-edit" id={id}></i>
          </span>
          <span onClick={deleteCertification}>
            <i className="fas fa-trash" id={id}></i>
          </span>
        </div>
      </div>
    );
  }

  const certificationList = certifications.map((cert, index) => (
    <CertificationPreview
      key={nanoid()}
      id={cert.id}
      name={cert.name}
      achievedYear={cert.achievedYear}
      expirationYear={cert.expirationYear}
      number={index + 1}
    />
  ));

  const certificationItems = (
    <fieldset>
      <legend>CERTIFICATIONS</legend>
      {certificationList}
      <button className="addInputButton" onClick={previewCertification}>
        <i className="fas fa-plus"></i> add more certifications
      </button>
    </fieldset>
  );
  return (
    <div className="certifications">
      {!preview && (
        <CertificationInputs
          formData={formData}
          handleChange={handleChange}
          addCertification={editingOn ? saveEdit : addCertification}
        ></CertificationInputs>
      )}
      {preview && certificationItems}
      {!preview && (
        <CertificationNavigation />
      )}
      {preview && <PreviewNavigation />}
    </div>
  );
}