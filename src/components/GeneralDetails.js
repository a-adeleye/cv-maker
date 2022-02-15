import React from "react";
import FormNavigation from "./FormNavigation";

export default function GeneralDetails() {
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

    console.log(formData)
  
    return (
      <div className="general-details">
        <fieldset>
          <legend>GENERAL DETAILS</legend>
  
          <label>
            First name
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
            ></input>
          </label>
          <label>
            Last name
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
            ></input>
          </label>
          <label>
            Title
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Full stack developer"
            ></input>
          </label>
          <label>
            Email
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
            ></input>
          </label>
          <label>
            Phone
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0123456789"
            ></input>
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Roosvelt, Addis Ababa"
            ></input>
          </label>
          <label>
            Website
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="www.example.com"
            ></input>
          </label>
        </fieldset>
        <FormNavigation back="/templates" next="/profile" text="NEXT"/>
      </div>
    );
  }