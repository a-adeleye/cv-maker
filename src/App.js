import React from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Templates from "./Templates";
import ResumeForm from "./ResumeForm";

function App() {
  const [formData, setFormData] = React.useState({
    name: "John Doe",
    title: "Full stack developer",
    email: "example@mail.com",
    phone: "0123456789",
    address: "Roosvelt Street, Addis Ababa",
    website: "www.example.com",
    profile:
      "Adex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
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

  const { name, title, email, phone, address, website, profile } = formData;

  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="templates" element={<Templates />}></Route>
          <Route path="resumeform" element={<ResumeForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
