import React from "react";

export default function Address(props) {
  const { handleChange, name, title, email, phone, address, website } = props;
  return (
    <section className="general-details">
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
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
          value={website}
          onChange={handleChange}
        ></input>
      </label>
      <button className="general-details--button">NEXT</button>
    </section>
  );
}
