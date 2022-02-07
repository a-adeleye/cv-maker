import React from "react";

export function GeneralDetails(props) {
  const { handleChange, name, title, email, phone, address, website } = props;
  return (
    <section className="general-details">
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          value={name}
          onChange={handleChange}
          required
        ></input>
      </label>
      <label htmlFor="title">
        Title:
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Full stack developer"
          value={title}
          onChange={handleChange}
          required
        ></input>
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          id="email"
          name="email"
          placeholder="example@mail.com"
          value={email}
          onChange={handleChange}
          required
        ></input>
      </label>
      <label htmlFor="phone">
        Phone:
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="0123456789"
          value={phone}
          onChange={handleChange}
          required
        ></input>
      </label>
      <label htmlFor="address">
        Address:
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Roosvelt Street, Addis Ababa"
          value={address}
          onChange={handleChange}
        ></input>
      </label>
      <label htmlFor="website">
        Website:
        <input
          type="text"
          id="text"
          name="text"
          placeholder="www.example.com"
          value={website}
          onChange={handleChange}
        ></input>
      </label>
      <button className="general-details--button">NEXT</button>
    </section>
  );
}

export function Profile(props) {
  return (
    <section className="profile">
      <label htmlFor="profile">
        Profile:
        <textarea
          id="profile"
          name="profile"
          value={props.profile}
          onChange={props.handleChange}
        ></textarea>
      </label>
      <button className="profile--button">NEXT</button>
    </section>
  );
}

export function Experience(props) {
  return (
    <section className="experience">
      <fieldset>
        <legend>EXPERIENCE</legend>
        <label htmlFor="role">
          Role:
          <input
            type="text"
            id="role"
            name="role"
            placeholder="Chief Executive Officer"
            value=""
            onChange=""
            required
          ></input>
        </label>
        <label htmlFor="role">
          Company:
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Google"
            value=""
            onChange=""
            required
          ></input>
        </label>
        <label htmlFor="role">
          From:
          <input
            type="text"
            id="from"
            name="from"
            placeholder="2020"
            value=""
            onChange=""
            required
          ></input>
        </label>
        <label htmlFor="role">
          To:
          <input
            type="text"
            id="to"
            name="to"
            placeholder="2021 / Present"
            value=""
            onChange=""
            required
          ></input>
        </label>
        <label htmlFor="role">
          Responsibility:
          <input
            type="text"
            id="to"
            name="to"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing"
            value=""
            onChange=""
            required
          ></input>
        </label>
        <button type="button" className="responsibility--button">
          <i class="fas fa-plus"></i> Add responsibility
        </button>
      </fieldset>
      <div className="experience--buttons">
        <button className="profile--button">
          <i class="fas fa-plus"></i> Add more experience
        </button>
        <button className="profile--button" style={{justifySelf: "flex-end"}}>NEXT</button>
      </div>
    </section>
  );
}

function Responsibilities() {
  return (
    <div>
      <input
        type="text"
        id="to"
        name="to"
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing"
        value=""
        onChange=""
        required
      ></input>
      <button type="button" className="responsibility--button">
        <i class="fas fa-plus"> Add responsibility</i>
      </button>
    </div>
  );
}
