import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectGeneralDetails,
  addGeneralDetails,
  editGeneralDetails,
} from "../resumeSlice";
import { Link } from "react-router-dom";

function GeneralDetailsInput(props) {
  return (
    <fieldset className="two-columns">
      <legend>GENERAL DETAILS</legend>

      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={props.formData.firstName}
          onChange={props.handleChange}
          placeholder="John"
        ></input>
      </label>
      <label>
        Last name
        <input
          type="text"
          name="lastName"
          value={props.formData.lastName}
          onChange={props.handleChange}
          placeholder="Doe"
        ></input>
      </label>
      <label>
        Title
        <input
          type="text"
          name="title"
          value={props.formData.title}
          onChange={props.handleChange}
          placeholder="Full stack developer"
        ></input>
      </label>
      <label>
        Email
        <input
          type="text"
          name="email"
          value={props.formData.email}
          onChange={props.handleChange}
          placeholder="example@mail.com"
        ></input>
      </label>
      <label>
        Phone
        <input
          type="tel"
          name="phone"
          value={props.formData.phone}
          onChange={props.handleChange}
          placeholder="0123456789"
        ></input>
      </label>
      <label>
        Address
        <input
          type="text"
          name="address"
          value={props.formData.address}
          onChange={props.handleChange}
          placeholder="Roosvelt, Addis Ababa"
        ></input>
      </label>
      <label>
        Website
        <input
          type="text"
          name="website"
          value={props.formData.website}
          onChange={props.handleChange}
          placeholder="www.example.com"
        ></input>
      </label>
    </fieldset>
  );
}

function PreviewNavigation(props) {
  return (
    <div className="formNavigation">
      <button onClick={props.togglePreview}>BACK</button>
      <Link
        to="/resumeform/profile"
        style={{
          textDecoration: "none",
        }}
      >
        <button className="next">NEXT</button>
      </Link>
    </div>
  );
}

function FormNavigation(props) {
  return (
    <div className="formNavigation">
      <Link
        to="/templates"
        style={{
          textDecoration: "none",
        }}
      >
        <button>BACK</button>
      </Link>
      {props.validate() && (
        <button className="next" onClick={props.next}>
          NEXT
        </button>
      )}
      {!props.validate() && (
        <Link
          to="/resumeform/profile"
          style={{
            textDecoration: "none",
          }}
        >
          <button className="next">NEXT</button>
        </Link>
      )}
    </div>
  );
}

export default function GeneralDetails() {
  const generalDetails = useSelector(selectGeneralDetails);
  const dispatch = useDispatch();

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    website: "",
  });

  React.useEffect(() => {
    if (generalDetails.firstName) {
      setFormData((prevData) => (prevData = generalDetails));
    }
  }, []);

  const [editingOn, setEditingOn] = React.useState(false);
  const [preview, setPreview] = React.useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }

  function addDetails() {
    if (generalDetails.firstName && !editingOn){
      togglePreview();
      return;
    }
    dispatch(addGeneralDetails(formData));
    togglePreview();
    reset();
  }

  function saveEdit() {
    dispatch(editGeneralDetails(formData));
    togglePreview();
    reset();
  }

  function editDetails() {
    setPreview((prev) => (prev = !prev));
    toggleEditing();
    setFormData(
      (prevData) =>
        (prevData = {
          ...formData,
          firstName: generalDetails.firstName,
          lastName: generalDetails.lastName,
          title: generalDetails.title,
          email: generalDetails.email,
          phone: generalDetails.phone,
          address: generalDetails.address,
          website: generalDetails.website,
        })
    );
  }

  function reset() {
    setFormData((prevData) => {
      return {
        firstName: "",
        lastName: "",
        title: "",
        email: "",
        phone: "",
        address: "",
        website: "",
      };
    });
  }

  function DetailsPreview(props) {
    const { firstName, lastName, title, email, phone, address, website } =
      props;

    return (
      <fieldset
        className="two-columns"
        style={{ gridTemplateColumns: "3fr 1fr" }}
      >
        <legend>GENERAL DETAILS</legend>

        <div>
          <p>
            <strong>First name</strong>: {firstName}
          </p>
          <p>
            <strong>last name</strong>: {lastName}
          </p>
          <p>
            <strong>Title</strong>: {title}
          </p>
          <p>
            <strong>Email</strong>: {email}
          </p>
          <p>
            <strong>Phone</strong>:{phone}
          </p>
          <p>
            <strong>Address</strong>: {address}
          </p>
          <p>
            <strong>Website</strong>: {website}
          </p>
        </div>
        <div>
          <span>
            <i className="fas fa-edit" onClick={editDetails}></i>
          </span>
        </div>
      </fieldset>
    );
  }

  function togglePreview() {
    setPreview((prev) => (prev = !prev));
  }

  function toggleEditing() {
    setEditingOn((prev) => (prev = !prev));
  }

  function validate() {
    if (generalDetails.firstName) {
      return true;
    }
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === "" ||
      formData.phone === ""
    ) {
      return false;
    }
    return true;
  }

  const { firstName, lastName, title, email, phone, website, address } =
    generalDetails;

  return (
    <div className="general-details">
      {!preview && (
        <GeneralDetailsInput formData={formData} handleChange={handleChange} />
      )}
      {preview && (
        <DetailsPreview
          firstName={firstName}
          lastName={lastName}
          title={title}
          email={email}
          phone={phone}
          website={website}
          address={address}
        />
      )}

      {!preview && (
        <FormNavigation
          next={editingOn ? saveEdit : addDetails}
          validate={validate}
        />
      )}

      {preview && <PreviewNavigation togglePreview={togglePreview} />}
    </div>
  );
}
