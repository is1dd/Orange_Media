import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import useGetRoute from "../hooks/useGetRoute";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const { isAuth, logOutUser } = useContext(AuthContext);
  const redirect = useNavigate();
  const route = useGetRoute();
  return (
    <div className={styles.myNavbar}>
      <div className={styles.logo}>
        <h2>Reminder</h2>
      </div>
      <div className={styles.links}>
        <ul>
          <li className={styles.home}>
            <Link to={route == "/" ? "/detail" : "/"}>
              {route == "/" ? "Details" : "Home"}
            </Link>
          </li>
          <li className={styles.auth}>
            {isAuth ? (
              <span onClick={logOutUser}>Logout</span>
            ) : (
              <span onClick={() => redirect("/login")}>Login</span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
