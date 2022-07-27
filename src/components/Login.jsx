import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import "./Login.css";
import LoginInput from "./LoginInput";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter a valid email address!",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should include at least 1 uppercase letter, 1 number and a special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

//   function LoginButton() {
//     if (values != "") {
//         return <button className="login-button" onClick={() => {
//                 navigate("/Home")
//             }}>
//                 Login</button>
//     } else {
//         return <button className="login-button" disabled>Login</button>
//     }
//   }

  const navigate = useNavigate();
  
  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <FaTwitter className="login-twitter-icon"  size="2.5rem" color="rgb(29, 155, 240)"/>
        <h1 className="login-title">Log in to Twitter</h1>
        {inputs.map((input) => (
          <LoginInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="login-button" onClick={() => {
            if(values != ""){
                navigate("/Home")
        } else {
            navigate("/")
        }}}>
                Login</button>
      </form>
    </div>
  );
};

export default Login;