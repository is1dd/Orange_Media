import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const { isAuth } = useContext(AuthContext);
  const redirect = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // check if email already exists in local storage
    if (isAuth) {
      alert("User with this email already exists.");
      return;
    }
    // save user data in local storage
    localStorage.setItem("token", JSON.stringify({ name, email, mobile }));
    alert("Registration successful!");
    redirect("/login");
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Mobile:
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <style>
        {`
          form {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
          }
          label {
            margin: 10px 0;
          }
          input {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid gray;
            margin-left: 7px;
          }
          button {
            margin-top: 10px;
            padding: 10px 20px;
            background-color: blue;
            color: white;
            border-radius: 5px;
            border: none;
            cursor: pointer;
          }
          h1{
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}

export default RegistrationPage;
