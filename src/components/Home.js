import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";
import moment from "moment/moment";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "./Home.module.css";
const Home = () => {
  const { setTasks, tasks } = useContext(AuthContext);
  const handleCancel = (time) => {
    const filtered = tasks?.filter((el) => el.date != time);
    setTasks(filtered);
    localStorage.setItem("tasks", JSON.stringify(filtered));
  };
  const compareTime = () => {
    let times = moment().format("MMMM Do YYYY, h:mm:ss a");
    console.log(times);
  };
  compareTime();
  return (
    <div className={styles.container}>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Time</th>
            <th>Cancel Reminder</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((el) => (
            <tr>
              <td>{el.task}</td>
              <td>{el.date}</td>
              <td>
                <AiOutlineDelete
                  style={{
                    color: "red",
                    cursor: "pointer",
                    fontSize: "1.5rem",
                  }}
                  onClick={() => handleCancel(el.date)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
