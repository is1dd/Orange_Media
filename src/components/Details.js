import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";

const Details = () => {
  const [date, setData] = useState("");
  const [task, setTask] = useState("");
  let info = JSON.parse(localStorage.getItem("token")) || {};
  const { setTasks, tasks } = useContext(AuthContext);
  const checkExists = (time) => {
    let filtered = tasks?.filter((el) => el.date == time);
    return filtered.length ? true : false;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkExists(date)) {
      alert("you cannot add two task at same time");
    } else {
      let data = {
        date,
        task,
        email: info.email,
      };
      setTasks([...tasks, data]);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      alert("Task Created");
    }
  };
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input
          type={"datetime-local"}
          required
          onChange={(e) => setData(e.target.value)}
        />
        <input
          type={"text"}
          required
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type={"submit"}
          value="Add a Task"
          placeholder={"Add a task description"}
        />
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
            margin: 5px;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid gray;
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
         
        `}
      </style>
    </div>
  );
};

export default Details;
