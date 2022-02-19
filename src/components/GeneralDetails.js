import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addGeneralDetails, selectGeneralDetails
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

      <Link
        to="/resumeform/profile"
        style={{
          textDecoration: "none",
        }}
      >
        <button className="next" onClick={props.addDetails}>NEXT</button>
      </Link>
    </div>
  );
}

export default function GeneralDetails() {

  const generalDetails = useSelector(selectGeneralDetails)

  React.useEffect(() => {
    setFormData(generalDetails)
  },[])

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
    dispatch(addGeneralDetails(formData));
  }

  return (
    <div className="general-details">
      <GeneralDetailsInput formData={formData} handleChange={handleChange} />
      <FormNavigation addDetails={addDetails} />
    </div>
  );
}
