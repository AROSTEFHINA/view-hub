import { useState } from "react";
import "./App.css";
import FormInput from "./FormInput.jsx";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    number: "",
    image: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "your Username",
      errorMessage:
        "Please fill the column",
      label: "Enter your Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email",
      errorMessage: "Invalid email address!",
      label: "Your Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Enter your Password",
      errorMessage: "Please fill the password",
      label: "Password",
      minlength:4,
      maxlength:12,
      required: true,
    },
   
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>LOGIN FORM</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default App;