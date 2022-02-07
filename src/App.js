import React from "react";
import "./styles/App.css";
import TypeOne from "./components/TypeOne";
import {GeneralDetails, Profile, Experience} from "./components/CVForm";

function App() {
  const [formData, setFormData] = React.useState({
    name: "John Doe",
    title: "Full stack developer",
    email: "example@mail.com",
    phone: "0123456789",
    address: "Roosvelt Street, Addis Ababa",
    website: "www.example.com",
    profile: "Adex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  });

  const [typeOne, setTypeOne] = React.useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }

  console.log(formData);

  function handleSubmit(e) {
    e.preventdefault();
  }

const {name, title, email, phone, address, website, profile} = formData;

  return (
    <div className="App">

      <main>
        <form className="cv-form">
          {!typeOne && <GeneralDetails
            name={name}
            title={title}
            email={email}
            phone={phone}
            address={address}
            website={website}
            handleChange={handleChange}
          />}
          {!typeOne && <Profile profile={profile} handleChange={handleChange}/>}
          <Experience />
        </form>
      </main>
      <div className="preview">{typeOne && <TypeOne address={address} name={name} title={title} profile={profile}/>}</div>
    </div>
  );
}

export default App;
