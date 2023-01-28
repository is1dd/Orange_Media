import { createContext, useState } from "react";
export const AuthContext = createContext();
let token = localStorage.getItem("token") || "";
let getTasks = JSON.parse(localStorage.getItem("tasks")) || [];
function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(token ? true : false);
  const [tasks, setTasks] = useState(getTasks.length ? getTasks : []);
  const loginUser = () => {
    setIsAuth(true);
  };
  const logOutUser = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider
      value={{ isAuth, loginUser, logOutUser, setTasks, tasks }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
