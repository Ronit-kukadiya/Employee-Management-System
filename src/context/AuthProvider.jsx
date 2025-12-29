import { React, useState, useEffect, createContext } from "react";
import { GetLocalStorage, SetLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userdata, setuserdata] = useState(null);

  useEffect(() => {
    SetLocalStorage();
    const { employees } = GetLocalStorage();
    setuserdata(employees);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userdata, setuserdata]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
