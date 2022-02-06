import React from "react";
import "./styles/App.css";
import TypeOne from "./components/TypeOne";
import Address from "./components/CVForm";

function App() {
  const [formData, setFormData] = React.useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    website: "",
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

  return (
    <div className="App">

      <main>
        <form className="cv-form">
          <Address
            name={formData.name}
            title={formData.title}
            email={formData.email}
            phone={formData.phone}
            address={formData.address}
            handleChange={handleChange}
          />
        </form>
      </main>
      <div className="preview">{typeOne && <TypeOne />}</div>
    </div>
  );
}

export default App;
