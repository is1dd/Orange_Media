import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function LoginPage() {
  let info = JSON.parse(localStorage.getItem("token")) || {};
  const [email, setEmail] = useState("");
  const redirect = useNavigate();
  const { loginUser } = useContext(AuthContext);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(info);
    // check if email exists in local storage
    if (info.email === email) {
      alert("Welcome back!");
      loginUser();
      redirect("/");
    } else {
      alert("This email is not registered. Please register first.");
      redirect("/register");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
      <p
        style={{
          color: "darkblue",
          cursor: "pointer",
          textAlign: "center",
        }}
        onClick={() => redirect("/register")}
      >
        Create new account
      </p>
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
            font-size: 16px;
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

export default LoginPage;
