import { react, useState, useEffect, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { SetLocalStorage, GetLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedinUserData, setloggedinUserData] = useState(null);
  const [userData, setuserdata] = useContext(AuthContext);

  useEffect(() => {
    const loggedinUser = localStorage.getItem("loggedinUser");
    if (loggedinUser) {
      const userData = JSON.parse(loggedinUser);
      setUser(userData.role);
      setloggedinUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "a@a.c" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedinUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find((e) => {
        return e.email === email && e.password === password;
      });
      if (employee) {
        setUser("employee");
        setloggedinUserData(employee);
        localStorage.setItem(
          "loggedinUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        console.log("out here");

        alert("invalid");
      }
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedinUserData} />
      ) : null}
    </>
  );
};

export default App;
