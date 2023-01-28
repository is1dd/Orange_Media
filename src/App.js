import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";
import LoginPage from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import RegistrationPage from "./components/Registration";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route
          path="/detail"
          element={
            <PrivateRoute>
              <Details />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
